export class Snowghost {
    constructor(img, hillWidth) {
        this.img = img;

        this.aniFrame = 10;
        this.curFrame = 0;

        this.imgWidth = 135;
        this.imgHeight = 142;

        this.ghostWidth = 69.5;
        this.ghostHeight = 71;

        this.ghostWhalf = this.ghostWidth / 2;
        this.x = hillWidth + this.ghostWidth;
        this.y = 0;
        this.speed = Math.random() * 2 + 0.5;

        this.fps = 30;
        this.fpsTime = 1000 / this.fps;
    }

    draw(context, t, dots) {
        if (!this.time) {
            this.time = t;
        }

        const now = t - this.time;
        if (now > this.fpsTime) {
            this.time = t;
            this.curFrame += 1;
            if (this.curFrame == this.aniFrame) {
                this.curFrame = 0
            }
        }
        this.animate(context, dots);
    }

    animate(context, dots) {
        this.x -= this.speed
        const closest = this.getY(this.x, dots);
        this.y = closest.y

        context.save();
        context.translate(this.x, this.y);
        context.rotate(closest.rotation);

        // context.fillStyle = 'black';
        context.drawImage(this.img,
            this.imgWidth * this.curFrame,
            0,
            this.imgWidth,
            this.imgHeight,
            -this.ghostWhalf,
            -this.ghostHeight + 3,
            this.ghostWidth,
            this.ghostHeight
        );

        context.restore();

    }

    getY(x, dots) {
        for (let i = 1; i < dots.length; i++) {
            if (x >= dots[i].x1 && x <= dots[i].x3) {
                return this.getY2(x, dots[i]);
            }
        }

        return {
            y: 0,
            rotation: 0
        }
    }

    getY2(x, dot) {
        const total = 200;
        let pt = this.quadpoint(dot.x1, dot.y1, dot.x2, dot.y2, dot.x3, dot.y3, 0);
        let prevX = pt.x;
        for (let i = 1; i < total; i++) {
            const t = i / total;
            pt = this.quadpoint(dot.x1, dot.y1, dot.x2, dot.y2, dot.x3, dot.y3, t);

            if (x >= prevX && x <= pt.x) {
                return pt;
            }
            prevX = pt.x;
        }
        return pt;
    }

    quadraticvalue(p0, p1, p2, t) {
        return (1 - t) * (1 - t) * p0 + 2 * (1 - t) * t * p1 + t * t * p2;
    }

    quadpoint(x1, y1, x2, y2, x3, y3, t) {
        const tx = this.quadTangent(x1, x2, x3, t);
        const ty = this.quadTangent(y1, y2, y3, t);
        const rotation = -Math.atan2(tx, ty) + (90 * Math.PI / 180);

        return {
            x: this.quadraticvalue(x1, x2, x3, t),
            y: this.quadraticvalue(y1, y2, y3, t),
            rotation: rotation,
        }
    }

    quadTangent(a, b, c, t) {
        return 2 * (1 - t) * (b - a) + 2 * (c - b) * t;
    }
}