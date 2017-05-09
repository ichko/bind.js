import { Variable } from '.bind';
import { id, tag } from '.utils';


export class Node extends Variable {
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
        return tag(this.name, Array.from(this.content.values()).map(value =>
            typeof content === 'string' ? value : value.render()));
    }
}
