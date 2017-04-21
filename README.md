## JS Data binding
ES6 data binding lib

## Examples

#### Simple

HTML
```html
<input type="text" id="first"/>
<input type="text" id="second"/>
<input type="text" id="third"/>
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

model.foo.bar.bind(dom('#foo'));
model.moo.bind(dom('#moo'), model.foo.baz);
model.foo.baz.bind(dom('#bar'));
```
