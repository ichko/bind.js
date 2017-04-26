const renderMethodName = 'template';

class $ {
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

    render(component, renderParam) {
        return Promise.resolve(new component(this.helpers())[renderMethodName](renderParam, this.helpers()));
    }
    
    static async(literals, ...values) {
        return new Promise((resolve, reject) => Promise.all(values)
            .then(rendered => resolve(literals.map((literal, id) =>
                literal + (rendered[id] ? rendered[id] : '')).join(''))));
    }
}



class Message {
    template({ text, type  = 'info' } = {}) {
        return `<h1 class="${ type }">${ text }</h1>`;
    }
}

class HomePage {
    constructor() {
        this.title = 'Home page';
    }

    template({ style }, { render }) {
        return $.async `
            <h1 class="${ style }">${ this.title }<h1>
            <hr/>
            <div class="body">
                ${ render(Message, { text: 'Home page' }) }
            </div>
        `;
    }

}


new $().render(HomePage, { style: 'dark' }).then(console.log);
