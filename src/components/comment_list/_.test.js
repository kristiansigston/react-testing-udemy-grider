import React from 'react'
import { mount, unmount } from 'enzyme'
import Root from 'Root'
import CommentList from 'components/comment_list'

describe('Comment List', () => {
  let wrapped
  let comments = ['Comment 1', 'Comment 2']
  beforeEach(() => {
    const initialState = { comments }
    wrapped = mount(
      <Root initialState={initialState}>
        <CommentList />
      </Root>
    )
  })

  it('creates one <li> per comment', () => {
    expect(wrapped.find('li').length).toBe(2)
  })

  comments.map((comment, index) => {
    it(`show the text for comment ${index + 1}`, () => {
      expect(wrapped.render().text()).toContain(comment)
    })
  })
})
