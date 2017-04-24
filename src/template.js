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
            render: params => this.render(params),
            components: this.container
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
        this.compRender = render;
        this.components = components;
        this.title = 'Hello world';
    }
    
    await(resolve) {
        setTimeout(() => this.compRender(this.components.Home)
            .then(homeHtml => resolve(this.homeHtml = homeHtml)), 100);
    }

    render({ subtitle }) {
        return `
            <h1>${ this.title }<h1>
            <p>${ subtitle }</p>
            <hr/>
            <div class=sub>${ this.homeHtml }</div>
        `;
    }

}


let engine = new Engine().register(
    Component,
    Home
);

engine.render(Component, { subtitle: 'sub title' })
    .then(html => console.log(html));
