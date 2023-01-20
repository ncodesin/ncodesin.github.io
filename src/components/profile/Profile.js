import { useEffect, useRef, useState } from 'react';
import styles from './profile.module.css'
import { gsap, Elastic } from "gsap"
import { useNavigate } from 'react-router-dom';
import profileimg from './Crop File.jpg'
import canvasimg from './skills/canvas.png'
import css3img from './skills/css3.png'
import gitbashimg from './skills/gitbash.png'
import gsapimg from './skills/gsap.png'
import html5img from './skills/html5.png'
import jQueryimg from './skills/jQuery.png'
import jsimg from './skills/js.png'
import mongodbimg from './skills/mongodb.png'
import reactimg from './skills/react.png'
import reduximg from './skills/redux.png'
import vueimg from './skills/vue.png'
import instaimg from './reference/insta.png'
import gitimg from './reference/github.png'
import blogimg from './reference/blog.png'
import { render } from '@testing-library/react';
import { motion } from "framer-motion"
import anman from './ansheet.png'



function Profile() {
    const maincontainer1 = useRef()
    const sticky = useRef()
    const sectionRef = useRef([])
    sectionRef.current = [];
    const section = sectionRef.current
    const headerRef = useRef([])
    headerRef.current = [];
    const header = headerRef.current
    const contentRef = useRef([])
    contentRef.current = [];
    const content = contentRef.current
    const pageRef = useRef(null)
    const page = pageRef.current
    let navigate = useNavigate()
    let [cvheight, setCvheight] = useState('')


    useEffect(() => {

        // function

        const mainct = maincontainer1.current
        const realsticky = sticky.current

        class ScrollPage {
            constructor(wrapper, sticky, section, header, content) {
                this.wrapper = wrapper
                this.sticky = sticky
                this.child = section
                this.header = header
                this.content = content
                this.length = this.child.length
                this.headerVh = 5
                this.contentVh = 60 - this.headerVh * this.length
                this.start = 0
                this.end = 0
            }
            init() {
                this.start = 1000
                this.end = 1800
                // if (window.innerHeight < 900) {
                //     this.child.forEach((v, i) => {
                //         v.style.bottom = -100 + this.headerVh * (this.length - i) + 'vh'
                //         this.header[i].style.height = 47 + 'px'
                //         this.content[i].style.height = 360 + 'px'
                //     });
                // }
                // // else if (window.innerHeight > 901) {
                // //     this.child.forEach((v, i) => {
                // //         v.style.bottom = -100 + this.headerVh * (this.length - i) + 'vh'
                // //         this.header[i].style.height = 47 + 'px'
                // //         this.content[i].style.height = 360 + 'px'
                // //     });
                // // } 
                // else {
                this.child.forEach((v, i) => {
                    v.style.bottom = -100 + this.headerVh * (this.length - i) + 'vh'
                    this.header[i].style.height = this.headerVh + 'vh'
                    this.content[i].style.height = this.contentVh + 'vh'
                });
                // }
            }
            animate() {
                this.child.forEach((v, i) => {
                    const anilenght = (this.end - this.start) / this.length
                    const s = this.start + anilenght * i + 100
                    const e = this.start + anilenght * (i + 1)

                    if (window.scrollY <= s) {
                        v.style.transform = `translate3d(0, 0, 0)`
                    } else if (window.scrollY >= e) {
                        v.style.transform = `translate3d(0, ${-this.contentVh}%, 0)`
                    } else {
                        v.style.transform = `translate3d(0, ${(window.scrollY - s) / (anilenght - 100) * (-this.contentVh)
                            }%, 0)`
                    }
                })
            }
        }
        const scrollpage = new ScrollPage(mainct, realsticky, section, header, content);
        scrollpage.init()

        window.addEventListener('scroll', () => {
            scrollpage.animate()
        })
        window.addEventListener('resize', () => {
            scrollpage.init()
        })
        // console.log(realsticky.children.children[0])
    }, [])

    const addToRefs = (el) => {
        if (el && !sectionRef.current.includes(el)) {
            sectionRef.current.push(el);
            console.log(section)
        }
    }
    const addToheader = (el) => {
        if (el && !header.includes(el)) {
            header.push(el)
            console.log(header)
        }
    }
    const addTocontent = (el) => {
        if (el && !content.includes(el)) {
            content.push(el)
            console.log(content)
        }
    }

    const buttonRef = useRef()

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
                console.log(centerX, centerY, d);

                // element.style.transform = `
                //     translate3d(${centerX / 1.5}px, ${centerY / 1.5}px, 0)
                // `

                let one = gsap.to(buttonRef.current, {
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

                let two = gsap.to(buttonRef.current, 1.5, {
                    x: 0,
                    y: 0,
                    ease: Elastic.easeOut.config(1, 0.1)
                })
            })

        }

        mgbutton(a)
    })

    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = content[2].clientWidth - 10
        canvas.height = 500
        const context = canvas.getContext('2d');


        function arc1() {
            context.save();
            context.fillStyle = 'burlywood';
            context.arc(canvas.width / 2, canvas.height / 2, 70, Math.PI * 2, 0);
            context.fill();

        }

        console.log(window.scrollY)


        arc1()


        window.addEventListener('resize', () => {
            canvas.width = content[2].clientWidth - 10
            canvas.height = 500
            arc1()
        })

    }, [])

    const canvasRef2 = useRef(null)

    useEffect(() => {
        const canvas = canvasRef2.current
        canvas.width = content[2].clientWidth - 10
        canvas.height = 500
        const context = canvas.getContext('2d')

        function emote() {
            const x1 = canvas.width / 2
            const y1 = canvas.height / 2
            if (window.scrollY < 400) {
                context.beginPath();
                context.save();
                context.lineWidth = 3;
                context.moveTo(x1 - 45, y1 - 20);
                context.lineTo(x1 - 10, y1 - 10);
                context.moveTo(x1 + 45, y1 - 20);
                context.lineTo(x1 + 10, y1 - 10);
                context.moveTo(x1 - 30, y1 - 15);
                context.lineTo(x1 - 30, y1);
                context.moveTo(x1 + 30, y1 - 15);
                context.lineTo(x1 + 30, y1);
                context.moveTo(x1, y1 + 25);
                context.lineTo(x1 - 20, y1 + 45);
                context.lineTo(x1 + 20, y1 + 45);
                context.lineTo(x1, y1 + 25);
                context.lineJoin = 'bevel';
                context.stroke();
                context.closePath();
                context.restore();
            } else if (window.scrollY > 400 && window.scrollY < 800) {
                context.beginPath();
                context.save();
                context.lineWidth = 3;
                context.moveTo(x1 - 45, y1 - 15);
                context.lineTo(x1 - 10, y1 - 15);
                context.moveTo(x1 + 45, y1 - 15);
                context.lineTo(x1 + 10, y1 - 15);
                context.moveTo(x1, y1 + 25);
                context.bezierCurveTo(x1 - 15, y1 + 45, x1 - 15, y1 + 45, x1, y1 + 55);
                context.bezierCurveTo(x1 + 15, y1 + 45, x1 + 15, y1 + 45, x1, y1 + 25);
                context.lineCap = 'round';
                context.lineJoin = 'round';
                context.stroke();
                context.closePath();
                context.restore();
            } else if (window.scrollY > 800) {
                context.beginPath();
                context.save();
                context.lineWidth = 3;
                context.moveTo(x1 - 40, y1 - 20);
                context.lineTo(x1 - 10, y1 - 8);
                context.lineTo(x1 - 40, y1);
                context.moveTo(x1 + 40, y1 - 20);
                context.lineTo(x1 + 10, y1 - 8);
                context.lineTo(x1 + 40, y1);
                context.moveTo(x1, y1 + 30);
                context.quadraticCurveTo(x1 - 10, y1 + 55, x1 - 20, y1 + 30);
                context.moveTo(x1, y1 + 30);
                context.quadraticCurveTo(x1 + 10, y1 + 55, x1 + 20, y1 + 30);
                context.lineCap = 'round';
                context.lineJoin = 'round';
                context.stroke();
                context.restore();
                context.closePath();
            }


        }


        function render() {
            context.clearRect(0, 0, canvas.width, canvas.height);
            emote()
            window.requestAnimationFrame(render)
        }

        render()

        window.addEventListener('resize', () => {
            canvas.width = content[2].clientWidth - 10
            canvas.height = 500
        })

    }, [])

    const canvasRef1 = useRef()
    // let [skill,setSkill] = useState()


    useEffect(() => {
        console.log(content[2])
        const canvas = canvasRef1.current;
        canvas.width = content[2].clientWidth
        canvas.height = content[2].clientHeight
        const context = canvas.getContext('2d');

        const skillArray = []
        const skills = []

        // console.log(content[2].style.height)
        const canvasImg = new Image()
        const css3Img = new Image()
        const gitbashImg = new Image()
        const gsapImg = new Image()
        const html5Img = new Image()
        const jQueryImg = new Image()
        const jsImg = new Image()
        const mongodbImg = new Image()
        const reactImg = new Image()
        const reduxImg = new Image()
        const vueImg = new Image()
        const instaImg = new Image()
        const blogImg = new Image()
        const githubImg = new Image()

        canvasImg.src = canvasimg
        css3Img.src = css3img
        gitbashImg.src = gitbashimg
        gsapImg.src = gsapimg
        html5Img.src = html5img
        jQueryImg.src = jQueryimg
        jsImg.src = jsimg
        mongodbImg.src = mongodbimg
        reactImg.src = reactimg
        reduxImg.src = reduximg
        vueImg.src = vueimg
        instaImg.src = instaimg
        blogImg.src = blogimg
        githubImg.src = gitimg

        skillArray.push(canvasImg, css3Img, gitbashImg, gsapImg, html5Img, jQueryImg, jsImg, mongodbImg, reactImg, reduxImg, vueImg);


        canvasImg.onload = () => {
            for (let i = 0; i < skillArray.length; i++) {
                skills.push(new Skills())
                // skills[i].draw(skillArray[i])
            }

            render()
        }


        function render() {
            context.clearRect(0, 0, canvas.width, canvas.height);
            skills.forEach((v, i) => {
                v.animate(skillArray[i], i)
            })
            window.requestAnimationFrame(render)

        }

        // render()
        window.addEventListener('resize', () => {
            canvas.width = content[2].clientWidth
            canvas.height = content[2].clientHeight
            // canvas.style.top = 12 + '%'
            // canvas.style.margin = 'auto'
        })






        class Skills {
            constructor(v, i) {
                this.x = Math.random() * canvas.width
                this.y = Math.random() * canvas.height / 1.5
                this.w = 80
                this.h = 80
                this.xSpeed = 0.5
                this.rdSpeed = 10
                this.sinnum = 90
                this.radian = i * 0.3
            }

            draw(v, i) {
                // this.radian += this.rdSpeed
                this.radian += this.rdSpeed
                if (this.x > canvas.width) {
                    this.x = Math.random() * -canvas.width
                    this.y = Math.random() * canvas.height / 1.5
                    this.w = 80
                    this.h = 80
                    // this.xSpeed = 0.5
                }
                context.drawImage(
                    v,
                    this.x,
                    this.y,
                    this.w,
                    this.h
                );

            }

            animate(v) {
                this.x += this.xSpeed
                this.sinnum += this.rdSpeed
                this.y += Math.sin(this.sinnum * Math.PI / 180 * 0.2)
                this.draw(v)
            }
        }
    }, [])

    const cirtextRef = useRef([])
    cirtextRef.current = []
    const cirtext = cirtextRef.current

    const addToSpan = (e) => {
        if (e && !cirtext.includes(e)) {
            cirtext.push(e);
        }
    }

    useEffect(() => {
        function rotatespan() {
            for (var i = 1; i < cirtext.length; i++) {
                cirtext[i].style.transform = "rotate(" + i * 15 + "deg)"
            };
        }

        rotatespan()
    })

    const canvasRef3 = useRef(null)

    useEffect(() => {
        const canvas = canvasRef3.current;
        const context = canvas.getContext("2d");
        canvas.width = canvasRef1.current.width;
        canvas.height = canvasRef1.current.height;

        const anmanArray = []
        const anCount = 1
        const anmanImg = new Image()
        anmanImg.src = anman
        anmanImg.onload = () => {
            for (let i = 0; i < anCount; i++) {
                anmanArray.push(new Animateman())
            }
            render()

        }

        function render(t) {
            context.clearRect(0, 0, canvas.width, canvas.height);
            anmanArray.forEach((v, i) => {
                v.draw(t)
            })
            window.requestAnimationFrame(render)
        }

        window.addEventListener('resize', () => {
            canvas.width = canvasRef1.current.width;
            canvas.height = canvasRef1.current.height;

        })


        class Animateman {
            constructor() {
                this.img = anmanImg;
                this.x = -canvas.width / 10;
                this.y = canvas.height;
                this.imgWidth = 62;
                this.imgHeight = 160;
                this.anmanWidth = this.imgWidth / 2
                this.anmanHeight = this.imgHeight / 2
                this.anmanHwidth = this.anmanWidth / 2
                this.xSpeed = 1;

                this.aniFrame = 20;
                this.curFrame = 0;
                this.fps = 30;
                this.fpsTime = 1000 / this.fps;
            }
            draw(t) {
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
                this.x += this.xSpeed
                if (this.x > canvas.width + 50) {
                    this.x = -canvas.width / 10;
                }
                context.save();
                context.translate(this.x, this.y);
                context.scale(1.5, 1.5);
                context.drawImage(this.img,
                    this.imgWidth * this.curFrame,
                    0,
                    this.imgWidth,
                    this.imgHeight,
                    -this.anmanHwidth,
                    -this.anmanHeight - 2,
                    this.anmanWidth,
                    this.anmanHeight);
                context.restore();


            }
        }
    })




    return (
        <div ref={pageRef} className={styles.page}>
            <div ref={maincontainer1} className={styles.mainbox1}>
                <div className={styles.canvasSticky}>
                    <canvas ref={canvasRef} style={canvasStyle} className={styles.canvas}></canvas>
                    <canvas ref={canvasRef2} style={canvasStyle2}></canvas>
                    <div className={styles.circletext}>
                        <span className={styles.cirspan} ref={addToSpan}>S</span>
                        <span className={styles.cirspan} ref={addToSpan}>c</span>
                        <span className={styles.cirspan} ref={addToSpan}>r</span>
                        <span className={styles.cirspan} ref={addToSpan}>o</span>
                        <span className={styles.cirspan} ref={addToSpan}>l</span>
                        <span className={styles.cirspan} ref={addToSpan}>l</span>
                        <span className={styles.cirspan} ref={addToSpan}>D</span>
                        <span className={styles.cirspan} ref={addToSpan}>o</span>
                        <span className={styles.cirspan} ref={addToSpan}>w</span>
                        <span className={styles.cirspan} ref={addToSpan}>n</span>
                        <span className={styles.cirspan} ref={addToSpan}>●</span>
                        <span className={styles.cirspan} ref={addToSpan}>H</span>
                        <span className={styles.cirspan} ref={addToSpan}>a</span>
                        <span className={styles.cirspan} ref={addToSpan}>v</span>
                        <span className={styles.cirspan} ref={addToSpan}>e</span>
                        <span className={styles.cirspan} ref={addToSpan}>a</span>
                        <span className={styles.cirspan} ref={addToSpan}>N</span>
                        <span className={styles.cirspan} ref={addToSpan}>i</span>
                        <span className={styles.cirspan} ref={addToSpan}>c</span>
                        <span className={styles.cirspan} ref={addToSpan}>e</span>
                        <span className={styles.cirspan} ref={addToSpan}>D</span>
                        <span className={styles.cirspan} ref={addToSpan}>a</span>
                        <span className={styles.cirspan} ref={addToSpan}>y</span>
                        <span className={styles.cirspan} ref={addToSpan}>!</span>
                    </div>
                </div>
                <div ref={sticky} className={styles.sticky}>
                    <div ref={addToRefs} className={styles.section}>
                        <div ref={addToheader} className={`${styles.header} ${styles.header1}`}>
                            <h2>File One : Profile</h2>
                        </div>
                        <div ref={addTocontent} className={`${styles.content} ${styles.content1}`}>
                            <div>
                                <img src={profileimg} />
                                <div>
                                </div>
                            </div>
                            <div>
                                <h3>Name : 곽신우 (郭信玗)</h3>
                                <h3>Age : 30</h3>
                                <h3>Location : 서울 강동구 강일동 유러피안하우스2차</h3>
                                <h3>Family members : 아버지, 어머니, 강아지</h3>
                                <h3>Hobby : 축구, 농구, 수영, 당구, 탁구, 롤, 콘솔게임</h3>
                            </div>
                        </div>
                    </div>
                    <div ref={addToRefs} className={styles.section}>
                        <div ref={addToheader} className={`${styles.header} ${styles.header2}`}>
                            <h2>File Two : License</h2>
                        </div>
                        <div ref={addTocontent} className={`${styles.content} ${styles.content2}`}>
                            <div>
                                <h4>취득일자</h4>
                                <h4>2017.09</h4>
                                <h4>2017.12</h4>
                                <h4>2017.12</h4>
                                <h4>2018.12</h4>
                                <h4>2018.12</h4>
                                <h4>2020.11</h4>
                                <h4>2021.06</h4>
                                <h4>2022.01</h4>
                            </div>
                            <div>
                                <h4>자격명</h4>
                                <h4>압연기능사</h4>
                                <h4>제선기능사</h4>
                                <h4>제강기능사</h4>
                                <h4>금속재료산업기사</h4>
                                <h4>JLPT N3급</h4>
                                <h4>산업안전산업기사</h4>
                                <h4>정보처리산업기사</h4>
                                <h4>JPT 705점 (JLPT환산시 N1급)</h4>
                            </div>
                        </div>
                    </div>
                    <div ref={addToRefs} className={styles.section}>
                        <div ref={addToheader} className={`${styles.header} ${styles.header3}`}>
                            <h2>File Three : Skills</h2>
                        </div>
                        <div ref={addTocontent} className={`${styles.content} ${styles.content3}`}>
                            <canvas ref={canvasRef1} style={canvasStyle1}></canvas>
                            <canvas ref={canvasRef3}></canvas>
                        </div>
                    </div>
                    <div ref={addToRefs} className={styles.section}>
                        <div ref={addToheader} className={`${styles.header} ${styles.header4}`}>
                            <h2>File Four : Reference</h2>
                        </div>
                        <div ref={addTocontent} className={`${styles.content} ${styles.content4}`}>
                            <div>
                                <img width={20 + '%'} src={instaimg} />
                                <h3>Instagram</h3>
                            </div>
                            <div>
                                <img width={20 + '%'} src={blogimg}></img>
                                <h3>NaverBlog</h3>
                            </div>
                            <div>
                                <img width={100} src={gitimg}></img>
                                <h3>Github</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div ref={buttonRef} className={styles.enter}>
                <span onClick={() => { navigate('/list') }}>Click To List</span>
            </div>

        </div>
    )
}

export default Profile;

const canvasStyle = {
    // border: "1px solid black",
    positon: 'absolute',
    margin: 'auto'
}

const canvasStyle1 = {
    // border: "1px solid black",
    position: 'absolute',
    margin: 'auto'
    // top: '5%'
}
const canvasStyle2 = {
    // border: "1px solid red",
    position: 'absolute',
    margin: 'auto',
    top: '20%'
}