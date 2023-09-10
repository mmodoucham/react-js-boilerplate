import React from 'react'
import Layout from '../app/components/Layout'
import Home from '../app/pages/Home'
import Login from '../app/pages/Login'
import Register from '../app/pages/Register'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from '../app/pages/404'

const AppRoutes: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route
        element={
          <Layout>
            <Home />
          </Layout>
        }
        path='/'
      />
      <Route
        element={
          <Layout>
            <Login />
          </Layout>
        }
        path='/login'
      />
      <Route
        element={
          <Layout>
            <Register />
          </Layout>
        }
        path='/register'
      />
      <Route
        element={
          <Layout>
            <NotFound />
          </Layout>
        }
        path='*'
      />
    </Routes>
  </BrowserRouter>
)

export default AppRoutes
