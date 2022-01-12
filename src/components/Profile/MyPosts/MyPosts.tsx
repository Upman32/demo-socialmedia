import React from 'react'
import { InjectedFormProps, reduxForm } from 'redux-form'
import { PostType } from '../../../Types/types'
import { RequiredField } from '../../../Utils/Validators/Validate'
import { Element, Form } from '../../common/Forms_Control/Form_Control'
import classes from './MyPosts.module.css'
import Post from './Post/Post'


export type PropsPoststype = {
    posts: Array<PostType>
}
export type PropsDispatchPoststype = {
    addPost: (newPostText: string) => void
}
const MyPosts: React.FC<PropsPoststype & PropsDispatchPoststype> = (props) => {

    let PostElements = props.posts.map(posting => <Post key={posting.id} message={posting.message} likecounts={posting.likecounts} />)
    let Postadd = (values: AddPostFormValues) => {
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

}
const MyPostsMemo = React.memo(MyPosts)
const Textarea = Element("textarea")
type PropsFormType = {}
export type AddPostFormValues = {
    newPostText: string
}
const AddPostForm: React.FC<InjectedFormProps<AddPostFormValues, PropsFormType> & PropsFormType> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                {Form("Your post", "newPostText", [RequiredField], Textarea)}
            </div>
            <div>
                <button>Add Post</button>
            </div>
        </form>)
}
const AddPostFormRedux = reduxForm<AddPostFormValues>({
    form: 'Posts_AddPostForm'
})(AddPostForm)


export default MyPostsMemo