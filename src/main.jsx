import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter,Route,createRoutesFromElements } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Layout from '../layout.jsx'
import Homepage from './components/homepage.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<Layout/>}/>
      <Route index element={<Homepage/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
