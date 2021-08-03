import React from "react"
import styles from "./preloader.module.css"

let Preloader = (props) => {
    return <div>
        <div className={styles.lds_hourglass} />
    </div>
}
export default Preloader    