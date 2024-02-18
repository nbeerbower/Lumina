import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Layout from './layout/Layout'
import Home from '../pages/Home'
import Inference from '../pages/Inference'
import Quantization from '../pages/Quantization'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'inference',
        element: <Inference />,
      },
      {
        path: 'quantization',
        element: <Quantization />,
      },
    ],
  }
])

function Router() {
  return (
    <RouterProvider router={router} />
  )
}

export default Router
