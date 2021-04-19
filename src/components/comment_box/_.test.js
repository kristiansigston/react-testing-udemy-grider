import React from 'react'

import { mount } from 'enzyme'
import CommentBox from '.'
import Root from 'Root'

describe('Comment Box', () => {
  let wrapped

  beforeEach(() => {
    wrapped = mount(
      <Root>
        <CommentBox />
      </Root>
    )
  })

  afterEach(() => {
    wrapped.unmount()
  })

  it('has a text area', () => {
    expect(wrapped.find('textarea').length).toBe(1)
  })

  it('has a button', () => {
    expect(wrapped.find('button').length).toBe(2)
  })

  describe('textarea', () => {
    const event = {
      target: {
        value: 'Geoff',
      },
    }
    beforeEach(() => {
      wrapped.find('textarea').simulate('change', event)
    })

    it('has a text area that users can type into', () => {
      expect(wrapped.find('textarea').prop('value')).toBe(event.target.value)
    })

    it('clears the text area after submission', () => {
      expect(wrapped.find('textarea').prop('value')).toBe(event.target.value)
      wrapped.find('textarea').simulate('submit')
      expect(wrapped.find('textarea').prop('value')).toBe('')
    })
  })
})
