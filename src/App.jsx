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

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="events/:id" element={<EventDetails />} />
          <Route path="events/new" element={<CreateEvent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
