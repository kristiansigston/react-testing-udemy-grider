import React from 'react'
import moxios from 'moxios'
import { mount } from 'enzyme'
import Root from 'Root'

import App from 'components/app'

describe('App', () => {
  let wrapped

  beforeEach(() => {
    moxios.install()
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
      status: 200,
      response: [{ name: 'Fetch Number 1' }, { name: 'Fetch Number 2' }],
    })
    wrapped = mount(
      <Root>
        <App />
      </Root>
    )
  })

  afterEach(() => {
    moxios.uninstall()
  })

  it('can fetch a list of comments and display them', (done) => {
    wrapped.find('#fetch-comments').simulate('click')
    moxios.wait(() => {
      wrapped.update()
      expect(wrapped.find('li').length).toBe(2)
      done()
      wrapped.unmount()
    })
  })
})
