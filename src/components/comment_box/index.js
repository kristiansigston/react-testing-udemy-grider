import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from 'actions'

class CommentBox extends Component {
  state = { comment: '' }

  handleChange = (event) => {
    this.setState({ comment: event.target.value })
  }
  handleSubmit = (event) => {
    event.preventDefault()

    this.props.saveComment(this.state.comment)

    this.setState({ comment: '' })
  }

  fetchComments = () => {}

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <h4>Add a comment</h4>
          <textarea
            value={this.state.comment}
            onChange={this.handleChange}
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <div>
            <button>Submit Content</button>
          </div>
        </form>
        <div>
          <button id="fetch-comments" onClick={this.props.fetchComments}>
            Fetch Comments
          </button>
        </div>
      </React.Fragment>
    )
  }
}

export default connect(null, actions)(CommentBox)
