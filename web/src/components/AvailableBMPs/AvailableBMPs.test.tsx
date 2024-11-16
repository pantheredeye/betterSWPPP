import { render } from '@redwoodjs/testing/web'

import AvailableBmps from './AvailableBmps'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AvailableBmps', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AvailableBmps />)
    }).not.toThrow()
  })
})
