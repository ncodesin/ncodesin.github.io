export class Hill {
    constructor(color, speed, total, globalAlpha) {
        this.color = color;
        this.speed = speed;
        this.total = total;
        this.globalAlpha = globalAlpha
    }

    resize(hillWidth, hillHeight) {
        this.hillWidth = hillWidth;
        this.hillHeight = hillHeight;

        this.points = [];

        this.gap = Math.ceil(this.hillWidth / (this.total - 2));

        for (let i = 0; i < this.total; i++) {
            this.points[i] = {
                x: i * this.gap,
                y: this.getY()
            };
        }
    }

    draw(context) {
        context.fillStyle = this.color;
        context.globalAlpha = this.globalAlpha;
        context.beginPath();


        let cur = this.points[0];
        let cp = cur
        let dots = [];
        cur.x += this.speed;

        if (cur.x > -this.gap) {
            this.points.unshift({
                x: -(this.gap * 2),
                y: this.getY()
            });

        } else if (cur.x > this.hillWidth + this.gap) {
            this.points.splice(-1)
        }

        context.moveTo(cur.x, cur.y);

        let cpCx = cur.x;
        let cpCy = cur.y;

        for (let i = 1; i < this.points.length; i++) {
            cur = this.points[i];
            cur.x += this.speed

            const cx = (cp.x + cur.x) / 2;
            const cy = (cp.y + cur.y) / 2;
            context.quadraticCurveTo(cp.x, cp.y, cx, cy);

            dots.push({
                x1: cpCx,
                y1: cpCy,
                x2: cp.x,
                y2: cp.y,
                x3: cx,
                y3: cy
            });

            cp = cur;
            cpCx = cx;
            cpCy = cy;
        }

        context.lineTo(cp.x, cp.y);
        context.lineTo(this.hillWidth, this.hillHeight);
        context.lineTo(this.points[0].x, this.hillHeight);
        context.fill();

        return dots;

    }
    getY() {
        const min = this.hillHeight / 3;
        const max = this.hillHeight - min
        return min + Math.random() * max;
    }
}