import { Router, Route, Set, PrivateSet } from '@redwoodjs/router'

import MainLayout from 'src/layouts/MainLayout/MainLayout'

import { useAuth } from './auth'
import AuthenticatedLayout from './layouts/AuthenticatedLayout/AuthenticatedLayout'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Set wrap={MainLayout}>
        <Route path="/" page={HomePage} name="home" />
        <Route path="/login" page={LoginPage} name="login" />
        <Route path="/signup" page={SignupPage} name="signup" />
        <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
        <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      </Set>
      <PrivateSet unauthenticated="login" wrap={AuthenticatedLayout}>
        <Route path="/dashboard" page={DashboardPage} name="dashboard" />
        {/* <Route path="/inspections" page={InspectionsPage} name="inspections" x />
        <Route path="/sites" page={SitesPage} name="sites" />
        <Route path="/bmps" page={BmpsPage} name="bmps" />
        <Route path="/settings" page={SettingsPage} name="settings" /> */}
      </PrivateSet>

      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
