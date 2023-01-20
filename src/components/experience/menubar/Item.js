import { motion } from "framer-motion";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeJob, changeTravel, changeSchool, changeList } from "../../../store";
import "./menust.css";






const variants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 }
        }
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 }
        }
    }
};

// let job = useSelector((state)=>{return state.expjob})


const colors = ["cornflowerblue", "blue", "violet", "brown"]
const fontcolors = ["brown", "cornflowerblue", "blue", "violet"]
const textdata = ["Exp-Job", "Exp-Travel", "Exp-School", "Return to list"]
// const navidata = [`${}`]

export const MenuItem = ({ i }) => {
    const navigate = useNavigate()
    let exp = useSelector((state) => { return state.expjob })
    let dispatch = useDispatch()
    useEffect(() => {



        if (exp[3] == 1) {
            navigate('/list')
        }

    })

    function explist(i) {
        if (i == 0) {
            dispatch(changeJob(1))
            dispatch(changeTravel(0))
            dispatch(changeSchool(0))
        } else if (i == 1) {
            dispatch(changeTravel(1))
            dispatch(changeJob(0))
            dispatch(changeSchool(0))
        } else if (i == 2) {
            dispatch(changeSchool(1))
            dispatch(changeJob(0))
            dispatch(changeTravel(0))
        } else if (i == 3) {
            dispatch(changeList(1))
            dispatch(changeTravel(0))
            dispatch(changeJob(0))
            dispatch(changeSchool(0))
        }
    };


    const style = {
        border: `2px solid ${colors[i]}`
    };
    const style1 = {
        color: `${fontcolors[i]}`
    }




    return (
        <motion.li
            variants={variants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
            <div className="placeholder-i" style={style}></div>
            <div className="placeholder-t" style={style1}>
                <span onClick={() => { explist(i) }}>{textdata[i]}</span>
            </div>
        </motion.li>
    )
}