// export class GRcircle {
//     constructor(canvasWidth, canvasHeight) {
//         this.centerX = canvasWidth / 2;
//         this.centerY = canvasHeight / 2;
//         this.radius =
//             canvasWidth / 48 > 48
//                 ? 48
//                 : canvasWidth / 48 < 24
//                     ? 24
//                     : canvasWidth / 48;
//     }

//     drawGRcircle(context) {
//         // const grRadius = this.radius * 16;
//         // const gradient = context.createRadialGradient(
//         //     this.centerX,
//         //     this.centerY,
//         //     0,
//         //     this.centerX,
//         //     this.centerY,
//         //     grRadius
//         // );
//         // gradient.addColorStop(0, 'white');
//         // gradient.addColorStop(1, 'red');
//         // context.save();
//         context.fillStyle = 'white';
//         context.arc(
//             this.centerX,
//             this.centerY,
//             this.radius,
//             0,
//             Math.PI * 2
//         );
//         context.fill();
//         // context.restore();
//     }

//     drawLsource(context) {
//         context.beginPath();
//         context.save();

//         context.fillStyle = 'blue';
//         context.arc(
//             this.centerX,
//             this.centerY,
//             this.radius,
//             0,
//             Math.PI * 2
//         );
//         context.fill();
//         context.restore();

//     }
//     drawLline(context, pointCenterX, pointCenterY) {
//         context.save();
//         context.strokeStyle = 'white';
//         context.lineWidth = 1;
//         context.moveTo(this.centerX, this.centerY - this.radius);
//         context.stroke();
//         context.restore();

//     }
// }