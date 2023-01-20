import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import x1 from '../x1.png'
import styles from '../location.module.css'
import { travelggdo, turntvgo } from '../../../../store'
import { Traveltextani } from '../Travel'




function Gyeonggi() {

    const windowboxRef = useRef(null)

    let tvgo = useSelector((state) => { return state.travelgo })

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


    let dispatch = useDispatch()

    useEffect(() => {
        const wdbox = windowboxRef.current
        wdbox.style.width = window.innerWidth + 'px'
        wdbox.style.height = window.innerHeight + 'px'
    }, [])


    let locarate = [{ 지역명: "가평", 만족도: 6 }, { 지역명: "여주", 만족도: 7 }]

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
                                    dispatch(turntvgo(parseInt(`${i}`) + 2))
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
                            dispatch(travelggdo(0))
                        }} src={x1} width='25' className={styles.xrote} />
                        <Traveltextani />

                    </div>
                </div>
            </motion.div>
            {tvgo == 2 ? <Gyeonggi1 /> : false}
            {tvgo == 3 ? <Gyeonggi2 /> : false}
        </>
    )
}

export default Gyeonggi

function Gyeonggi1() {

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
        let sca = (-0.05 / 590) * y + (590.05 / 590)
        let sca1 = (-0.05 / 600) * y + (636.5 / 600)
        stimage[0].style.opacity = opa
        stimage[0].style.transform = `scale(${sca})`
        stimage[1].style.opacity = opa1
        stimage[1].style.transform = `scale(${sca1})`

    }
    function gotoTop() {
        let stconrol = stcontrolRef.current
        stconrol.scrollTop = 0
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
                        <h2>여행지역 - <span style={{ color: 'yellowgreen' }}>경기</span></h2>
                        <h3>장소 - 가평</h3>
                        <h3>여행시기 - 2020년 4월</h3>
                        <h3>여행 이동수단 - 자차</h3>
                        <div className={styles.sticky1}>
                            <div className={styles.textcontent}>
                                <p style={{ fontSize: 20, color: 'dimgrey', textAlign: 'center' }}>
                                    첫 직장을 나오고 난뒤 그 기념? 으로 소소하게 갔던 여행 <br />
                                    당시에는 집이 근처여서 원래도 가평은 자주갔었지만<br />
                                    항상 계곡만 놀러가다가 이때 처음으로 근처의 명소를 갔었습니다.<br />
                                    제이드가든이라는 곳인데 위치는 춘천입니다만 보통 가평여행때도 가까워서 간다고합니다.<br />
                                    개인적인 감상으로는 여러 정원이나 수목원느낌의 여행지를 많이 가봤는데, <br />
                                    이곳도 이쁘기는 했지만 여지껏 갔던 비슷한 여행지들 중에서는 가장 별로였다고 생각됩니다.
                                </p>
                            </div>
                            <div ref={addToimage} className={styles.ctimagebox}>
                                <img src={process.env.PUBLIC_URL + './image/gyeonggi/gyeonggi1.jpg'} />
                            </div>
                            <div ref={addToimage} className={styles.ctimagebox}>
                                <img src={process.env.PUBLIC_URL + './image/gyeonggi/gyeonggi2.jpg'} />
                            </div>
                            <div ref={addToimage} className={styles.ctimagebox}>
                                <img src={process.env.PUBLIC_URL + './image/gyeonggi/gyeonggi3.jpg'} />
                            </div>
                        </div>
                        <div style={{
                            display: 'flex',
                            marginTop: '200px',
                            alignItems: 'center'
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

function Gyeonggi2() {

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
        let sca = (-0.05 / 590) * y + (590.05 / 590)
        let sca1 = (-0.05 / 600) * y + (636.5 / 600)
        let sca2 = (-0.05 / 610) * y + (663 / 610)
        stimage[0].style.opacity = opa
        stimage[0].style.transform = `scale(${sca})`
        stimage[1].style.opacity = opa1
        stimage[1].style.transform = `scale(${sca1})`
        stimage[2].style.opacity = opa2
        stimage[2].style.transform = `scale(${sca2})`

    }
    function gotoTop() {
        let stconrol = stcontrolRef.current
        stconrol.scrollTop = 0
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
                        <h2>여행지역 - <span style={{ color: 'deeppink' }}>여주</span></h2>
                        <h3>장소 - 신륵사 국민관광지, 고구마밭</h3>
                        <h3>여행시기 - 2021년 10월</h3>
                        <h3>여행 이동수단 - 자차</h3>
                        <div className={styles.sticky2}>
                            <div className={styles.textcontent}>
                                <p style={{ fontSize: 20, color: 'dimgrey', textAlign: 'center' }}>
                                    본가가 여주로 이사를하면서 소소하게 들렸던 여행지<br />
                                    이곳의 산책코스는 매우 방대한데 그중에서 신륵사 국민관광지로 갔습니다<br />
                                    아마도 가장유명한곳은 세종대왕릉이겠지만<br />
                                    여기도 굉장히 평화로운 분위기와 좋은 경치가 어울려 굉장히 만족스러웠습니다.<br />
                                </p>
                            </div>
                            <div ref={addToimage} className={styles.ctimagebox}>
                                <img src={process.env.PUBLIC_URL + './image/gyeonggi/gyeonggi4.jpg'} />
                            </div>
                            <div ref={addToimage} className={styles.ctimagebox}>
                                <img src={process.env.PUBLIC_URL + './image/gyeonggi/gyeonggi5.jpg'} />
                            </div>
                            <div ref={addToimage} className={styles.ctimagebox}>
                                <img src={process.env.PUBLIC_URL + './image/gyeonggi/gyeonggi6.jpg'} />
                            </div>
                            <div ref={addToimage} className={styles.ctimagebox}>
                                <img src={process.env.PUBLIC_URL + './image/gyeonggi/gyeonggi7.jpg'} />
                            </div>
                        </div>
                        <div style={{
                            display: 'flex',
                            marginTop: '200px',
                            alignItems: 'center'
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