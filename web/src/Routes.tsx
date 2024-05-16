import { Router, Route, Set } from '@redwoodjs/router'

import MainLayout from 'src/layouts/MainLayout/MainLayout'
import ForgotPasswordPage from 'src/pages/ForgotPasswordPage/ForgotPasswordPage'
import HomePage from 'src/pages/HomePage/HomePage'
import LoginPage from 'src/pages/LoginPage/LoginPage'
import NotFoundPage from 'src/pages/NotFoundPage/NotFoundPage'
import ResetPasswordPage from 'src/pages/ResetPasswordPage/ResetPasswordPage'
import SignupPage from 'src/pages/SignupPage/SignupPage'

import { useAuth } from './auth'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Set wrap={MainLayout}>
        <Route path="/" page={HomePage} name="home" />
        <Route path="/home" page={HomePage} name="home" />
        <Route path="/login" page={LoginPage} name="login" />
        <Route path="/signup" page={SignupPage} name="signup" />
        <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
        <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
