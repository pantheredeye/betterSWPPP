import { render } from '@redwoodjs/testing/web'

import AvailableBmPs from './AvailableBmPs'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AvailableBmPs', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AvailableBmPs />)
    }).not.toThrow()
  })
})
