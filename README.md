## JS Data binding
JS lib for bidirectional data binding written in ES6.

## Examples
Demo in action [here](https://rawgit.com/ichko/bind.js/master/index.html).

#### Cyclical bindings
HTML
```html
<input id="foo"/>
<input id="bar"/>
<input id="moo"/>
```

JS
```javascript
import { dom, obj } from './bind';

let model = obj({
    foo: {
        bar: 'hello',
        baz: 'world'
    },
    moo: 666
});

model.foo.bar.bind(dom('#foo'), dom('#bar'));
model.foo.baz.bind(dom('#moo'), dom('#bar'), model.moo);

model.moo = Array(4).join('wat' - 1);
dom('#foo').append(' Batman!');
```

#### Simple

HTML
```html
<input id="first"/>
<input id="second"/>
<input id="third"/>
```

JS
```javascript
import { dom, val } from './bind';

let model = val('TEST ').bind(
    dom('#first'),
    dom('#second'),
    dom('#third')
);

let time = 0;
setInterval(_ => model.append(`${ time++ } `), 500);
```
