import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import x1 from '../x1.png'
import styles from '../location.module.css'
import { travelbs, travelcb, travelcn, travelgwdo, traveljb, turntvgo } from '../../../../store'
import { Traveltextani } from '../Travel'


function Busan() {

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


    let locarate = [{ 지역명: "부산", 만족도: 9 }, { 지역명: "일본", 만족도: 10 }]

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
                                    dispatch(turntvgo(parseInt(`${i}`) + 12))
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
                            dispatch(travelbs(0))
                        }} src={x1} width='25' className={styles.xrote} />
                        <Traveltextani />
                    </div>
                </div>
            </motion.div>
            {tvgo == 12 ? <Busan1 /> : false}
            {tvgo == 13 ? <Japan1 /> : false}
        </>
    )
}

export default Busan

function Busan1() {

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
        let opa3 = (-2 / 610) * y + (4660 / 590)
        let opa4 = (-2 / 620) * y + (5660 / 590)
        let sca = (-0.05 / 590) * y + (600 / 590)
        let sca1 = (-0.05 / 600) * y + (636.5 / 600)
        let sca2 = (-0.05 / 610) * y + (663 / 610)
        let sca3 = (-0.05 / 620) * y + (690 / 620)
        let sca4 = (-0.05 / 630) * y + (730 / 630)
        stimage[0].style.opacity = opa
        stimage[0].style.transform = `scale(${sca})`
        stimage[1].style.opacity = opa1
        stimage[1].style.transform = `scale(${sca1})`
        stimage[2].style.opacity = opa2
        stimage[2].style.transform = `scale(${sca2})`
        stimage[3].style.opacity = opa3
        stimage[3].style.transform = `scale(${sca3})`
        stimage[4].style.opacity = opa4
        stimage[4].style.transform = `scale(${sca4})`

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
                        <h2>여행지역 - <span style={{ color: 'purple' }}>부산</span></h2>
                        <h3>장소 - 해운대,아쿠아리움,해동용궁사,감천문화마을</h3>
                        <h3>여행시기 - 2014년 여름</h3>
                        <h3>여행 이동수단 - 기차</h3>
                        <div className={styles.sticky4}>
                            <div className={styles.textcontent}>
                                <p style={{ fontSize: 20, color: 'dimgrey', textAlign: 'center' }}>
                                    내일로 기차여행으로 갔던 마지막 여행지 부산!<br />
                                    해운대 밤바다의 아름다움, 오밀조밀한 감성이있는 감천마을, 맛있는 간식 씨앗호떡<br />
                                    또 너무나도 맛있던 돼지국밥과 냉채족발<br />
                                    그리고 보는 재미가 있었던 아쿠아리움과 엄청나게 웅장한 느낌을 주는 해동용궁사<br />

                                </p>
                            </div>
                            <div ref={addToimage} className={styles.ctimagebox}>
                                <img src={process.env.PUBLIC_URL + './image/busan/busan1.jpeg'} />
                            </div>
                            <div ref={addToimage} className={styles.ctimagebox}>
                                <img src={process.env.PUBLIC_URL + './image/busan/busan2.jpeg'} />
                            </div>
                            <div ref={addToimage} className={styles.ctimagebox}>
                                <img src={process.env.PUBLIC_URL + './image/busan/busan3.jpeg'} />
                            </div>
                            <div ref={addToimage} className={styles.ctimagebox}>
                                <img src={process.env.PUBLIC_URL + './image/busan/busan4.jpeg'} />
                            </div>
                            <div ref={addToimage} className={styles.ctimagebox}>
                                <img src={process.env.PUBLIC_URL + './image/busan/busan5.jpeg'} />
                            </div>
                            <div ref={addToimage} className={styles.ctimagebox}>
                                <img src={process.env.PUBLIC_URL + './image/busan/busan6.jpeg'} />
                            </div>
                            <div ref={addToimage} className={styles.ctimagebox}>
                                <img src={process.env.PUBLIC_URL + './image/busan/busan7.jpeg'} />
                            </div>
                        </div>
                        <div style={{
                            display: 'flex',
                            marginTop: '200px',
                            alignItems: 'center',
                            padding: '10px'

                        }}>
                            <img className={styles.cuteimg1} style={{ cursor: 'pointer' }} onClick={() => { gotoTop() }} src={process.env.PUBLIC_URL + 'cute1.png'} width={100} height={100} />
                            <p>←맨위로!</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

function Japan1() {

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
        let opa3 = (-2 / 610) * y + (4660 / 590)
        let opa4 = (-2 / 620) * y + (5660 / 590)
        let sca = (-0.05 / 590) * y + (600 / 590)
        let sca1 = (-0.05 / 600) * y + (636.5 / 600)
        let sca2 = (-0.05 / 610) * y + (663 / 610)
        let sca3 = (-0.05 / 620) * y + (690 / 620)
        let sca4 = (-0.05 / 630) * y + (730 / 630)
        stimage[0].style.opacity = opa
        stimage[0].style.transform = `scale(${sca})`
        stimage[1].style.opacity = opa1
        stimage[1].style.transform = `scale(${sca1})`
        stimage[2].style.opacity = opa2
        stimage[2].style.transform = `scale(${sca2})`
        stimage[3].style.opacity = opa3
        stimage[3].style.transform = `scale(${sca3})`
        stimage[4].style.opacity = opa4
        stimage[4].style.transform = `scale(${sca4})`

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
                        <h2>여행지역 - <span style={{ color: 'purple' }}>일본</span></h2>
                        <h3>장소 - 후쿠오카</h3>
                        <h3>여행시기 - 2020년 2월</h3>
                        <h3>여행 이동수단 - 비행기,도보</h3>
                        <div className={styles.sticky4}>
                            <div className={styles.textcontent}>
                                <p style={{ fontSize: 20, color: 'dimgrey', textAlign: 'center' }}>
                                    첫 직장에 입사하기 전 남는시간동안 갔던 여행<br />
                                    처음 가보는 그것도 혼자서 가는 첫 해외 여행이였기에 매우 떨린마음 으로 갔습니다<br />
                                    막상 가본 일본은 너무나도 좋은곳이였습니다.<br />
                                    사람들도 매우 친절했으며 외국인의 편의를 위해 많은것이 준비되어있었고<br />
                                    거리는 매우깨끗했으며, 식당은 어딜가도 맛있었습니다.
                                </p>
                            </div>
                            <div ref={addToimage} className={styles.ctimagebox}>
                                <img src={process.env.PUBLIC_URL + './image/japan/japan1.jpg'} />
                            </div>
                            <div ref={addToimage} className={styles.ctimagebox}>
                                <img src={process.env.PUBLIC_URL + './image/japan/japan2.jpg'} />
                            </div>
                            <div ref={addToimage} className={styles.ctimagebox}>
                                <img src={process.env.PUBLIC_URL + './image/japan/japan3.jpg'} />
                            </div>
                            <div ref={addToimage} className={styles.ctimagebox}>
                                <img src={process.env.PUBLIC_URL + './image/japan/japan4.jpg'} />
                            </div>
                            <div ref={addToimage} className={styles.ctimagebox}>
                                <img src={process.env.PUBLIC_URL + './image/japan/japan5.jpg'} />
                            </div>
                            <div ref={addToimage} className={styles.ctimagebox}>
                                <img src={process.env.PUBLIC_URL + './image/japan/japan6.jpg'} />
                            </div>
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