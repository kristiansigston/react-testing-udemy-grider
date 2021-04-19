import { shallow } from 'enzyme'
import React from 'react'
import { render, screen } from '@testing-library/react'

import App from '.'
import CommentBox from 'components/comment_box/'
import CommentList from 'components/comment_list/'

describe('internal components', () => {
  let wrapped

  beforeEach(() => {
    wrapped = shallow(<App />)
  })

  it('shows a comment box', () => {
    expect(wrapped.contains(<CommentBox />)).toBe(true)
    expect(wrapped.find(CommentBox).length).toBe(1)
  })
  it('shows a comment list ', () => {
    expect(wrapped.contains(<CommentList />)).toBe(true)
  })
})
