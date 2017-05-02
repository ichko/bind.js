let renderMethodName = 'template';
let idSeed = 0;
let getId = () => idSeed++;


export class Spa {
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
        let normalized = (arg => Array.isArray(arg) ? arg : [arg])
            (new component(this.helpers)[renderMethodName]
            (renderParam, this.helpers));

        Promise.all(normalized)
            .then(items => Promise.all(items.map(item =>
                typeof item == 'function' ? item(this.dom) : item)))
            .then(raw => raw.forEach(it => this.dom.add(it)));
    }
    
    templateTag(literals, ...values) {
        return literals.reduce((result, literal, id) =>
            result.concat(literal, [...values, ''][id]));
    }
}

export class Node {
    constructor(name) {
        this.name = name;
        this.content = new Map();
    }

    add(content) {
        let id = getId();
        this.content[id] = content;
        return id;
    }
    
    render() {
        let content = '';
        this.content.forEach((key, value) => content += value.render());

        this `<${ this.name }>${ content }</${ this.name }>`;
    }
}

export class Dom {
    constructor() {
        this.container = new Map();
        this.asyncCnt = 0;
    }
    
    startAsync() {
        this.asyncCnt++;
    }
    
    endAsync() {
        this.asyncCnt = this.asyncCnt <= 0 ? this.asyncCnt : --this.asyncCnt;
    }
    
    ready() {
        return this.asyncCnt === 0;
    }
    
    add(value) {
        let id = getId();
        this.set(id, value);
        return value;
    }

    set(key, value) {
        this.container.set(key, value);
    }
}
