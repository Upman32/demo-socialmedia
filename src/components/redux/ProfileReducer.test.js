import profileReducer, { addPostActionCreator } from "./ProfileReducer";

it('length is more', () => {
    let action = addPostActionCreator("yo-da-yo")


    let state = {

        posts: [
            { id: 1, message: 'hohohohoho', likecounts: 453 },
            { id: 2, message: 'jaajajajajajja', likecounts: 332 },
            { id: 3, message: 'jaajajajajajja', likecounts: 151 },
            { id: 4, message: 'jaajajajajajja', likecounts: 263 },
            { id: 5, message: 'jaajajajajajja', likecounts: 53 }
        ],
    }



    let newState = profileReducer(state, action)
    expect (newState.posts.length).toBe(5)

})