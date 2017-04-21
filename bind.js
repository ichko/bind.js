class Broadcaster {
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

class Variable extends Broadcaster {
    constructor(initial) {
        super();
        this.value = initial;
    }
    
    change(value) {
        this.set(value);
        this.notify(value);
    }
    
    set(value) {
        this.value = value;
    }
    
    get() {
        return this.value;
    }
}

class Bind {
    constructor(variables = [], initial) {
        this.variables = new Set(variables);
        this.value = initial;
        this.variables.forEach(variable => {
            initial && variable.change(initial);
            variable.subscribe({ update: value => {
                this.variables.delete(variable);
                this.change(value);
                this.variables.add(variable);
            }});
        });
    }
    
    static all(...[variables]) {
        return new Bind(variables);
    }
    
    change(value) {
        this.value = value;
        this.variables.forEach(variable => variable.set(value));
    }
    
    get() {
        this.value;
    }
}

class DomVariable extends Variable {
    constructor(element, initial) {
        super(initial);
        this.element = element;
        this.element.addEventListener('input',
            ({ target }) => this.change(target.value));
    }
    
    static id(identifier) {
        let element = document.getElementById(identifier);
        return new DomVariable(element);
    }
    
    set(value) {
        this.element.value = value;
        this.value = value;
    }
}
