import React from "react"
import styles from "./preloader.module.css"

let Preloader: React.FC = () => {
    return <div>
        <div className={styles.lds_hourglass} />
    </div>
}
export default Preloader    