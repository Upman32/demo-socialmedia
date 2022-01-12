
import React from 'react'
import { useSelector } from 'react-redux'
import Preloader from '../common/preloader'
import { getisFetching } from '../redux/user-selectors'
import { WithAuthRedirectUsers } from './Users'

type UsersPagePropstype = {

}
export const UsersPage: React.FC<UsersPagePropstype> = (props) => {
  const isFetching = useSelector(getisFetching)
  return <>
    {isFetching ? <Preloader /> : null}
    <WithAuthRedirectUsers /></>
}


