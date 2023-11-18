// Import Routes & Route
import { Routes, Route } from 'react-router-dom'

// Import Global CSS Styles
import './global.css'

// Import Route Elements
import SigninForm from './_auth/fooms/SigninForm'
import SignupForm from './_auth/fooms/SignupForm'
import { Home } from './_root/pages'

// Import Route Layout
import AuthLayout from './_auth/AuthLayout'
import RootLayout from './_root/RootLayout'

const App = () => {
  return (
    <main className='flex h-screen'>
      <Routes>
        {/* Public Routes */}
        <Route element={<AuthLayout />}>
          <Route path='/sign-in' element={<SigninForm />} />
          <Route path='/sign-up' element={<SignupForm />} />
        </Route>

        {/* Private Routes */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </main>
  )
}

export default App