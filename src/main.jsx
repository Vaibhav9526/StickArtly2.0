import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
// import Navbar from './components/navbar.jsx'
import Home from './components/Home.jsx'
import Error from './components/Error.jsx'
import './index.css'
import App from './App.jsx'
import Docs from './components/Docs.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <><Navbar/><Home/></>,
  },
  {
    path: "*",
    element: <><Navbar/><Error/></>,
  },
  // {
  //   path: "Docs",
  //   element: <><Navbar/><Docs/></>,
  // },
])

createRoot(document.getElementById('root')).render(
  <>
  <StrictMode>
  
    <App />
    <RouterProvider router={router}/>

  </StrictMode>,
  </>
)
