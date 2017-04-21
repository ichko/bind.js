## JS Data binding

## Usage

### HTML
```html
<input type="text" id="first"/>
<input type="text" id="second"/>
<input type="text" id="third"/>
```

### JS
```javascript
let model = new Variable(5);

Bind.all(
    model,
    DomVariable.id('first'),
    DomVariable.id('second'),
    DomVariable.id('third')
);

model.change('test');
```
