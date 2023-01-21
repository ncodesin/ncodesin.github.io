import React, { createContext, useEffect, useLayoutEffect, useRef, useState } from "react"
import styles from './Main.module.css';
import snow from './snow1.png'
import leaf from './leaf1.png'
import { gsap, Elastic, Bounce } from "gsap"
import { useNavigate } from "react-router-dom";
import { AnimatePresence, delay, motion } from "framer-motion";
import { isVisible } from "@testing-library/user-event/dist/utils";
import { Hill } from "./Hill";
import { Ghostcont } from "./Ghostcont";

const Main = () => {
    const canvasRef = useRef(null)
    let navigate = useNavigate()
    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
        const context = canvas.getContext('2d');
        const Snowcount = 200;
        const snowArray = []
        const snowImg = new Image();

        snowImg.src = snow
        snowImg.onload = () => {
            for (let i = 0; i < Snowcount; i++) {
                snowArray.push(new Snow())
            }
            // console.log(snowArray)
            render()
        }

        function render() {
            context.clearRect(0, 0, canvas.width, canvas.height);
            snowArray.forEach(snow => {
                snow.animate()
            })


            window.requestAnimationFrame(render)
        }


        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        })

        const Random = (min, max) => Math.random() * (max - min) + min;

        class Snow {
            constructor() {
                this.x = Math.random() * canvas.width
                this.y = Math.random() * - canvas.height * 2
                this.w = 2 + Math.random() * 15
                this.h = this.w + Math.random()
                this.xWay = Random(-1, 1)
                this.ySpeed = 0.5 + Math.random()
                this.opa = this.w / 10
            }
            draw() {
                if (this.y > canvas.height || this.x > canvas.width) {
                    this.x = Math.random() * canvas.width
                    this.y = Math.random() * - canvas.height
                    this.xWay = Random(-1, 1)
                    this.ySpeed = 0.5 + Math.random()
                }
                context.globalAlpha = this.opa;
                context.drawImage(
                    snowImg,
                    this.x,
                    this.y,
                    this.w,
                    this.h);

            }

            animate() {
                this.x += this.xWay
                this.y += this.ySpeed
                this.draw()
            }
        }
    }, [])


    const textRef = useRef(null);

    useEffect(() => {

        const p = textRef.current

        function textDisplay(element) {
            const textArray = element?.innerText.split('')
            const special = ['잘', '부', '탁', '드', '립', '니', '다']
            const exception = [' ', '\n', '.', ',', ':', ')']
            const randomIntBetween = (min, max) => {
                return Math.floor(Math.random() * (max - min + 1) + min)
            }
            // console.log(textArray)
            const numArray = []
            textArray.forEach(_ => {
                const num = randomIntBetween(5, 40)
                numArray.push(num)
            })

            let newText

            let completeCount
            const timer = setInterval(() => {
                completeCount = 0
                newText = ''
                numArray.forEach((num, i) => {
                    if (exception.includes(textArray[i]) || numArray[i] === 0) {
                        newText += textArray[i]
                        completeCount += 1
                    } else {
                        newText += special[numArray[i] % special.length]
                        numArray[i] = --num
                    }
                })
                // console.log(completeCount, numArray.length)
                element.innerText = newText
                if (completeCount === numArray.length) clearInterval(timer);
            }, 100)
        }
        textDisplay(p)
    }, [])

    const buttonRef = useRef(null)


    useEffect(() => {
        const a = buttonRef.current

        function mgbutton(element) {
            const children = element?.children[0]

            element.addEventListener('mousemove', e => {
                const { offsetLeft, offsetTop, offsetWidth, offsetHeight } = element
                const left = e.pageX - offsetLeft
                const top = e.pageY - offsetTop
                const centerX = left - offsetWidth / 2
                const centerY = top - offsetHeight / 2
                const d = Math.sqrt(centerX ** 2 + centerY ** 2)
                // console.log(centerX, centerY, d);

                // element.style.transform = `
                //     translate3d(${centerX / 1.5}px, ${centerY / 1.5}px, 0)
                // `

                gsap.to(a, {
                    x: centerX / 1.5,
                    y: centerY / 1.5,
                    ease: Elastic.easeOut
                })

                children.style.transform = `
                translate3d(${centerX / 4}px, ${centerY / 4}px, 0)
                rotate3d(${-centerY / 100}, ${centerX / 100}, 0, ${d / 10}deg)
                `
            })

            element.addEventListener('mouseleave', () => {
                // element.style.transform = ''
                children.style.transform = ''

                gsap.to(a, 3, {
                    x: 0,
                    y: 0,
                    ease: Elastic.easeOut.config(1.5, 0.1)
                })
            })

        }

        mgbutton(a)
    })

    const canvasRef2 = useRef(null)

    useEffect(() => {
        let a = `{${window.innerWidth},${window.innerHeight}}`
        console.log(a)

        class Hillapp {
            constructor() {
                const canvas = canvasRef2.current
                const context = canvas.getContext('2d');
                this.context = context
                this.canvas = canvas

                this.hills = [
                    new Hill('pink', 0.2, 18, 0.7),
                    new Hill('white', 0.5, 12, 1),
                ]

                this.ghostcont = new Ghostcont();

                window.addEventListener('resize', this.resize.bind(this), false);
                this.resize();

                requestAnimationFrame(this.animate.bind(this));

            }

            resize() {
                this.hillWidth = canvasRef.current.width
                this.hillHeight = canvasRef.current.height / 6

                this.canvas.width = this.hillWidth * 2
                this.canvas.height = this.hillHeight * 2
                this.context.scale(2, 2);

                for (let i = 0; i < this.hills.length; i++) {
                    this.hills[i].resize(this.hillWidth, this.hillHeight)
                }

                this.ghostcont.resize(this.hillWidth, this.hillHeight)
            }

            animate(t) {
                requestAnimationFrame(this.animate.bind(this));

                this.context.clearRect(0, 0, this.hillWidth, this.hillHeight);

                let dots;

                for (let i = 0; i < this.hills.length; i++) {
                    dots = this.hills[i].draw(this.context)
                }

                this.ghostcont.draw(this.context, t, dots);

            }
        }

        setTimeout(() => {
            new Hillapp();
        }, 200);

    }, [])







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
                }}>
                <div className={styles.Mainbox}>
                    <canvas className={styles.Background} ref={canvasRef} style={canvasStyle}></canvas>;
                    <div className={styles.Maintext}>
                        <div className={styles.box}>
                            <span></span>
                            <span></span>
                            <p ref={textRef} className={styles.text}>
                                안녕하세요<br></br>Front-end developer를 <br></br>꿈꾸고 있는 곽신우 입니다.</p>
                        </div>
                    </div>
                    <div ref={buttonRef} className={styles.enter}>
                        <span onClick={() => { navigate('/list') }}>Click To Enter</span>
                    </div>
                    <canvas ref={canvasRef2} style={canvasStyle2}></canvas>
                </div>
            </motion.div>
        </>
    )


}

export default Main;


const canvasStyle = {
    // border: "1px solid black",
    position: "absolute",
    background: "black"
}

const canvasStyle2 = {
    position: "absolute",
    // border: "1px solid white",
    bottom: "0%"
}
