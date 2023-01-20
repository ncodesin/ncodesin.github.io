import { motion } from "framer-motion";
import { MenuItem } from "./Item";
import "./menust.css"

const variants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
}


export const Navi = () => (
    <motion.ul variants={variants}>
        {itemlength.map(i => (
            <MenuItem i={i} key={i} />
        ))}
    </motion.ul>
)

const itemlength = [0, 1, 2, 3]