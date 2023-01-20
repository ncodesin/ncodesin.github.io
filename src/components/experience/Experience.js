import { motion } from "framer-motion";
import { nodeName } from "jquery";
import * as React from "react"
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeJob } from "../../store";
import Job from "./exp-Job/Job";
import School from "./exp-School/School";
import { Travel } from "./exp-Travel/Travel";
import styles from './Experience.module.css'
import { Example } from "./menubar/Menubar";



function Experience() {

    let job = useSelector((state) => { return state.expjob })

    console.log(job)

    return (
        <>
            {/* <span style={{ color: 'white' }}>슈발</span> */}
            <div className={styles.page}>

                {job[0] == 1 ? <Job /> : false}
                {job[1] == 1 ? <Travel /> : false}
                {job[2] == 1 ? <School /> : false}
            </div>
            <Example className={styles.button} />
        </>
    )
}

export default Experience;