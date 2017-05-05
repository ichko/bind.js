export const renderMethodName = 'template';

let idSeed = 0;
export function id() {
    return idSeed++;
}

export function tag(name, content) {
    return `<${ this.name }>${ content }</${ this.name }>`;
}
