import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Root from './components/Root'
import Home from './components/home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Blog from './components/blog/Blog'
import ErrorPage from './components/errorPage/ErrorPage'
import Statistics from './components/statistics/Statistics'
import JobDetails from './components/featureJobs/JobDetails'
import AppliedJobs from './components/appliedJobs/AppliedJobs'



const router = createBrowserRouter([
  {
    path:"/",
    element:<Root/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:"/",
        element:<Home/>,
      },
      {
        path:"/job/:detailsId",
        element:<JobDetails/>,
        loader: ()=>fetch(`/jobs.json`)
      },
      {
        path:"statistics",
        element:<Statistics/>
      },
      {
        path:"/applied-jobs",
        element:<AppliedJobs/>,
        loader: ()=>fetch(`/jobs.json`)
      },
      {
        path:"/blog",
        element:<Blog/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>,
)
