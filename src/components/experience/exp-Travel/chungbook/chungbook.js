import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import x1 from '../x1.png'
import styles from '../location.module.css'
import { travelcb, travelcn, travelgwdo, turntvgo } from '../../../../store'
import { Traveltextani } from '../Travel'




function Chungbook() {

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


    let locarate = [{ 지역명: "단양", 만족도: 7 }]

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
                                    dispatch(turntvgo(parseInt(`${i}`) + 8))
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
                            dispatch(travelcb(0))
                        }} src={x1} width='25' className={styles.xrote} />
                        <Traveltextani />

                    </div>
                </div>
            </motion.div>
            {tvgo == 8 ? <Chungbook1 /> : false}
        </>
    )
}

export default Chungbook

function Chungbook1() {

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
        let sca = (-0.05 / 590) * y + (590.05 / 590)
        let sca1 = (-0.05 / 600) * y + (636.5 / 600)
        let sca2 = (-0.05 / 610) * y + (663 / 610)
        let sca3 = (-0.05 / 620) * y + (690 / 610)
        stimage[0].style.opacity = opa
        stimage[0].style.transform = `scale(${sca})`
        stimage[1].style.opacity = opa1
        stimage[1].style.transform = `scale(${sca1})`
        // stimage[2].style.opacity = opa2
        // stimage[2].style.transform = `scale(${sca2})`
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
                        <h2>여행지역 - <span style={{ color: 'blue' }}>단양</span></h2>
                        <h3>장소 - 도담삼봉,패러글라이딩</h3>
                        <h3>여행시기 - 2015년 봄</h3>
                        <h3>여행 이동수단 - 자차</h3>
                        <div className={styles.sticky1}>
                            <div className={styles.textcontent}>
                                <p style={{ fontSize: 20, color: 'dimgrey', textAlign: 'center' }}>
                                    입대 전 마지막으로 갔던 여행지<br />
                                    도담삼봉의 풍경은 절경이였고<br />
                                    그 도담삼봉을 품고 있는 강에서의 제트보트 또한 너무 재밌었습니다.<br />
                                    하지만 패러글라이딩은 고소공포증이 있는 사람으로서<br />
                                    그저 공포였던 기억이..ㅠ
                                </p>
                            </div>
                            <div ref={addToimage} className={styles.ctimagebox}>
                                <img src={process.env.PUBLIC_URL + './image/danyang/danyang1.jpg'} />
                            </div>
                            <div ref={addToimage} className={styles.ctimagebox}>
                                <img src={process.env.PUBLIC_URL + './image/danyang/danyang2.png'} />
                            </div>
                            <div ref={addToimage} className={styles.ctimagebox}>
                                <img src={process.env.PUBLIC_URL + './image/danyang/danyang3.png'} />
                            </div>
                            {/* <div ref={addToimage} className={styles.ctimagebox}>
                                <img src={process.env.PUBLIC_URL + './image/asan/asan4.jpeg'} />
                            </div>
                            <div ref={addToimage} className={styles.ctimagebox}>
                                <img src={process.env.PUBLIC_URL + './image/asan/asan5.jpeg'} />
                            </div> */}
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