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
Bind.all(
    DomVariable.id('first'),
    DomVariable.id('second'),
    DomVariable.id('third')
);
```