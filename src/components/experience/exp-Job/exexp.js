import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import { turnseoul } from '../../../store'
import x3 from './x3.png'
import x2 from './x2.png'
import styles from './asb.css'

function 복사용() {

    const windowboxRef = useRef(null)

    let dispatch = useDispatch()

    useEffect(() => {
        const wdbox = windowboxRef.current
        wdbox.style.width = window.innerWidth + 'px'
        wdbox.style.height = window.innerHeight + 'px'
        console.log(wdbox)
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
                    <div className={styles.contentbox}>
                        <img onClick={() => {
                            dispatch(turnseoul(0))
                        }} src={x2} width='25' className={styles.xrote} />
                        <p></p>
                    </div>
                </div>
            </motion.div>
        </>
    )
}