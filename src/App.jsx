import { BrowserRouter, Outlet, Route, Routes } from 'react-router'
import Home from './pages/Home'
import EventDetails from './pages/EventDetails'
import CreateEvent from './pages/CreateEvent'

// Layout is intentionally thin: Bernd's feature-navBar branch adds <Navbar />
// here (above <Outlet />) plus MainLayout/ProtectedLayout per PLANNING.md.
// Coordinate merge order in stand-up — whoever merges second resolves this
// one-line conflict.
function Layout() {
  return (
    <>
      <Outlet />
    </>
  )
}

// TODO(Bernd): replace with real src/pages/SignIn.jsx once it exists.
function SignInPlaceholder() {
  return <div className="container mx-auto p-4">Sign in page — Bernd's branch, comming soon.</div>
}

// TODO(Bernd): replace with real src/pages/SignUp.jsx once it exists.
function SignUpPlaceholder() {
  return <div className="container mx-auto p-4">Sign up page — Bernd's branch, comming soon.</div>
} 

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="events/:id" element={<EventDetails />} />
          <Route path="events/new" element={<CreateEvent />} />
          <Route path="signin" element={<SignInPlaceholder />} />
          <Route path="signup" element={<SignUpPlaceholder />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
