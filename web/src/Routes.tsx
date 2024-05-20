import { Router, Route, Set, PrivateSet } from '@redwoodjs/router'

import MainLayout from 'src/layouts/MainLayout/MainLayout'

import { useAuth } from './auth'
import AuthenticatedLayout from './layouts/AuthenticatedLayout/AuthenticatedLayout'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Route path="/new-site" page={NewSitePage} name="newSite" />
      <Route path="/standard-bmp-settings" page={StandardBMPSettingsPage} name="standardBmpSettings" />
      <Set wrap={MainLayout}>
        <Route path="/" page={HomePage} name="home" />
        <Route path="/login" page={LoginPage} name="login" />
        <Route path="/signup" page={SignupPage} name="signup" />
        <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
        <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      </Set>
      <PrivateSet unauthenticated="login" wrap={AuthenticatedLayout}>
        <Route path="/dashboard" page={DashboardPage} name="dashboard" />
      </PrivateSet>

      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
