import { render } from '@redwoodjs/testing/web'

import InspectionPdf from './InspectionPdf'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('InspectionPdf', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<InspectionPdf />)
    }).not.toThrow()
  })
})
