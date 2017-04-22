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

model.foo.bar.bind(dom('#foo'), dom('#bar'));
model.foo.baz.bind(dom('#moo'), dom('#bar'), model.moo);

model.moo = 'test';
dom('#bar').append(' world');

console.log(model);
