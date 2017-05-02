import { Spa, Dom } from './spa';


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


new Spa(new Dom()).render(HomePage, { style: 'dark' }).then(console.log);
