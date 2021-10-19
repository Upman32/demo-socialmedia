import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { MaxLengthCreator, RequiredField } from '../../../Utils/Validators'
import { Element } from '../../common/Forms_Control/Form_Control'
import classes from './MyPosts.module.css'
import Post from './Post/Post'



const MyPosts = React.memo(props => {

    let PostElements = props.posts.map(posting => <Post key={posting.id} message={posting.message} likecounts={posting.likecounts} />)


    let NewPostElement = React.createRef();



    let Postadd = (values) => {

        props.addPost(values.newPostText)
    }


    return (
        <div className={classes.postsblock}>
            <h3>My posts</h3>
            <AddPostFormRedux onSubmit={Postadd} />
            <div className={classes.posts}>
                {PostElements}
            </div>
        </div>)

})
let maxLength = MaxLengthCreator(10)

const Textarea = Element("textarea")

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>  <div>
            <Field component={Textarea} name="newPostText"
                placeholder='Enter some post' validate={[RequiredField, maxLength]} />
        </div>
            <div>
                <button>Add Post</button>
            </div>
        </form>)
}
const AddPostFormRedux = reduxForm({
    form: 'Posts_AddPostForm'
})(AddPostForm)


export default MyPosts