import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import x1 from '../x1.png'
import styles from '../location.module.css'
import { travelcb, travelcn, travelgwdo, traveljb, turntvgo } from '../../../../store'
import { Traveltextani } from '../Travel'




function Jeonbook() {

    const windowboxRef = useRef(null)

    let tvgo = useSelector((state) => { return state.travelgo })


    let dispatch = useDispatch()

    useEffect(() => {
        const wdbox = windowboxRef.current
        wdbox.style.width = window.innerWidth + 'px'
        wdbox.style.height = window.innerHeight + 'px'
    }, [])

    const xroteRef = useRef(null)

    function over() {
        let xrote = xroteRef.current
        xrote.animate([
            { transform: "rotate(0deg)" },
            { transform: "rotate(120deg)" },
            { transform: "rotate(90deg)" }
        ], {
            duration: 300,
            fill: "forwards"
        });
    };
    function leave() {
        let xrote = xroteRef.current
        xrote.animate([
            { transform: "rotate(90deg)" },
            { transform: "rotate(-30deg)" },
            { transform: "rotate(0deg)" }
        ], {
            duration: 300,
            fill: "forwards"
        });
    };


    let locarate = [{ 지역명: "전주", 만족도: 5 }]

    console.log(tvgo)

    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                    duration: 1,
                    ease: "easeInOut"
                }}
            >
                <div ref={windowboxRef} className={styles.windowbox}>
                    <div className={styles.contentbox1}>
                        {locarate.map((v, i) => {
                            var abc = locarate[i].만족도
                            return (
                                <div onClick={() => {
                                    dispatch(turntvgo(parseInt(`${i}`) + 9))
                                }} className={styles.outcontent}>
                                    <p className={styles.oc1}>여행지</p><p className={styles.oc2}>{locarate[i].지역명}</p><p className={styles.oc3}>만족도</p>
                                    {[...Array(parseInt(abc))].map((n, index) => {
                                        return <img className={styles.heart} width={30} src={process.env.PUBLIC_URL + 'heart.png'} />
                                    })}
                                </div>
                            )
                        })}
                        <img ref={xroteRef} onMouseOver={() => {
                            over()
                        }} onMouseLeave={() => {
                            leave()
                        }} onClick={() => {
                            dispatch(traveljb(0))
                        }} src={x1} width='25' className={styles.xrote} />
                        <Traveltextani />

                    </div>
                </div>
            </motion.div>
            {tvgo == 9 ? <Jeonbook1 /> : false}
        </>
    )
}

export default Jeonbook

function Jeonbook1() {

    const windowboxRef = useRef(null)
    const stcontrolRef = useRef(null)
    const stimageRef = useRef([]);
    stimageRef.current = [];
    const stimage = stimageRef.current;

    let dispatch = useDispatch()

    function abc() {
        let stconrol = stcontrolRef.current
        let y = stconrol.scrollTop
        console.log(y)
        let opa = (-2 / 580) * y + (1660 / 580)
        let opa1 = (-2 / 590) * y + (2660 / 590)
        let opa2 = (-2 / 600) * y + (3660 / 590)
        let opa3 = (-2 / 600) * y + (4660 / 590)
        let sca = (-0.05 / 590) * y + (600 / 590)
        let sca1 = (-0.05 / 600) * y + (636.5 / 600)
        let sca2 = (-0.05 / 610) * y + (663 / 610)
        let sca3 = (-0.05 / 620) * y + (690 / 610)
        stimage[0].style.opacity = opa
        stimage[0].style.transform = `scale(${sca})`
        stimage[1].style.opacity = opa1
        stimage[1].style.transform = `scale(${sca1})`
        stimage[2].style.opacity = opa2
        stimage[2].style.transform = `scale(${sca2})`
        // stimage[3].style.opacity = opa3
        // stimage[3].style.transform = `scale(${sca3})`

    }

    const xroteRef = useRef(null)

    function over() {
        let xrote = xroteRef.current
        xrote.animate([
            { transform: "rotate(0deg)" },
            { transform: "rotate(120deg)" },
            { transform: "rotate(90deg)" }
        ], {
            duration: 300,
            fill: "forwards"
        });
    };
    function leave() {
        let xrote = xroteRef.current
        xrote.animate([
            { transform: "rotate(90deg)" },
            { transform: "rotate(-30deg)" },
            { transform: "rotate(0deg)" }
        ], {
            duration: 300,
            fill: "forwards"
        });
    };

    function gotoTop() {
        let stconrol = stcontrolRef.current
        stconrol.scrollTop = 0
    }

    useEffect(() => {
        const wdbox = windowboxRef.current
        wdbox.style.width = window.innerWidth + 'px'
        wdbox.style.height = window.innerHeight + 'px'
        window.addEventListener('resize', () => {
            wdbox.style.width = window.innerWidth + 'px'
            wdbox.style.height = window.innerHeight + 'px'
        })

    })

    const addToimage = (el) => {
        if (el && !stimage.includes(el)) {
            stimage.push(el)
        }
    }

    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                    duration: 1,
                    ease: "easeInOut"
                }}
            >
                <div ref={windowboxRef} className={styles.windowbox}>
                    <div ref={stcontrolRef} onScroll={() => { abc() }} className={styles.contentbox}>
                        <img ref={xroteRef} onMouseOver={() => {
                            over()
                        }} onMouseLeave={() => {
                            leave()
                        }} onClick={() => {
                            dispatch(turntvgo(0))
                        }} src={x1} width='25' className={styles.xrote} />
                        <h2>여행지역 - <span style={{ color: 'brown' }}>전주</span></h2>
                        <h3>장소 - 한옥마을</h3>
                        <h3>여행시기 - 2014년 여름</h3>
                        <h3>여행 이동수단 - 기차</h3>
                        <div className={styles.sticky2}>
                            <div className={styles.textcontent}>
                                <p style={{ fontSize: 20, color: 'dimgrey', textAlign: 'center' }}>
                                    내일로 기차여행으로 갔던 첫번째 여행지 전주한옥마을!<br />
                                    전동성당도 멋졌고, 대나무길도 멋있었지만, <br />
                                    한옥마을 자체는 사람만 붐비고 그저 그랬던 기억으로 남아있습니다.<br />
                                </p>
                            </div>
                            <div ref={addToimage} className={styles.ctimagebox}>
                                <img src={process.env.PUBLIC_URL + './image/jeonju/jeonju1.jpeg'} />
                            </div>
                            <div ref={addToimage} className={styles.ctimagebox}>
                                <img src={process.env.PUBLIC_URL + './image/jeonju/jeonju2.jpeg'} />
                            </div>
                            <div ref={addToimage} className={styles.ctimagebox}>
                                <img src={process.env.PUBLIC_URL + './image/jeonju/jeonju3.jpg'} />
                            </div>
                            <div ref={addToimage} className={styles.ctimagebox}>
                                <img src={process.env.PUBLIC_URL + './image/jeonju/jeonju4.jpg'} />
                            </div>
                            {/* <div ref={addToimage} className={styles.ctimagebox}>
                                <img src={process.env.PUBLIC_URL + './image/asan/asan5.jpeg'} />
                            </div> */}
                        </div>
                        <div style={{
                            display: 'flex',
                            marginTop: '200px',
                            alignItems: 'center',
                            padding: '10px'

                        }}>
                            <img className={styles.cuteimg1} style={{ cursor: 'pointer' }} onClick={() => { gotoTop() }} src={process.env.PUBLIC_URL + 'cute2.png'} width={100} height={100} />
                            <p>←맨위로!</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}