export class Broadcaster {
    constructor() {
        this.observers = new Set();
    }
    
    subscribe(observer) {
        this.observers.add(observer);
    }
    
    unsubscribe(observer) {
        this.observers.delete(observer);
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
        if (value != this.value) {
            this.set(value);
            this.notify(value);
        }

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
            this.observer = { update: value => {
                this.variables.delete(variable);
                this.change(value);
                this.variables.add(variable);
            }};
            variable.subscribe(this.observer);
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
        this.variables.forEach(variable => variable.change(value));
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

export function obj(object) {
    function recursive(object) {
        let proxy = object;
        if (typeof object === 'object') {
            for (let name in object) {
                if (typeof object[name] === 'object') {
                    proxy[name] = recursive(object[name]);
                } else {
                    let namedVariable = new Variable(object[name]);
                    proxy[name] = namedVariable;
                    Object.defineProperty(proxy, name, {
                        set: value => namedVariable.change(value),
                        get: () => namedVariable
                    });
                }
            }
        }
        
        return proxy;
    }
    
    return recursive(object);
}

let domVariables = {};

export function dom(selector) {
    if (!domVariables[selector]) {
        domVariables[selector] = DomVariable.select(selector);
    }

    return domVariables[selector];
}
