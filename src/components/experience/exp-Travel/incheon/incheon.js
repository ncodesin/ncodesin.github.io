import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import { travelic, turnicgo, turntvgo } from '../../../../store'
import x1 from '../x1.png'
import styles from '../location.module.css'
import { Traveltextani } from '../Travel'


function Incheon() {

    const windowboxRef = useRef(null)

    let tvgo = useSelector((state) => { return state.travelgo })

    console.log(tvgo)

    let dispatch = useDispatch()

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

    useEffect(() => {
        const wdbox = windowboxRef.current
        wdbox.style.width = window.innerWidth + 'px'
        wdbox.style.height = window.innerHeight + 'px'
    }, [])


    let locarate = [{ 지역명: "인천", 만족도: 4 }]



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
                                    dispatch(turntvgo(i + 1))
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
                            dispatch(travelic(0))
                        }} src={x1} width='25' className={styles.xrote} />
                        <Traveltextani />

                    </div>
                </div>
            </motion.div>
            {tvgo == 1 ? <Incheon1 /> : false}
        </>
    )
}

export default Incheon

function Incheon1() {

    const windowboxRef = useRef(null)
    const stcontrolRef = useRef(null)
    const stimageRef = useRef([]);
    stimageRef.current = [];
    const stimage = stimageRef.current;
    const sttextRef = useRef([]);
    sttextRef.current = [];
    const sttext = sttextRef.current;
    const finalpicRef = useRef(null)

    let dispatch = useDispatch()

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

    function abc() {
        let stconrol = stcontrolRef.current
        let y = stconrol.scrollTop

    }
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
                        <h2>여행지역 - <span style={{ color: 'orange' }}>인천</span></h2>
                        <h3>장소 - 차이나타운 & 월미도</h3>
                        <h3>여행시기 - 2012년 12월</h3>
                        <h3>여행 이동수단 - 대중교통</h3>
                        <div className={styles.sticky0}>
                            <div className={styles.textcontent}>
                                <p style={{ fontSize: 20, color: 'dimgrey', textAlign: 'center' }}>정확히 10년전 12월 친구가 인천에서 지내고있어서 <br />
                                    가봤던 인천, 당시 유명했던 차이나타운과 월미도를 갔습니다만 <br />
                                    차이나타운엔 그저 중화요리집들만 즐비했고, 월미도도 디스코팡팡을 제외하면 <br />
                                    별로 할것도 없었고 화장실도 매우 더러웠던 기억이 있습니다. <br /> 그래서인지 남은 사진도 한장뿐..
                                </p>
                            </div>
                            <div className={styles.ctimagebox}>
                                <img src={process.env.PUBLIC_URL + './image/incheon/incheon1.jpg'} />
                            </div>
                        </div>
                        <div style={{
                            display: 'flex',
                            marginTop: '200px',
                            alignItems: 'center'
                        }}>
                            <img className={styles.cuteimg1} style={{ cursor: 'pointer' }} onClick={() => { gotoTop() }} src={process.env.PUBLIC_URL + 'cute2.png'} width={75} height={75} />
                            <p>←맨위로!</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}