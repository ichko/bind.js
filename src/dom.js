import { Variable } from '.bind';
import { getId } from '.utils';


export class Node extends Variable {
    constructor(name) {
        this.name = name;
        this.content = new Map();
    }

    add(content) {
        this.set(getId());
        return this;
    }

    set({ id, content= '' } = {}) {
        this.content.set(id, content);
        return this;
    }

    render() {
        let content = Array.from(this.content.values())
            .map(value => typeof content == 'string' ? value : value.render());
        this `<${ this.name }>${ content }</${ this.name }>`;
    }
}
