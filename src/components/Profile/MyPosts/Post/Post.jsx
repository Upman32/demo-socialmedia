import classes from './Post.module.css'


const Post = (props) => {


    return (
        
        <div className={classes.item}>
          <img src='https://i.pinimg.com/originals/50/ee/c4/50eec4082bceec8547dba21ddfc45326.jpg' alt='LogoImage' />
           {props.message} 
            <div>
                <span>like</span> {props.likecounts}
            </div>


        </div>
    )

}
export default Post