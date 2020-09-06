import { create } from './createElement';

let div = <div>
    <span>Hello World!</span>
</div>;

div.mountTo(document.body);
