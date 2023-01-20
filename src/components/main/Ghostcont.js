import { Snowghost } from './Snowghost';
import ghost from './ghostsheet4.png'


export class Ghostcont {
    constructor() {
        this.img = new Image();
        this.img.onload = () => {
            this.loaded();
        }
        this.img.src = ghost

        this.items = [];

        this.cur = 0;
        this.isLoaded = false;
    }
    resize(hillWidth, hillHeight) {
        this.hillWidth = hillWidth;
        this.hillHeight = hillHeight;
    }
    loaded() {
        this.isLoaded = true;
        this.ghostcount();
        console.log(this.isLoaded)
    }
    ghostcount() {
        this.items.push(
            new Snowghost(this.img, this.hillWidth)
        );

    }
    draw(context, t, dots) {
        if (this.isLoaded) {
            this.cur += 1;
            if (this.cur > 500) {
                this.cur = 0;
                this.ghostcount();
            }

            for (let i = this.items.length - 1; i >= 0; i--) {
                const item = this.items[i];
                if (item.x < -item.width) {
                    this.items.splice(i, 1);
                } else {
                    item.draw(context, t, dots);
                }
            }
        }
    }
}