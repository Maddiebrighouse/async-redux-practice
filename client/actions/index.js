import request from 'superagent'

export const SHOW_ERROR = 'SHOW_ERROR'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const REQUEST_POSTS = 'REQUEST_POSTS'

// 2) which then calls requestPosts 
export const requestPosts = () => {
  return {
    type: REQUEST_POSTS
  }
}
// 4) when posts comes back map throught and find the data
export const receivePosts = (posts) => {
  return {
    type: RECEIVE_POSTS,
    posts: posts.map(post => post.data)
  }
}

// 3) if err then 
export const showError = (errorMessage) => {
  return {
    type: SHOW_ERROR,
    errorMessage: errorMessage
  }
}

// 1) First fetchPosts is fired 
export function fetchPosts (subreddit) {
  return (dispatch) => {
    dispatch(requestPosts())
    request
      .get(`/api/v1/reddit/subreddit/${subreddit}`)
      .end((err, res) => {
        if (err) {
          dispatch(showError(err.message))
          return
        }
        dispatch(receivePosts(res.body))
      })
  }
}


