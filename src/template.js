let renderMethodName = 'template';
let idSeed = 0;
let getId = () => idSeed++;


class Templater {
    constructor(dom) {
        this.dom = dom;
        this.helpers = {
            render: (...args) => this.render(...args),
            view: (...args) => this.templateTag(...args)
        };
    }
    
    helper(types) {
        for (let name in types) {
            this.helpers[name] = types.name;
        }
        return this;
    }

    render(component, renderParam) {
        return new Promise(resolve => {
            let normalized = (arg => arg.length ? arg : [arg])
                (new component(this.helpers)[renderMethodName]
                (renderParam, this.helpers));

            Promise.all(normalized)
                .then(items => Promise.all(items.map(item =>
                    typeof item == 'function' ? item(this.dom) : item)))
                .then(raw => resolve(raw.join('')));
        });
    }
    
    templateTag(literals, ...values) {
        return literals.reduce((result, literal, id) =>
            result.concat(literal, [...values, ''][id]));
    }
}

class RenderContainer {
    constructor() {
        this.container = new Map();
    }

    set(key, value) {
        this.container.set(key, value);
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
        this.todos = ['habala', 'babala'];
    }

    template({ style }, { view, render, foreach }) {
        return view `
            <h1 class="${ style }">${ this.title }<h1>
            <hr/>
            ${ new Promise(resolve => setTimeout(resolve, 1000, 'done')) }
            <div class="body">
                ${ render(Message, { text: 'hello world' }) }
                <ul>
                    ${ foreach(this.todos, item => view `<li>${ item }</li>`) }
                </ul>
            </div>
        `;
    }

}


new Templater(new RenderContainer()).render(HomePage, { style: 'dark' }).then(console.log);
