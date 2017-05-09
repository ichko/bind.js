import { id, tag } from '.utils';

export const component = () => new Node('component');

export class Static {
    constructor(value = '') {
        this.value = value;
    }
    
    render() {
        return this.value;
    }
}

export class Node {
    constructor(name) {
        this.name = name;
        this.content = new Map();
    }

    add(content) {
        return this.set({ id: id(), content });
    }

    set({ id, content= '' } = {}) {
        this.content.set(id, content);
        return this;
    }

    render() {
        return tag(this.name, Array.from(this.content.values()).map(value => value.render()));
    }
}
