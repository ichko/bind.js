const renderMethodName = 'template';

class Engine {
    constructor(container = {}) {
        this.container = container;
    }
    
    register(...types) {
        types.forEach(type => this.container[type.name] = type);
        return this;
    }
    
    helpers() {
        return {
            render: (...args) => this.render(...args),
            _: (...args) => this.tagTemplate(...args),
            components: this.container,
        };
    }
    
    tagTemplate(strings, ...values) {
        return new Promise((resolve, reject) => {
            let resolvedValues = Array(values.length);
            let resolutionCnt = 0;
            values.forEach((value, id) => {
                if (value.then !== undefined) {
                    value.then(resolution => {
                        resolvedValues[id] = resolution;
                        resolutionCnt++;
                    });
                } else {
                    resolvedValues[id] = value;
                    resolutionCnt++;
                }       
                if (++resolutionCnt >= values.length) {
                    let resolvedTemplate = strings.map((string, id) =>
                        string + resolvedValues[id] ? resolvedValues[id] : '').join('');
                    resolve(resolvedTemplate);
                }
            });
        });
    }

    render(component, renderParam) {
        return new component(this.helpers())[renderMethodName](renderParam, this.helpers());
    }
}



class Message {
    template({ message, type  = 'info' } = {}, _) {
        return _`<h1 class="${ type }">${ message }</h1>`;
    }
}

class Button {
    template({ text } = {}, { _ }) {
        return _`<button></button>`;
    }
}

class HomePage {
    constructor({ render, components }) {
        this.title = 'Hello world';
        this.rend = render;
        this.components = components;
    }

    template({ subtitle }, { _ }) {
        return _`
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
