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
