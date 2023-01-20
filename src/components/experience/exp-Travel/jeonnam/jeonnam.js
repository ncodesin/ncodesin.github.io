import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import x1 from '../x1.png'
import styles from '../location.module.css'
import { traveljn, turntvgo } from '../../../../store'
import { css } from 'jquery'
import { Traveltextani } from '../Travel'



function Jeonnam() {

    const windowboxRef = useRef(null)

    let tvgo = useSelector((state) => { return state.travelgo })


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


    let locarate = [{ 지역명: "여수", 만족도: 6 }, { 지역명: "순천", 만족도: 9 }]

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
                                    dispatch(turntvgo(parseInt(`${i}`) + 10))
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
                            dispatch(traveljn(0))
                        }} src={x1} width='25' className={styles.xrote} />
                        <Traveltextani />
                    </div>
                </div>
            </motion.div>
            {tvgo == 10 ? <Jeonnam1 /> : false}
            {tvgo == 11 ? <Jeonnam2 /> : false}
        </>
    )
}

export default Jeonnam

function Jeonnam1() {

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
                        <h2>여행지역 - <span style={{ color: 'lightgreen' }}>여수</span></h2>
                        <h3>장소 - 여수엑스포,게장거리</h3>
                        <h3>여행시기 - 2014년 여름</h3>
                        <h3>여행 이동수단 - 기차</h3>
                        <div className={styles.sticky2}>
                            <div className={styles.textcontent}>
                                <p style={{ fontSize: 20, color: 'dimgrey', textAlign: 'center' }}>
                                    내일로 기차여행으로 갔던 두번째 여행지 여수!<br />
                                    자차없이 돌아다니기는 힘든 여행지여서 이곳저곳을 가보지는 못했지만 <br />
                                    바다풍경은 아름다웠고<br />
                                    특히나 여수 게장은 정말 너무너무너무너무너~~~무 맛있었습니다<br />
                                </p>
                            </div>
                            <div ref={addToimage} className={styles.ctimagebox}>
                                <img src={process.env.PUBLIC_URL + './image/yeosoo/yeosoo.jpeg'} />
                            </div>
                            <div ref={addToimage} className={styles.ctimagebox}>
                                <img src={process.env.PUBLIC_URL + './image/yeosoo/yeosoo2.jpeg'} />
                            </div>
                            <div ref={addToimage} className={styles.ctimagebox}>
                                <img src={process.env.PUBLIC_URL + './image/yeosoo/yeosoo3.jpeg'} />
                            </div>
                            <div ref={addToimage} className={styles.ctimagebox}>
                                <img src={process.env.PUBLIC_URL + './image/yeosoo/yeosoo4.jpeg'} />
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
                            <img className={styles.cuteimg1} style={{ cursor: 'pointer' }} onClick={() => { gotoTop() }} src={process.env.PUBLIC_URL + 'cute5.png'} width={100} height={100} />
                            <p>←맨위로!</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

function Jeonnam2() {

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
                        <h2>여행지역 - <span style={{ color: 'lightgreen' }}>순천</span></h2>
                        <h3>장소 - 순천만정원</h3>
                        <h3>여행시기 - 2014년 여름</h3>
                        <h3>여행 이동수단 - 기차</h3>
                        <div className={styles.sticky3}>
                            <div className={styles.textcontent}>
                                <p style={{ fontSize: 20, color: 'dimgrey', textAlign: 'center' }}>
                                    내일로 기차여행으로 갔던 세번째 여행지 순천!<br />
                                    순천여행은 순천으로 가던 기차에서 바라보던 풍경, 역의모습<br />
                                    그런것들이 잔상처럼 기억에 남습니다<br />
                                    순천만 정원은 제가 살면서 다녀본 정원이나 수목원같은 여행지중에서 최고였으며<br />
                                    어딜가도 눈에들어오는 정적이고 정겨운 풍경들이 너무 마음에 들었습니다.<br />
                                    아무곳이나 찾아들어갔던 식당도 너무 맛있었습니다!
                                </p>
                            </div>
                            <div ref={addToimage} className={styles.ctimagebox}>
                                <img src={process.env.PUBLIC_URL + './image/soonchun/soonchun1.jpg'} />
                            </div>
                            <div ref={addToimage} className={styles.ctimagebox}>
                                <img src={process.env.PUBLIC_URL + './image/soonchun/soonchun2.jpg'} />
                            </div>
                            <div ref={addToimage} className={styles.ctimagebox}>
                                <img src={process.env.PUBLIC_URL + './image/soonchun/soonchun3.jpg'} />
                            </div>
                            <div ref={addToimage} className={styles.ctimagebox}>
                                <img src={process.env.PUBLIC_URL + './image/soonchun/soonchun4.jpg'} />
                            </div>
                            <div ref={addToimage} className={styles.ctimagebox}>
                                <img src={process.env.PUBLIC_URL + './image/soonchun/soonchun5.jpg'} />
                            </div>
                            <div ref={addToimage} className={styles.ctimagebox}>
                                <img src={process.env.PUBLIC_URL + './image/soonchun/soonchun6.jpeg'} />
                            </div>
                        </div>
                        <div style={{
                            display: 'flex',
                            marginTop: '200px',
                            alignItems: 'center',
                            padding: '10px'

                        }}>
                            <img className={styles.cuteimg1} style={{ cursor: 'pointer' }} onClick={() => { gotoTop() }} src={process.env.PUBLIC_URL + 'cute6.png'} width={100} height={100} />
                            <p>←맨위로!</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}