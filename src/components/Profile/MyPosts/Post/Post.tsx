import React from 'react'
import { PostType } from '../../../../Types/types'
import classes from './Post.module.css'

 type Propstype = {
     message: string
     likecounts:number
 }
const Post: React.FC<Propstype> = (props) => {

    return (
        <div className={classes.item}>
            <img src='https://static.wikia.nocookie.net/wowpedia/images/d/d1/Peon_face_WC3.jpg'
             alt='LogoImage' />
            {props.message}
            <div className={classes.item}>
                <span className={classes.item}>like</span> {props.likecounts}
            </div>
        </div>
    )
}
export default Post