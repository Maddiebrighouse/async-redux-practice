import React from 'react'

const Post = ({ post }) => {
  return (
    <div>
      <a href={post.url}> <b>{post.title}</b></a>
      {post.selftext}

    </div>  
  )
}

export default Post
