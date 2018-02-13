import {combineReducers} from 'redux'

import errorMessage from './error-message'
import subreddits from './subreddits'
import waiting from './waiting'

export default combineReducers({ // passes all our functions to the redux
  errorMessage,
  subreddits,
  waiting
})

