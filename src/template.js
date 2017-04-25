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
            renderAll: (...args) => this.renderAll(...args),
            render: (...args) => this.render(...args),
            components: this.container
        };
    }
    
    instantiate(component) {
        return new component(this.getInstanceParams());
    }
    
    renderAll(...components) {
        return new Promise((resolve, reject) => {
            let renderedComponents = {};
            let renderedComponentsCnt = 0;
            components.forEach(component => this.render(component).then(rendering => {
                renderedComponents[component.name] = rendering;
                if (++renderedComponentsCnt >= components.length) {
                    resolve(renderedComponents);
                }
            }).catch(reject));
        });
    }

    render(component, ...params) {
        return new Promise((resolve, reject) => {
            let instance = this.instantiate(component),
                instanceRender = () => resolve(instance[renderMethodName](...params));

            if (instance[awaitMethodName] !== undefined) {
                new Promise((awaitResolve, awaitReject) =>
                    instance[awaitMethodName](awaitResolve, awaitReject, this.getInstanceParams()))
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

class HomePage {
    constructor() {
        this.title = 'Hello world';
    }
    
    await(resolve, reject, { render, components }) {
        render(components.Message, { message: 'home page', type: 'success' })
            .then(msg => resolve(this.msg = msg));
    }

    render({ subtitle }) {
        return `
            <h1>${ this.title }<h1>
            <p>${ subtitle }</p>
            <hr/>
            <div class="body">${ this.msg }</div>
        `;
    }

}


let engine = new Engine().register(
    HomePage,
    Message
);

engine.render(HomePage, { subtitle: 'subtitle' }).then(console.log);
