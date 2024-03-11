import React from "react"
import classNames from "classnames"

import { normalizeSize } from "../../../utils"
import './skeleton.scss'

const Skeleton = props => {
    const styles = {
        width: normalizeSize(props.width),
        height: normalizeSize(props.height),
    }
    const classes = classNames(props.className, {
        skeleton: true,
        "has-shimmer": props.shimmer,
        "br-4": props.type === "rounded",
        "br-100": props.type === "circular",
    })

    return (
        <div className={classes} style={styles}>
            {props.children}
        </div>
    )
}

Skeleton.defaultProps = {
    children: null,
    className: "",
    height: "100",
    width: "100%",
    type: "block",
    shimmer: false,
}

Skeleton.displayName = "Skeleton"

export { Skeleton }
