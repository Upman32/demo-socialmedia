import { ResponseType, ResultCodeEnum, usersAPI } from "../../API/API";
import { actions, follow } from "./UsersReducer"

jest.mock("../../API/API")
const usersAPImock = usersAPI as jest.Mocked<typeof usersAPI>

const result: ResponseType = {
  resultCode: ResultCodeEnum.Success,
  messages:[],
  data:{}
}
usersAPImock.follow.mockReturnValue(Promise.resolve(result))
beforeEach(() => {
  //mockclear
})
test("", async () => {
    
  const thunk = follow(3);
  const dispatchMock = jest.fn();
  const getStateMock = jest.fn();

  await thunk(dispatchMock, getStateMock, {})
  expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.toggleisProcessing(true, 3))
  expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.acceptfollow(3))
  expect(dispatchMock).toHaveBeenNthCalledWith(3, actions.toggleisProcessing(false, 3))
})