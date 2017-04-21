import { dom, val, obj } from './bind';

let variable = val('TEST ').bind(
    dom('#first'),
    dom('#second'),
    dom('#third')
);

let time = 0;
setInterval(_ => variable.append(`${ time++ } `), 500);

let model = obj({
    foo: {
        bar: 'hello',
        baz: 'world'
    },
    moo: 666
});

model.foo.bar.bind(dom('#foo'));
model.moo.bind(dom('#moo'), model.foo.baz);
model.foo.baz.bind(dom('#bar'));

console.log(model);
