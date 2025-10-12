import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import AppLayout from "./layouts/app-layout.jsx"
import Dashboard from './pages/dashboard.jsx'
import Auth from './pages/auth.jsx'
import Link from './pages/link.jsx'
import RedirectLink from './pages/redirect-link.jsx'
import LandingPage from './pages/landing'
import UrlProvider from './context'

const router = createBrowserRouter([
  {
    element:<AppLayout/>,
    children:[
      {
        path:'/',
        element:<LandingPage/>
      },
      {
        path:'/dashboard',
        element:<Dashboard/>
      },
      {
        path:'/auth',
        element:<Auth/>
      },
      {
        path:'/link/:id',
        element:<Link/>
      },
      {
        path:'/:id',
        element:<RedirectLink/>
      }
    ]
  }
])

function App() {
  return (
    <UrlProvider>
      <RouterProvider router={router}/>
    </UrlProvider>
  )
}

export default App


