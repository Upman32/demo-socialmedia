
import { actions } from "../../redux/ProfileReducer";
import MyPostsMemo, { PropsDispatchPoststype, PropsPoststype } from "./MyPosts";
import { connect } from 'react-redux'
import { AppstateType } from "../../redux/reduxs";

let mapsStateToProps = (state: AppstateType) => {
    return {
        posts: state.profilePage.posts,
    }
}


const MyPostsContainer = connect<PropsPoststype, PropsDispatchPoststype, {}, AppstateType>
    (mapsStateToProps, { addPost: actions.addPostActionCreator })(MyPostsMemo);

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
