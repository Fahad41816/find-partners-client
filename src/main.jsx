import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './pages/Layout/Layout.jsx'
import Home from './pages/Home/Home.jsx'
import Detailspage from './pages/DetailsPage/Detailspage.jsx'


const routePath = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:'/',
        element: <Home/>
      },
      {
        path:"/details/:name",
        element:<Detailspage/>,
        loader: ({params}) => { return params} 
      }
    ]
  }
]) 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={routePath}/>
  </React.StrictMode>,
)
