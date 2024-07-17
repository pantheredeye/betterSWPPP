import { Router, Route, Set, PrivateSet } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

import MainLayout from 'src/layouts/MainLayout/MainLayout'

import { useAuth } from './auth'
import AuthenticatedLayout from './layouts/AuthenticatedLayout/AuthenticatedLayout'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Set wrap={ScaffoldLayout} title="Tests" titleTo="tests" buttonLabel="New Test" buttonTo="newTest">
        <Route path="/tests/new" page={TestNewTestPage} name="newTest" />
        <Route path="/tests/{id:Int}/edit" page={TestEditTestPage} name="editTest" />
        <Route path="/tests/{id:Int}" page={TestTestPage} name="test" />
        <Route path="/tests" page={TestTestsPage} name="tests" />
      </Set>
      <Set wrap={MainLayout}>
        <Route path="/" page={HomePage} name="home" />
        <Route path="/login" page={LoginPage} name="login" />
        <Route path="/signup" page={SignupPage} name="signup" />
        <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
        <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      </Set>
      <PrivateSet unauthenticated="login" wrap={AuthenticatedLayout}>
        <Route path="/new-inspection" page={NewInspectionPage} name="newInspection" />
        <Route path="/new-site" page={NewSitePage} name="newSite" />
        <Route path="/standard-bmp-settings" page={StandardBMPSettingsPage} name="standardBmpSettings" />
        <Route path="/dashboard" page={DashboardPage} name="dashboard" />
      </PrivateSet>

      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
