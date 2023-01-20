import { useEffect, useRef, useState } from 'react';
import styles from './list.module.css';
import { animate, AnimatePresence, motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import { useCanvas } from '../hooks/canvas';
import snowball from './snowball.png'
import { useDispatch, useSelector } from 'react-redux';
import { changeList } from '../../store';
import { nodeName } from 'jquery';
import insta from './insta.png'
import github from './github.png'
import blog from './blog.png'
import snowghostT from './ghostsheet4.png'
import snowghostS from './snowghostsmall.png'
// import { GRcircle } from './GRcircle';



function List() {

    let list = useSelector((state) => { return state.expjob })

    const dispatch = useDispatch()

    let navigate = useNavigate()
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight / 2.5
        const context = canvas.getContext('2d');

        // const grcc = new GRcc()

        // console.log(GRcc)

        const TOTAL = 85
        const circleArray = []

        const push = () => {
            for (let i = 0; i < TOTAL; i++) {
                circleArray.push(new Smallcircle(i))
            }
        }

        setTimeout(() => {
            push()
            render()
        }, 100);




        const centercircle1 = () => {
            context.beginPath();
            context.fillStyle = 'gold';
            context.globalAlpha = 1;
            context.arc(canvas.width / 2, canvas.height / 1.5, 30 + Math.random() * 1, 0, Math.PI * 2);
            context.fill();
        }

        const centercircle2 = () => {
            context.beginPath();
            context.fillStyle = 'gold';
            context.globalAlpha = 0.05;
            context.arc(canvas.width / 2, canvas.height / 1.5, 60 + Math.random() * 10, 0, Math.PI * 2);
            context.fill();
        }
        const centercircle3 = () => {
            context.beginPath();
            context.fillStyle = 'gold';
            context.globalAlpha = 0.01;
            context.arc(canvas.width / 2, canvas.height / 1.5, 100 + Math.random() * 10, 0, Math.PI * 2);
            context.fill();
        }


        function render() {
            context.clearRect(0, 0, canvas.width, canvas.height);
            centercircle1()
            centercircle2()
            centercircle3()
            circleArray.forEach((small, i) => {
                small.animate(i)
            })
            window.requestAnimationFrame(render);
        }



        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight / 2.5
        })

        class Smallcircle {
            constructor(i) {
                this.x = 10
                this.rad = 0.3 * i
                this.radius = 2
                this.move = 0.015;
            }
            draw(i) {
                this.rad += this.move
                this.y = canvas.height / 10 * Math.sin(this.rad) + 100
                context.beginPath();
                context.fillStyle = 'gold';
                context.globalAlpha = 1;
                context.arc(this.x + (canvas.width / TOTAL) * i, this.y, this.radius, 0, Math.PI * 2);
                context.fill();
                context.lineTo(canvas.width / 2, canvas.height / 1.5);
                context.strokeStyle = 'white';
                context.lineWidth = 0.3;
                context.stroke();


            }
            animate(i) {
                this.draw(i)
            }
        }

    }, [])

    const aboutboxRef = useRef(null);
    let [abboxswitch, setAbboxswitch] = useState(0);

    useEffect(() => {
        const About = aboutboxRef.current;

        if (abboxswitch == 0) {
            About.style.display = 'none'
        }
        if (abboxswitch == 1) {
            About.style.display = 'block'
            About.style.display = 'flex'
            About.style.width = window.innerWidth + 'px';
            About.style.height = window.innerHeight + 'px';
            About.animate([
                { opacity: '0', display: 'none' },
                { opacity: '1', display: 'block' }
            ], {
                duration: 300,
                fill: 'forwards'
            });
        }
    })

    const canvas1Ref = useRef(null);
    const abboxRef = useRef(null);

    useEffect(() => {
        const canvas = canvas1Ref.current;
        const context = canvas.getContext("2d");
        const abbox = abboxRef.current;
        const instaImg = new Image();
        const blogImg = new Image();
        const githubImg = new Image();
        const snowghostTImg = new Image();
        const snowghostSImg = new Image();
        const animationArray = []
        const TOTAL = 1

        instaImg.src = insta
        blogImg.src = blog
        githubImg.src = github
        snowghostTImg.src = snowghostT
        snowghostSImg.src = snowghostS

        const snowghostTImgrv = snowghostTImg.style.transform = 'rotateY(180deg)'

        canvas.width = abbox.clientWidth;
        canvas.height = abbox.clientHeight / 1.5
        canvas.style.background = 'black'

        window.addEventListener('resize', () => {
            canvas.width = abbox.clientWidth;
            canvas.height = abbox.clientHeight / 1.5

        })

        snowghostTImg.onload = () => {
            for (let i = 0; i < TOTAL; i++) {
                animationArray.push(new ghost())
            }
            render()
        }



        function render(t) {
            context.clearRect(0, 0, canvas.width, canvas.height);
            animationArray.forEach((v, i) => {
                v.draw(t)
            });
            requestAnimationFrame(render)
        }

        class ghost {
            constructor() {
                this.Timg = snowghostTImg
                this.Simg = snowghostSImg
                this.TimgWidth = 135;
                this.TimgHeight = 142;
                this.TghostWidth = this.TimgWidth / 2;
                this.TghostHeight = this.TimgHeight / 2;
                this.TghostHwdith = this.TghostWidth / 2;
                this.SimgWidth = 50;
                this.SimgHeight = 50;
                this.SghostWidth = this.SimgWidth / 2;
                this.SghostHeight = this.SimgHeight / 2;
                this.SghostHwidth = this.SghostWidth / 2;
                this.x = canvas.width * 1.2;
                this.x2 = canvas.width * 1.2 + 50;
                this.x3 = canvas.width * 1.2 + 80;
                this.y = canvas.height;
                this.y2 = canvas.height;
                this.y3 = canvas.height;
                this.xSpeed = 1
                this.ySpeed = 1
                this.jump = 0.5;
                this.jump2 = 0.5;
                this.jump3 = 0.5;

                this.aniFrame = 10;
                this.curFrame = 0;
                this.fps = 30;
                this.fpsTime = 1000 / this.fps

                setInterval(() => {
                    this.jump = 1
                }, 3000 * (Math.random() + 1));
                setInterval(() => {
                    this.jump2 = 1
                }, 2000 * (Math.random() + 2));
                setInterval(() => {
                    this.jump3 = 1
                }, 2500 * (Math.random() + 1));

            }
            draw(t) {
                if (this.jump == 1) {
                    if (this.y > canvas.height - 60) {
                        this.y -= this.ySpeed
                    }
                }
                if (this.y == canvas.height - 60) {
                    this.jump = 0
                }
                if (this.jump == 0) {
                    if (this.y !== canvas.height) {
                        this.y += this.ySpeed
                    }
                }

                if (this.jump2 == 1) {
                    if (this.y2 > canvas.height - 60) {
                        this.y2 -= this.ySpeed
                    }
                }
                if (this.y2 == canvas.height - 40) {
                    this.jump2 = 0
                }
                if (this.jump2 == 0) {
                    if (this.y2 !== canvas.height) {
                        this.y2 += this.ySpeed
                    }
                }

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
                this.animate();
            }
            animate() {

                this.x -= this.xSpeed;
                this.x2 -= this.xSpeed;
                this.x3 -= this.xSpeed;
                if (this.x < 0) {
                    // context.rotate(Math.PI / 180 * 2);
                    this.x = canvas.width * 1.2;
                }
                if (this.x2 < 0) {
                    // context.rotate(Math.PI / 180 * 2);
                    this.x2 = canvas.width * 1.2;
                }
                if (this.x3 < 0) {
                    // context.rotate(Math.PI / 180 * 2);
                    this.x3 = canvas.width * 1.2;
                }

                context.save();
                context.translate(this.x, this.y);
                context.drawImage(
                    this.Timg,
                    this.TimgWidth * this.curFrame,
                    0,
                    this.TimgWidth,
                    this.TimgHeight,
                    -this.TghostHwdith,
                    -this.TghostHeight,
                    this.TghostWidth,
                    this.TghostHeight
                );
                context.restore();

                context.save();
                context.translate(this.x2, this.y2);
                context.drawImage(
                    this.Simg,
                    this.SimgWidth * this.curFrame,
                    0,
                    this.SimgWidth,
                    this.SimgHeight,
                    -this.SghostHwidth,
                    -this.SghostHeight,
                    this.SghostWidth,
                    this.SghostHeight
                );
                context.restore();
                context.save();
                context.translate(this.x3, this.y3);
                context.drawImage(
                    this.Simg,
                    this.SimgWidth * this.curFrame,
                    0,
                    this.SimgWidth,
                    this.SimgHeight,
                    -this.SghostHwidth,
                    -this.SghostHeight,
                    this.SghostWidth,
                    this.SghostHeight
                );
                context.restore();

                context.save();
                context.fillStyle = 'white';
                context.textAlign = 'center';

                context.font = '30px sans-serif';
                context.fillText('감사합니다!', canvas.width / 2, 100)
                context.restore();





            }
        }

    })



    return (
        <>
            <motion.div
                initial={{
                    // translateX: window.innerWidth,
                    width: 0,
                    opacity: 0,
                    // transition: { duration: 0.1 }
                }}
                animate={{
                    // translateX: 0,
                    width: "100%",
                    opacity: 1,
                    transition: { duration: 0.3 }
                }}
                exit={{
                    translateX: window.innerWidth,
                    // opacity: 0,
                    // display: "none",
                    transition: { duration: 0.1 }
                }}
                transition={{
                    ease: "easeInOut"
                }} className={styles.outbox}>
                <span onClick={() => { navigate('/profile') }}>PROFILE</span>
                <span onClick={() => {
                    if (list[3] == 1) {
                        dispatch(changeList(0))
                    }
                    navigate('/experience')
                }}>EXPERIENCE</span>
                {/* <span>HOBBY</span>
                <span>PROJECT</span> */}
                <span onClick={() => { setAbboxswitch(1) }}>ABOUT</span>
                <span onClick={() => { navigate('/') }}>MAIN</span>
                <canvas ref={canvasRef} style={canvasStyle}></canvas>
                {/* <div className={styles.pos}>
                    </div> */}
                <div ref={aboutboxRef} className={styles.aboutBox}>
                    <div ref={abboxRef} className={styles.abBox}>
                        <canvas ref={canvas1Ref}></canvas>
                        <div className={styles.lastbox}>
                            <p className={styles.p1}>@ Made by Kwak (ncodesin)</p>
                            <div className={styles.imgbox}>
                                <div>
                                    <img src={blog} width={40} />
                                    <p>NaverBlog</p>
                                </div>
                                <div>
                                    <img src={insta} width={40} />
                                    <p>InstaGram</p>
                                </div>
                                <div>
                                    <img src={github} width={40} />
                                    <p>Github</p>
                                </div>
                            </div>
                            <p className={styles.p2} onClick={() => { setAbboxswitch(0) }}>Close</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default List;

const canvasStyle = {
    position: "relative",
    top: "10%"
    // border: "1px solid white",
    // position: "absolute",
    // left: "auto"
    // marginTop: "200px"

}

