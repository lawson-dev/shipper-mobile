/**
 * @module Actions/User
 * @desc User Actions
 */
import { createActions } from 'redux-actions'

import { ActionTypes } from 'redux/constants/authetication'

export const { userLogin: login, userLogout: logout, userSignup: signup, tokenCheck } = createActions({
  [ActionTypes.USER_LOGIN]: (email,password) => ({email, password}),

  [ActionTypes.USER_LOGOUT]: () => ({}),

  [ActionTypes.USER_SIGNUP]: (dataSignup) => ({data: dataSignup}),
  
  [ActionTypes.TOKEN_CHECK]:(token) => ({token}),

})
