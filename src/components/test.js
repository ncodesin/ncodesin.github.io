import { gsap, Elastic } from "gsap";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from './test.module.css'
import { AnimatePresence, motion } from 'framer-motion'


function Test(params) {

    const one = useRef(null);
    const two = useRef(null);

    let navigate = useNavigate()


    useEffect(() => {
        let fromTween = gsap.from(one.current, {
            rotation: 360,
            duration: 2,
            repeat: -1,
            yoyo: true
        });

        let toTween = gsap.to(two.current, {
            rotation: 360,
            duration: 2,
            repeat: -1,
            yoyo: true,
            x: 500,
            ease: Elastic.easeOut.config(1, 0.1)
        });
    })


    return (
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

            <div ref={one} className={styles.box}>from</div>
            <div ref={two} className={styles.boxtwo}>to</div>
            <button onClick={() => {
                navigate('/main')
            }}>main</button>
        </motion.div>
    )
}

export default Test;