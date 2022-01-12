import usersReducer, { actions, initialStateType } from "./UsersReducer"

let states:initialStateType;
beforeEach(() => {  
  states = {
  users: [
    { id:0, name:'filps', followed:false, photos:{small:null, large:null}, status:'status0' },
    {
      id:1, name:'2', followed:false, photos:{small:null, large:null}, status:'status02'
    },
    {
      id:2, name:'3', followed:true, photos:{small:null, large:null}, status:"status03"
    },
    {
      id:3, name:'4', followed:true, photos:{small:null, large:null}, status:"status04"
    },
  ],
  pageSize: 5,
  totalUserCount: 0,
  currentPage: 5,
  isFetching: false,
  processing: [],
  filter: {
    term:'',
    friend:null as null | boolean
}
}})

test("follow success", () => {
  const newStates = usersReducer(states, actions.acceptfollow(1))
  expect(newStates.users[0].followed).toBeFalsy();
  expect(newStates.users[1].followed).toBeTruthy();
})
test("unfollow success", () => {
  let newState = usersReducer(states, actions.acceptunfollow(3))
  expect(newState.users[0].followed).toBeTruthy();
  expect(newState.users[1].followed).toBeFalsy();
})