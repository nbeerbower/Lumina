import { createBrowserRouter } from 'react-router-dom'

import Home from './pages/Home'
import Inference from './pages/Inference'
import Quantization from './pages/Quantization'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/inference',
    element: <Inference />,
  },
  {
    path: '/quantization',
    element: <Quantization />,
  },
])

export default router