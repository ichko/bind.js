export class Broadcaster {
    constructor() {
        this.observers = new Set();
    }
    
    subscribe(observer) {
        this.observers.add(observer);
    }
    
    notify(value) {
        this.observers.forEach(observer => observer.update(value));
    }
}

export class Variable extends Broadcaster {
    constructor(initial) {
        super();
        this.value = initial;
    }
    
    change(value) {
        this.set(value);
        this.notify(value);
        return this;
    }
    
    append(value) {
        return this.change(this.get() + value);
    }
    
    set(value) {
        this.value = value;
        return this;
    }
    
    get() {
        return this.value;
    }
    
    bind(...variables) {
        Bind.all(...variables).with(this);
        return this;
    }
}

export class Bind {
    constructor(initial) {
        this.variables = new Set();
        this.value = initial;
    }
    
    add(...variables) {
        this.variables = new Set([...this.variables, ...new Set(variables)]);
        variables.forEach(variable => {
            variable.change(this.value);
            variable.subscribe({ update: value => {
                this.variables.delete(variable);
                this.change(value);
                this.variables.add(variable);
            }});
        });
    
        return this;
    }
    
    with(variable) {
        this.value = variable.get();
        this.add(variable);
        this.change(this.value);
    }
    
    change(value) {
        this.value = value;
        this.variables.forEach(variable => variable.set(value));
    }
    
    get() {
        this.value;
    }
    
    static all(...variables) {
        return new Bind().add(...variables);
    }
}

export class DomVariable extends Variable {
    constructor(element, initial) {
        super(initial);
        this.element = element;
        this.element.addEventListener('input',
            ({ target }) => this.change(target.value));
    }
    
    static select(selector) {
        let element = document.querySelector(selector);
        return new DomVariable(element);
    }
    
    static id(identifier) {
        let element = document.getElementById(identifier);
        return new DomVariable(element);
    }
    
    set(value) {
        this.element.value = value;
        this.value = value;
        return this;
    }
}

export function val(value, ...binds) {
    return new Variable(value).bind(...binds);
}

export function dom(selector) {
    return DomVariable.select(selector);
}
