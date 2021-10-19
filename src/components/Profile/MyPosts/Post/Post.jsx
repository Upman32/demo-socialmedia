import classes from './Post.module.css'


const Post = (props) => {


    return (

        <div className={classes.item}>
            <img src='https://static.wikia.nocookie.net/wowpedia/images/d/d1/Peon_face_WC3.jpg'
             alt='LogoImage' />
            {props.message}
            <div>
                <span>like</span> {props.likecounts}
            </div>


        </div>
    )

}
export default Post