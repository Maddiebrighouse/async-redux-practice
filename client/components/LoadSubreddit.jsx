import React from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'

class LoadSubreddit extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      subreddi: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleClick (e) {
    this.props.dispatch(fetchPosts(this.state.subreddi))
  }

  render () {
    return (
      < div >
        <input onChange={this.handleChange} name='subreddi' />
        <button onClick={this.handleClick}>Fetch Posts</button>
      </div >
    )
  }
}

// when clicked LoadSubreddit is fired and passes dispatch(fetchPosts `which is in action index`)
export default connect()(LoadSubreddit)
