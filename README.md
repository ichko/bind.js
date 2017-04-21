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
import { dom, val } from './bind';

let model = val('TEST ').bind(
    dom('#first'),
    dom('#second'),
    dom('#third')
);

let time = 0;
setInterval(_ => model.append(`${ time++ } `), 500);
```
