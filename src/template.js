const awaitMethodName = 'await';
const renderMethodName = 'render';

class Engine {
    constructor(container = {}) {
        this.container = container;
    }
    
    register(...types) {
        types.forEach(type => this.container[type.name] = type);
        return this;
    }
    
    getInstanceParams() {
        return {
            render: (...args) => this.render(...args),
            renderAll: (...args) => this.renderAll(...args),
            asyncRenderAll: (...args) => this.asyncRenderAll(...args),
            asyncRender: (...args) => this.asyncRender(...args),
            components: this.container
        };
    }
    
    instantiate(component) {
        return new component(this.getInstanceParams());
    }
    
    render(component, ...params) {
        return this.instantiate(component)[renderMethodName](...params);
    }
    
    renderAll(...components) {
        return (...params) => {
            let result = {};
            components.forEach(component =>
                result[component.name] = this.render(component, ...params));
            return result;
        };
    }
    
    asyncRenderAll(...components) {
        return (...params) => new Promise((resolve, reject) => {
            let renderedComponents = {};
            let renderedComponentsCnt = 0;
            components.forEach(component => this.asyncRender(component, ...params).then(rendering => {
                renderedComponents[component.name] = rendering;
                if (++renderedComponentsCnt >= components.length) {
                    resolve(renderedComponents);
                }
            }).catch(reject));
        });
    }

    asyncRender(component, ...params) {
        return new Promise((resolve, reject) => {
            let instance = this.instantiate(component),
                instanceRender = () => resolve(instance[renderMethodName](...params));

            if (instance[awaitMethodName] !== undefined) {
                new Promise((awaitResolve, awaitReject) =>
                    instance[awaitMethodName](awaitResolve, this.getInstanceParams()))
                .then(instanceRender)
                .catch(reject);
            } else {
                try {
                    instanceRender();
                } catch(error) {
                    reject(error);
                }
            }
        });
    }
}



class Message {
    render({ message, type  = 'info' } = {}) {
        return `<h1 class="${ type }">${ message }</h1>`;
    }
}

class Button {
    render({ text } = {}) {
        return `<button></button>`;
    }
}

class HomePage {
    constructor({ render, components }) {
        this.title = 'Hello world';
        this.rend = render;
        this.components = components;
    }

    render({ subtitle }) {
        return `
            <h1>${ this.title }<h1>
            <p>${ subtitle }</p>
            <hr/>
            <div class="body">
                ${ this.rend(this.components.Message, { message: 'Home page' }) }
                ${ this.rend(this.components.Button) }
            </div>
        `;
    }

}


let engine = new Engine().register(
    HomePage,
    Message,
    Button
);

let rendering = engine.render(HomePage, { subtitle: 'subtitle' });
console.log(rendering);
