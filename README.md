## JS Data binding
JS lib for bidirectional data binding written in ES6.


## Binding examples
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

## Component examples

JS
```javascript
class Message {
    template({ text, type  = 'info' } = {}) {
        return `<h1 class="${ type }">${ text }</h1>`;
    }
}

class HomePage {
    constructor() {
        this.title = 'Home page';
    }

    template({ style }, { render }) {
        return $.async `
            <h1 class="${ style }">${ this.title }<h1>
            <hr/>
            <div class="body">
                ${ render(Message, { text: 'hello world' }) }
            </div>
        `;
    }

}


new $().render(HomePage, { style: 'dark' }).then(console.log);
```

Output
```html
<h1 class="dark">Home page<h1>
<hr/>
<div class="body">
    <h1 class="info">hello world</h1>
</div>
```

### TODO

```javascript
class Message {
    template({ text, type  = 'info' } = {}) {
        return `<h1 class="${ type }">${ text }</h1>`;
    }
}

class HomePage {
    constructor() {
        this.title = 'Home page';
        this.todos = ['habala', 'babala'];
    }

    template({ style }, { view, render, foreach }) {
        return view `
            <h1 class="${ style }">${ this.title }<h1>
            <hr/>
            ${ new Promise(resolve => setTimeout(resolve, 1000, 'done')) }
            <div class="body">
                ${ render(Message, { text: 'hello world' }) }
                <ul>
                    ${ foreach(this.todos, item => view `<li>${ item }</li>`) }
                </ul>
            </div>
        `;
    }

}


new Templater(new RenderContainer()).render(HomePage, { style: 'dark' }).then(console.log);
```