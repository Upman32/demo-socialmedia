
import { Field, Form, Formik } from 'formik'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { withAuthRedirect } from '../../HOC/withAuthRedirect'
import { getCurrentPage, getisProcessing, getPageSize, getUserCount, getUsersFilter, superpupers } from '../redux/user-selectors'
import { Filtertype, getUsers, follow, unfollow } from '../redux/UsersReducer'
import Paginator from './Paginator'
import User from './User'
import c from './users.module.css'


type PropsType = {

}

export const Users: React.FC<PropsType> = (props) => {
  const users = useSelector(superpupers)
  const totalUserCount = useSelector(getUserCount)
  const currentPage = useSelector(getCurrentPage)
  const pageSize = useSelector(getPageSize)
  const filter = useSelector(getUsersFilter)
  const processing = useSelector(getisProcessing)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUsers(currentPage, pageSize, filter))
  }, [])
  const onPageChanged = (pageNumber: number) => {
    dispatch(getUsers(pageNumber, pageSize, filter))
  }
  const onFilterChanged = (filter: Filtertype) => {
    dispatch(getUsers(1, pageSize, filter))
  }
  const followhandle = (userId: number) => {
    dispatch(follow(userId))
  }
  const unfollowhandle = (userId: number) => {
    dispatch(unfollow(userId))
    
  }
  return <div>
    <UsersSearchform onFilterChanged={onFilterChanged} />
    <Paginator currentPage={currentPage} onPostChanged={onPageChanged}
      totalUserCount={totalUserCount} pageSize={pageSize} />
    {users.map(u => <div className={c.user}> <User user={u}
      processing={processing}
      follow={followhandle}
      unfollow={unfollowhandle}
      key={u.id} /></div>
    )}
  </div>
}
const userSearchValidate = (values: any) => {
  const errors = {};
  return errors;
}
type Propstype = {
  onFilterChanged: (filter: Filtertype) => void
}
type FormType = {
  term: string
  friend: string
}
const UsersSearchform: React.FC<Propstype> = React.memo((props) => {
  const submit = (values: FormType, { setSubmitting }: { setSubmitting: (setSubmitting: boolean) => void }) => {
    const filter: Filtertype = {
      term: values.term,
      friend: values.friend === "null" ? null : values.friend === "true" ? true : false
    }
    props.onFilterChanged(filter)
    setSubmitting(false)
  }
  return <div>
    <Formik
      initialValues={{ term: '', friend: 'null' }}
      validate={userSearchValidate}
      onSubmit={submit}>

      {({ isSubmitting }) => (
        <Form>
          <Field type="text" name="term" />
          <Field as="select" name="friend">
            <option value="null">All </option>
            <option value="true">Only followed </option>
            <option value="false">Only unfollowed </option>
          </Field>
          <button type="submit" disabled={isSubmitting}>
            Find
          </button>
        </Form>
      )}
    </Formik>
  </div>
})

export const WithAuthRedirectUsers = withAuthRedirect(Users)