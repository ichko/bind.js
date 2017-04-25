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
    
    instantiate(component) {
        return new component({
            render: (...args) => this.renderAll(...args),
            components: this.container
        });
    }
    
    renderAll(...components) {
        return new Promise((resolve, reject) => {
            let renderedComponents = {};
            let renderedComponentsCnt = 0;
            components.forEach(component => this.render(component)
                .then(result => {
                    renderedComponents[component.name] = result;
                    if (++renderedComponentsCnt === components.length) {
                        resolve(renderedComponents);
                    }
                })
                .catch(reject));
        });
    }

    render(component, params) {
        return new Promise((resolve, reject) => {
            let instance = this.instantiate(component),
                instanceRender = () => resolve(instance[renderMethodName](params));

            if (instance[awaitMethodName] !== undefined) {
                new Promise((awaitResolve, awaitReject) =>
                    instance[awaitMethodName](awaitResolve, awaitReject))
                .then(instanceRender)
                .catch(reject);
            } else {
                try {
                    resolve(instanceRender());
                } catch(error) {
                    reject(error);
                }
            }
        });
    }
}



class Home {
    render() {
        return `This is the home page!`;
    }
}

class Component {
    constructor({ render, components }) {
        this.rend = render;
        this.components = components;
        this.title = 'Hello world';
    }
    
    await(resolve) {
        setTimeout(() => this.rend(this.components.Home)
            .then(html => resolve(this.html = html)), 100);
    }

    render({ subtitle }) {
        return `
            <h1>${ this.title }<h1>
            <p>${ subtitle }</p>
            <hr/>
            <div class=sub>${ this.html.Home }</div>
        `;
    }

}


let engine = new Engine().register(
    Component,
    Home
);

engine.render(Component, { subtitle: 'subtitle' })
    .then(html => console.log(html));
