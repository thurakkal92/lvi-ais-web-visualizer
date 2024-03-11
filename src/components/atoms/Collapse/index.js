import React from "react"
import { motion } from "framer-motion"

const collapseVariant = {
    open: { opacity: 1, height: "auto" },
    collapsed: { opacity: 0, height: 0 },
}

const Collapse = ({ pose, className, children, ...additionalProps }) => {
    return (
        <motion.div
            initial={"collapsed"}
            transition={{ linear: "linear" }}
            variants={collapseVariant}
            animate={pose}
            className={className}
            style={{ overflow: "hidden" }}
            {...additionalProps}
        >
            {children}
        </motion.div>
    )
}

export default Collapse
