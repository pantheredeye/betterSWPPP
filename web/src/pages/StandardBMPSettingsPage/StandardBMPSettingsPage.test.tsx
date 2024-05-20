import { render } from '@redwoodjs/testing/web'

import StandardBmpSettingsPage from './StandardBmpSettingsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('StandardBmpSettingsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StandardBmpSettingsPage />)
    }).not.toThrow()
  })
})
