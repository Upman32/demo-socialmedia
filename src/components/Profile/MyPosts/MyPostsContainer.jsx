
import { addPostActionCreator } from "../../redux/ProfileReducer";
import MyPosts from "./MyPosts";
import {connect} from 'react-redux'








let mapsStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost:(newPostText) => {
            dispatch(addPostActionCreator(newPostText));
        }
    
    
    

    }
}


const MyPostsContainer = connect(mapsStateToProps, mapDispatchToProps)(MyPosts);



export default MyPostsContainer




























/* const MyPostsContainer = (props) => {
/*     let state = props.store.getState()
 */
   


    /* return (

        <StoreContext.Consumer>
             {
                 (store) => {
                   
                    let state = store.getState()


                    let addPost = () => {
                        store.dispatch(addPostActionCreator());
                    }
                
                
                
                    let onPostChange = (text) => {
                        let action = updateNewPostTextActionCreator(text)
                        store.dispatch(action)
                    }
           
           return  < MyPosts
                updateNewPostText={onPostChange}
                addPost={addPost}
                posts={state.profilePage.posts}
                newPostText={state.profilePage.newPostText}



            />}



            }
        </StoreContext.Consumer>
    )


} */ 
