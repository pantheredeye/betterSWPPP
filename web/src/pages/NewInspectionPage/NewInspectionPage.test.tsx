import { render } from '@redwoodjs/testing/web'

import NewInspectionPage from './NewInspectionPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('NewInspectionPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NewInspectionPage />)
    }).not.toThrow()
  })
})
