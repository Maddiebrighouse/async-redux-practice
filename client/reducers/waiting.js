import {
  SHOW_ERROR,
  REQUEST_POSTS,
  RECEIVE_POSTS} from '../actions'

  
const waiting = (state = false, action) => {
  switch (action.type) {
    case REQUEST_POSTS: // when ture, waiting gif is fired 
      return true

    case RECEIVE_POSTS: // till post is received then back to false
      return false

    case SHOW_ERROR: // or if err is received or no data after 5 secs turn back to false
      return false

    default: // if none of the above return state
      return state
  }
}

export default waiting 
