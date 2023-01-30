import { useEffect, useRef, useState } from 'react';
import styles from './profile.module.css'
import { gsap, Elastic } from "gsap"
import { useNavigate } from 'react-router-dom';
import profileimg from './Crop File.png'
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
import Gitimg from './skills/Git.png'
import framerimg from './skills/framer.png'
import instaimg from './reference/insta.png'
import gitimg from './reference/github.png'
import blogimg from './reference/blog.png'
import scssimg from './skills/Scss.png'
import { render } from '@testing-library/react';
import { motion } from "framer-motion"
import anman from './ansheet.png'
import arrowimg from './skills/arrow.png'
import { useDispatch, useSelector } from 'react-redux';
import { cgskill1, cgskill2, cgskill3, cgskill4 } from '../../store';



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
                if (window.innerWidth < 750) {
                    this.child.forEach((v, i) => {
                        const anilenght = (this.end - this.start) / this.length
                        const s = this.start + anilenght * i - 100
                        const e = this.start + anilenght * i

                        if (window.scrollY <= s) {
                            v.style.transform = `translate3d(0, 0, 0)`
                        } else if (window.scrollY >= e) {
                            v.style.transform = `translate3d(0, ${-this.contentVh}%, 0)`
                        } else {
                            v.style.transform = `translate3d(0, ${(window.scrollY - s) / (anilenght - 100) * (-this.contentVh)
                                }%, 0)`
                        }
                    })
                } else {

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
        }
        const scrollpage = new ScrollPage(mainct, realsticky, section, header, content);
        scrollpage.init()

        window.addEventListener('scroll', () => {
            scrollpage.animate()
        })
        window.addEventListener('resize', () => {
            scrollpage.init()
        })
    }, [])

    const addToRefs = (el) => {
        if (el && !sectionRef.current.includes(el)) {
            sectionRef.current.push(el);
        }
    }
    const addToheader = (el) => {
        if (el && !header.includes(el)) {
            header.push(el)
        }
    }
    const addTocontent = (el) => {
        if (el && !content.includes(el)) {
            content.push(el)
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

            element.addEventListener('touchmove', e => {
                const { offsetLeft, offsetTop, offsetWidth, offsetHeight } = element
                const left = e.changedTouches[0].pageX - offsetLeft
                const top = e.changedTouches[0].pageY - offsetTop
                const centerX = left - offsetWidth / 2
                const centerY = top - offsetHeight / 2
                const d = Math.sqrt(centerX ** 2 + centerY ** 2)

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

            element.addEventListener('touchend', () => {
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


    let [language, setLanguage] = useState([{ name: 'HTML5', img: html5img }, { name: 'CSS3', img: css3img }, { name: 'Javascript', img: jsimg }, { name: 'Scss', img: scssimg }])
    let [DB, setDB] = useState([{ name: 'mongoDB', img: mongodbimg }])
    let [library, setLibrary] = useState([{ name: 'jQuery', img: jQueryimg }, { name: 'React', img: reactimg }, { name: 'Redux', img: reduximg }, { name: 'Gsap', img: gsapimg }, { name: 'framer-motion', img: framerimg }])
    let [etc, setEtc] = useState([{ name: 'Git', img: Gitimg }, { name: 'Canvas', img: canvasimg }])

    let skillcont = useSelector((state) => { return state.skillcont });

    let dispatch = useDispatch()

    const skill1ref = useRef([])
    skill1ref.current = []
    const skill1 = skill1ref.current

    const addToskill1 = (e) => {
        if (e && !skill1.includes(e)) {
            skill1.push(e)
        };
    }

    const skill2ref = useRef([])
    skill2ref.current = []
    const skill2 = skill2ref.current

    const addToskill2 = (e) => {
        if (e && !skill2.includes(e)) {
            skill2.push(e)
        };
    }

    const skill3ref = useRef([])
    skill3ref.current = []
    const skill3 = skill3ref.current

    const addToskill3 = (e) => {
        if (e && !skill3.includes(e)) {
            skill3.push(e)
        };
    }

    const skill4ref = useRef([])
    skill4ref.current = []
    const skill4 = skill4ref.current

    const addToskill4 = (e) => {
        if (e && !skill4.includes(e)) {
            skill4.push(e)
        };
    }

    function dropdown() {
        if (skillcont[0] == 1) {
            skill1.forEach((v, i) => {
                let abc = skill1.length - 1
                skill1[abc - i].animate([
                    { opacity: 1, transform: "translateX(0)" },
                    { opacity: 0, transform: "translateX(-100px)" }
                ], {
                    delay: 100 * i,
                    duration: 300,
                    fill: "forwards"
                })

            });
        } else if (skillcont[0] == 0) {
            skill1.forEach((v, i) => {
                v.animate([
                    { opacity: 0, transform: "translateX(-100px)" },
                    { opacity: 1, transform: "translateX(0)" }
                ], {
                    delay: 100 * i,
                    duration: 300,
                    fill: "forwards"
                })

            });
        }
    }
    function dropdown2() {
        if (skillcont[1] == 1) {
            skill2.forEach((v, i) => {
                let abc = skill2.length - 1
                skill2[abc - i].animate([
                    { opacity: 1, transform: "translateX(0)" },
                    { opacity: 0, transform: "translateX(-100px)" }
                ], {
                    delay: 100 * i,
                    duration: 300,
                    fill: "forwards"
                })

            });
        } else if (skillcont[1] == 0) {
            skill2.forEach((v, i) => {
                v.animate([
                    { opacity: 0, transform: "translateX(-100px)" },
                    { opacity: 1, transform: "translateX(10px)" }
                ], {
                    delay: 100 * i,
                    duration: 300,
                    fill: "forwards"
                })

            });
        }
    }
    function dropdown3() {
        if (skillcont[2] == 1) {
            skill3.forEach((v, i) => {
                let abc = skill3.length - 1
                skill3[abc - i].animate([
                    { opacity: 1, transform: "translateX(0)" },
                    { opacity: 0, transform: "translateX(-100px)" }
                ], {
                    delay: 100 * i,
                    duration: 300,
                    fill: "forwards"
                })

            });
        } else if (skillcont[2] == 0) {
            skill3.forEach((v, i) => {
                v.animate([
                    { opacity: 0, transform: "translateX(-100px)" },
                    { opacity: 1, transform: "translateX(0)" }
                ], {
                    delay: 100 * i,
                    duration: 300,
                    fill: "forwards"
                })

            });
        }
    }
    function dropdown4() {
        if (skillcont[3] == 1) {
            skill4.forEach((v, i) => {
                let abc = skill4.length - 1
                skill4[abc - i].animate([
                    { opacity: 1, transform: "translateX(0)" },
                    { opacity: 0, transform: "translateX(-100px)" }
                ], {
                    delay: 100 * i,
                    duration: 300,
                    fill: "forwards"
                })

            });
        } else if (skillcont[3] == 0) {
            skill4.forEach((v, i) => {
                v.animate([
                    { opacity: 0, transform: "translateX(-100px)" },
                    { opacity: 1, transform: "translateX(0)" }
                ], {
                    delay: 100 * i,
                    duration: 300,
                    fill: "forwards"
                })

            });
        }
    }

    useEffect(() => {
        // dropdown()
        // function dropdown2() {
        //     if (skillcont[1] == 0) {
        //         skill2.forEach((v, i) => {
        //             let abc = skill2.length - 1
        //             skill2[abc - i].animate([
        //                 { opacity: 1, transform: "translateX(0)" },
        //                 { opacity: 0, transform: "translateX(-100px)" }
        //             ], {
        //                 delay: 100 * i,
        //                 duration: 500,
        //                 fill: "forwards"
        //             })

        //         });
        //     } else {
        //         skill2.forEach((v, i) => {
        //             v.animate([
        //                 { opacity: 0, transform: "translateX(-100px)" },
        //                 { opacity: 1, transform: "translateX(0)" }
        //             ], {
        //                 delay: 100 * i,
        //                 duration: 500,
        //                 fill: "forwards"
        //             })

        //         });
        //     }


        // }
        // dropdown2()
    })

    // const canvasRef1 = useRef()
    // // let [skill,setSkill] = useState()


    // useEffect(() => {
    //     console.log(content[2])
    //     const canvas = canvasRef1.current;
    //     canvas.width = content[2].clientWidth
    //     canvas.height = content[2].clientHeight
    //     const context = canvas.getContext('2d');

    //     const skillArray = []
    //     const skills = []

    //     // console.log(content[2].style.height)
    //     const canvasImg = new Image()
    //     const css3Img = new Image()
    //     const gitbashImg = new Image()
    //     const gsapImg = new Image()
    //     const html5Img = new Image()
    //     const jQueryImg = new Image()
    //     const jsImg = new Image()
    //     const mongodbImg = new Image()
    //     const reactImg = new Image()
    //     const reduxImg = new Image()
    //     const vueImg = new Image()
    //     const instaImg = new Image()
    //     const blogImg = new Image()
    //     const githubImg = new Image()

    //     canvasImg.src = canvasimg
    //     css3Img.src = css3img
    //     gitbashImg.src = gitbashimg
    //     gsapImg.src = gsapimg
    //     html5Img.src = html5img
    //     jQueryImg.src = jQueryimg
    //     jsImg.src = jsimg
    //     mongodbImg.src = mongodbimg
    //     reactImg.src = reactimg
    //     reduxImg.src = reduximg
    //     vueImg.src = vueimg
    //     instaImg.src = instaimg
    //     blogImg.src = blogimg
    //     githubImg.src = gitimg

    //     skillArray.push(canvasImg, css3Img, gitbashImg, gsapImg, html5Img, jQueryImg, jsImg, mongodbImg, reactImg, reduxImg, vueImg);


    //     canvasImg.onload = () => {
    //         for (let i = 0; i < skillArray.length; i++) {
    //             skills.push(new Skills())
    //             // skills[i].draw(skillArray[i])
    //         }

    //         render()
    //     }


    //     function render() {
    //         context.clearRect(0, 0, canvas.width, canvas.height);
    //         skills.forEach((v, i) => {
    //             v.animate(skillArray[i], i)
    //         })
    //         window.requestAnimationFrame(render)

    //     }

    //     // render()
    //     window.addEventListener('resize', () => {
    //         canvas.width = content[2].clientWidth
    //         canvas.height = content[2].clientHeight
    //         // canvas.style.top = 12 + '%'
    //         // canvas.style.margin = 'auto'
    //     })






    //     class Skills {
    //         constructor(v, i) {
    //             this.x = Math.random() * canvas.width
    //             this.y = Math.random() * canvas.height / 1.5
    //             this.w = 80
    //             this.h = 80
    //             this.xSpeed = 0.5
    //             this.rdSpeed = 10
    //             this.sinnum = 90
    //             this.radian = i * 0.3
    //         }

    //         draw(v, i) {
    //             // this.radian += this.rdSpeed
    //             this.radian += this.rdSpeed
    //             if (this.x > canvas.width) {
    //                 this.x = Math.random() * -canvas.width
    //                 this.y = Math.random() * canvas.height / 1.5
    //                 this.w = 80
    //                 this.h = 80
    //                 // this.xSpeed = 0.5
    //             }
    //             if (window.innerWidth < 750) {
    //                 context.drawImage(
    //                     v,
    //                     this.x,
    //                     this.y,
    //                     this.w / 1.5,
    //                     this.h / 1.5
    //                 );
    //             } else {

    //                 context.drawImage(
    //                     v,
    //                     this.x,
    //                     this.y,
    //                     this.w,
    //                     this.h
    //                 );
    //             }

    //         }

    //         animate(v) {
    //             this.x += this.xSpeed
    //             this.sinnum += this.rdSpeed
    //             this.y += Math.sin(this.sinnum * Math.PI / 180 * 0.2)
    //             this.draw(v)
    //         }
    //     }
    // }, [])

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
                cirtext[i].style.transform = "rotate(" + i * 13 + "deg)"
            };
        }

        rotatespan()
    })

    const canvasRef3 = useRef(null)

    useEffect(() => {
        const canvas = canvasRef3.current;
        const context = canvas.getContext("2d");
        canvas.width = content[2].clientWidth;
        canvas.height = content[2].clientHeight;

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
            canvas.width = content[2].clientWidth;
            canvas.height = content[2].clientHeight;

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
    }, [])

    // const content1hRef = useRef(null);
    // useEffect(() => {
    //     const content1h = content1hRef.current;
    //     console.log(content1h.children)
    //     const abc = content1h.children
    //     const chArray = []
    //     for (let i = 0; i < abc.length; i++) {
    //         chArray.push(abc[i])
    //     }
    //     if (window.innerWidth < 750) {
    //         chArray.forEach((v, i) => {
    //             v.style.height = 20 + 'px'
    //         })
    //     } else {
    //         chArray.forEach((v, i) => {
    //             v.style.height = 40 + 'px'
    //         })
    //     }

    //     window.addEventListener('resize', () => {
    //         if (window.innerWidth < 750) {
    //             chArray.forEach((v, i) => {
    //                 v.style.height = 20 + 'px'
    //             })
    //         } else {
    //             chArray.forEach((v, i) => {
    //                 v.style.height = 40 + 'px'
    //             })
    //         }
    //         console.log(window.innerWidth)
    //     })
    // })




    return (
        <div ref={pageRef} className={styles.page}>
            <div ref={maincontainer1} className={styles.mainbox1}>
                <div className={styles.canvasSticky}>
                    <canvas ref={canvasRef} style={canvasStyle} className={styles.canvas}></canvas>
                    <canvas ref={canvasRef2} style={canvasStyle2}></canvas>
                    <div className={styles.circletext}>
                        <span className={`${styles.cirspan} , ${styles.cirspan1} `} ref={addToSpan}>S</span>
                        <span className={`${styles.cirspan} , ${styles.cirspan1} `} ref={addToSpan}>c</span>
                        <span className={`${styles.cirspan} , ${styles.cirspan1} `} ref={addToSpan}>r</span>
                        <span className={`${styles.cirspan} , ${styles.cirspan1} `} ref={addToSpan}>o</span>
                        <span className={`${styles.cirspan} , ${styles.cirspan1} `} ref={addToSpan}>l</span>
                        <span className={`${styles.cirspan} , ${styles.cirspan1} `} ref={addToSpan}>l</span>
                        <span className={`${styles.cirspan} , ${styles.cirspan2} `} ref={addToSpan}>●</span>
                        <span className={`${styles.cirspan} , ${styles.cirspan1} `} ref={addToSpan}>D</span>
                        <span className={`${styles.cirspan} , ${styles.cirspan1} `} ref={addToSpan}>o</span>
                        <span className={`${styles.cirspan} , ${styles.cirspan1} `} ref={addToSpan}>w</span>
                        <span className={`${styles.cirspan} , ${styles.cirspan1} `} ref={addToSpan}>n</span>
                        <span className={`${styles.cirspan} , ${styles.cirspan2} `} ref={addToSpan}>●</span>
                        <span className={styles.cirspan} ref={addToSpan}>H</span>
                        <span className={styles.cirspan} ref={addToSpan}>a</span>
                        <span className={styles.cirspan} ref={addToSpan}>v</span>
                        <span className={styles.cirspan} ref={addToSpan}>e</span>
                        <span className={`${styles.cirspan} , ${styles.cirspan2} `} ref={addToSpan}>●</span>
                        <span className={styles.cirspan} ref={addToSpan}>a</span>
                        <span className={styles.cirspan} ref={addToSpan}>N</span>
                        <span className={styles.cirspan} ref={addToSpan}>i</span>
                        <span className={styles.cirspan} ref={addToSpan}>c</span>
                        <span className={styles.cirspan} ref={addToSpan}>e</span>
                        <span className={`${styles.cirspan} , ${styles.cirspan2} `} ref={addToSpan}>●</span>
                        <span className={styles.cirspan} ref={addToSpan}>D</span>
                        <span className={styles.cirspan} ref={addToSpan}>a</span>
                        <span className={styles.cirspan} ref={addToSpan}>y</span>
                        <span className={styles.cirspan} ref={addToSpan}>!</span>
                        <span className={`${styles.cirspan} , ${styles.cirspan2} `} ref={addToSpan}>●</span>
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
                            {/* <canvas ref={canvasRef1} style={canvasStyle1}></canvas> */}
                            <canvas ref={canvasRef3}></canvas>
                            <div className={styles.SkillBox}>
                                <div className={styles.skill1}>
                                    <div style={{ display: 'flex' }}>
                                        <p className={styles.skill1box} onClick={() => {
                                            if (skillcont[0] == 0) {
                                                dispatch(cgskill1(1))
                                            } else if (skillcont[0] == 1) {
                                                dispatch(cgskill1(0))
                                            }
                                            dropdown()
                                        }}>Language</p>
                                        {skillcont[0] == 0 ?
                                            <img style={{ transform: 'rotate(90deg)' }} width={35} src={arrowimg} /> :
                                            <img style={{ transform: 'rotate(540deg)' }} width={35} src={arrowimg} />
                                        }
                                    </div>
                                    <div className={styles.skill2}>
                                        {language.map((v, i) => {
                                            return <>
                                                <div ref={addToskill1} className={styles.skillcontent}>
                                                    <img width={40} height={40} src={v.img}></img> <p>{v.name}</p>
                                                </div>
                                            </>

                                        })}
                                    </div>
                                </div>
                                <div className={styles.skill1}>
                                    <div style={{ display: 'flex' }}>
                                        <p className={styles.skill1box} onClick={() => {
                                            if (skillcont[1] == 0) {
                                                dispatch(cgskill2(1))
                                            } else if (skillcont[1] == 1) {
                                                dispatch(cgskill2(0))
                                            }
                                            dropdown2()
                                        }}>Library</p>
                                        {skillcont[1] == 0 ?
                                            <img style={{ transform: 'rotate(90deg)' }} width={35} src={arrowimg} /> :
                                            <img style={{ transform: 'rotate(540deg)' }} width={35} src={arrowimg} />
                                        }
                                    </div>
                                    <div className={styles.skill2}>
                                        {library.map((v, i) => {
                                            return <>
                                                <div ref={addToskill2} className={styles.skillcontent}>
                                                    <img width={40} height={40} src={v.img}></img> <p>{v.name}</p>
                                                </div>
                                            </>

                                        })}
                                    </div>
                                </div>
                                <div className={styles.skill1}>
                                    <div style={{ display: 'flex' }}>
                                        <p className={styles.skill1box} onClick={() => {
                                            if (skillcont[2] == 0) {
                                                dispatch(cgskill3(1))
                                            } else if (skillcont[2] == 1) {
                                                dispatch(cgskill3(0))
                                            }
                                            dropdown3()
                                        }}>Database</p>
                                        {skillcont[2] == 0 ?
                                            <img style={{ transform: 'rotate(90deg)' }} width={35} src={arrowimg} /> :
                                            <img style={{ transform: 'rotate(540deg)' }} width={35} src={arrowimg} />
                                        }
                                    </div>
                                    <div className={styles.skill2}>
                                        {DB.map((v, i) => {
                                            return <>
                                                <div ref={addToskill3} className={styles.skillcontent}>
                                                    <img width={40} height={40} src={v.img}></img> <p>{v.name}</p>
                                                </div>
                                            </>

                                        })}
                                    </div>
                                </div>
                                <div className={styles.skill1}>
                                    <div style={{ display: 'flex' }}>
                                        <p className={styles.skill1box} onClick={() => {
                                            if (skillcont[3] == 0) {
                                                dispatch(cgskill4(1))
                                            } else if (skillcont[3] == 1) {
                                                dispatch(cgskill4(0))
                                            }
                                            dropdown4()
                                        }}>ETC.</p>
                                        {skillcont[3] == 0 ?
                                            <img style={{ transform: 'rotate(90deg)' }} width={35} src={arrowimg} /> :
                                            <img style={{ transform: 'rotate(540deg)' }} width={35} src={arrowimg} />
                                        }
                                    </div>
                                    <div className={styles.skill2}>
                                        {etc.map((v, i) => {
                                            return <>
                                                <div ref={addToskill4} className={styles.skillcontent}>
                                                    <img width={40} height={40} src={v.img}></img> <p>{v.name}</p>
                                                </div>
                                            </>

                                        })}
                                    </div>
                                </div>
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