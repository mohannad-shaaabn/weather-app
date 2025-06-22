import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home'
import Layout from './components/Layout/Layout'
import News from './components/News/News'
import Livecameras from './components/Live cameras/Livecameras'
import Photos from './components/Photos/Photos'
import Contact from './components/Contact/Contact'

export default function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      _children: [
        { index: true, element: <Home /> },
        { path: "news", element: <News /> },
        { path: "livecameras", element: <Livecameras /> },
        { path: "photos", element: <Photos /> },
        { path: "contact", element: <Contact /> },
      ],
      get children() {
        return this._children
      },
      set children(value) {
        this._children = value
      },
    }
  ])
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}
