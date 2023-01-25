export class Cloud {
    constructor(img, canvasW, canvasH, scaleX, scaleY, context) {
        this.img = img;
        this.canvasWidth = canvasW;
        this.canvasHeight = canvasH;
        this.context = context
        this.scaleX = scaleX;
        this.scaleY = scaleY;
        this.cloudX = this.canvasWidth * Math.random();
        this.cloudY = this.canvasHeight / 3 * Math.random();
        this.imgW = 100;
        this.imgH = 80;
        this.cloudW = this.imgW / 2
        this.cloudH = this.imgH / 2
        this.cloudHlafw = this.cloudW / 2

    }
    draw() {
        const context = this.context
        context.save();
        context.translate(this.cloudX, this.cloudY);
        context.scale(this.scaleX, this.scaleY);
        context.drawImage(
            this.img,
            this.imgW,
            0,
            this.imgW,
            this.imgH);
        context.restore();


    }
    animate(Speed, i) {
        this.cloudX += Speed

        if (this.cloudX > this.canvasWidth) {
            this.cloudX = -this.canvasWidth * Math.random()
            this.cloudY = this.canvasHeight / 3 * Math.random()
        }

        this.draw()
    }
}