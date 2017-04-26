const renderMethodName = 'template';

class TemplateRenderer {
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
            components: this.container,
        };
    }
    
    asyncTag(strings, ...values) {
        return new Promise((resolve, reject) => Promise.all(values)
            .then(rendered => resolve(strings.map((string, id) =>
                string + (rendered[id] ? rendered[id] : '')).join(''))));
    }

    render(component, renderParam) {
        return Promise.resolve(new component(this.helpers())[renderMethodName](this.asyncTag, renderParam, this.helpers()));
    }
}



class Message {
    template($, { message, type  = 'info' } = {}) {
        return $ `<h1 class="${ type }">${ message }</h1>`;
    }
}

class Button {
    template($) {
        return $ `<button></button>`;
    }
}

class HomePage {
    constructor() {
        this.title = 'Hello world';
    }

    template($, { subtitle }, { render }) {
        return $ `
            <h1>${ this.title }<h1>
            <p>${ subtitle }</p>
            <hr/>
            <div class="body">
                ${ render(Message, { message: 'Home page' }) }
                ${ render(Button) }
            </div>
        `;
    }

}


let engine = new TemplateRenderer().register(
    HomePage
);

engine.render(HomePage, { subtitle: 'subtitle' }).then(console.log);
