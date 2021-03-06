import { createElement, Text, Wrapper } from './createElement.js';
class Carousel {
    constructor (config) {  
        this.children = [];
        this.attributes = new Map();
        this.properties = new Map();
    }

    setAttribute (name, value) { 
        // 这里将 attribute 存起来，在 render 中处理
        this.attributes.set(name, value);
        this[name] = value;
    }

    appendChild (child) {   // children
        this.children.push(child);
        // child.mountTo(this.root);    // 这里不要直接 moute
    }

    set subTitle (value) {
        this.properties.set('subTitle', value);
    }

    mountTo (parent) {
        this.render().mountTo(parent);
    }

    render () {
        let children = this.attributes.get('data').map(url => {
            let element = <img src={url} />
            element.addEventListener('dragstart', event => event.preventDefault());
            return element;
        });

        let root = <div class={this.attributes.get('class')}>
            {children}
        </div>;

        let positon = 0;

        let nextPic = () => {
            let nextPositon =  (positon + 1) % this.data.length;

            let current = children[positon];
            let next = children[nextPositon];
            current.style.transition = 'none';
            next.style.transition = 'none';
            
            current.style.transform = `translateX(${-100 * positon}%)`;
            next.style.transform = `translateX(${100-100 * nextPositon}%)`;
            // 执行完这些代码，浏览器会在下一帧让其生效

            setTimeout(() => {
                current.style.transition = ''; 
                next.style.transition = '';

                current.style.transform = `translateX(${-100-100 * positon}%)`;
                next.style.transform = `translateX(${-100 * nextPositon}%)`;

                positon = nextPositon;
            }, 16); 
            
        }

        root.addEventListener('mousedown', event => {
            let startX = event.clientX, startY = event.clientY;
            
            let lastPosition =  (positon - 1 + this.data.length) % this.data.length;
            let nextPositon =  (positon + 1) % this.data.length;

            let current = children[positon];
            let last = children[lastPosition];
            let next = children[nextPositon];

            current.style.transition = 'none';
            last.style.transition = 'none';
            next.style.transition = 'none';

            current.style.transform = `translateX(${-500 * positon}px)`;
            last.style.transform = `translateX(${-500-500 * lastPosition}px)`;
            next.style.transform = `translateX(${500-500 * nextPositon}px)`;
                
            let move = event => {
                current.style.transform = `translateX(${event.clientX - startX - 500 * positon}px)`;
                last.style.transform = `translateX(${event.clientX - startX - 500-500 * lastPosition}px)`;
                next.style.transform = `translateX(${event.clientX - startX + 500-500 * nextPositon}px)`;
                
            }

            let up = event => {
                let offset = 0;

                if (event.clientX - startX > 250) {
                    offset = 1;
                } else if (event.clientX - startX < -250) {
                    offset = -1;
                }

                current.style.transition = 'ease 0.2s';
                last.style.transition = 'ease 0.2s';
                next.style.transition = 'ease 0.2s';

                current.style.transform = `translateX(${offset * 500 - 500 * positon}px)`;
                last.style.transform = `translateX(${offset * 500 - 500-500 * lastPosition}px)`;
                next.style.transform = `translateX(${offset * 500 + 500-500 * nextPositon}px)`;

                positon = (positon - offset + this.data.length) % this.data.length;
                document.removeEventListener('mousemove', move);
                document.removeEventListener('mouseup', up);
            }
            
            // 监听在 document 上的事件，即使移到浏览器的外面也会触发
            document.addEventListener('mousemove', move);
            document.addEventListener('mouseup', up);
        });

        return root;
    }
}

let component = <Carousel class="carousel" data={[
    "https://static001.geekbang.org/resource/image/bb/21/bb38fb7c1073eaee1755f81131f11d21.jpg",
    "https://static001.geekbang.org/resource/image/1b/21/1b809d9a2bdf3ecc481322d7c9223c21.jpg",
    "https://static001.geekbang.org/resource/image/b6/4f/b6d65b2f12646a9fd6b8cb2b020d754f.jpg",
    "https://static001.geekbang.org/resource/image/73/e4/730ea9c393def7975deceb48b3eb6fe4.jpg",
]} />

component.mountTo(document.body);
