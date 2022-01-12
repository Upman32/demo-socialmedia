
import profileReducer, { actions } from "./ProfileReducer";

it('length is more', () => {
    let action = actions.addPostActionCreator("yo-da-yo")


    let state = {
        posts: [
            { id: 1, message: 'hr', likecounts: 453 },
            { id: 2, message: 'dkr', likecounts: 332 },
            { id: 3, message: 'dar', likecounts: 151 },
            { id: 4, message: 'er', likecounts: 263 },
            { id: 5, message: 'fer', likecounts: 53 }
        ],
    profile: null,
    status: "",
    newPostText: ''
    }


    let newState = profileReducer(state, action)
    expect (newState.posts.length).toBe(6)

})