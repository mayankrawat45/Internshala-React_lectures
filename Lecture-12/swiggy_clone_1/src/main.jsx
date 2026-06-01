import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Offer from './components/Offer.jsx'
import Help from './components/Help.jsx'
import Signin from './components/Signin.jsx'
import Body from './components/Body.jsx'
import Cart from './components/Cart.jsx'

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/offer",
        element: <Offer />
      },
      {
        path: "/help",
        element: <Help />
      },
      {
        path: "/signin",
        element: <Signin />
      },
      {
        path: "/cart",
        element: <Cart />
      },
    ]
  },

])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter} />
)
