import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import LoginPage from './pages/login.jsx'
import RegisterPage from './pages/register.jsx'
import ErrorPage from './pages/404.jsx'
import ProductPage from './pages/product.jsx'
import Profile from './pages/profile.jsx'
import DetailProductPage from './pages/detail_product.jsx'
import { Provider } from 'react-redux'
import store from './redux/store'
import DarkModeContextProvider from './context/darkmode.jsx'
import { TotalPriceProvider } from './context/totalprice.jsx'


const router = createBrowserRouter([
  {
    path:"/",
    element: <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis, deleniti.</div>,
    errorElement: <ErrorPage/>,
  },
  {
    path:"/login",
    element: <LoginPage/>,
  },
  {
    path:"/register",
    element: <RegisterPage/>
  },
  {
    path:"/products",
    element: <ProductPage/>
  },
  {
    path:"/profile",
    element: <Profile/>
  },
  {
    path:"/product/:id",
    element: <DetailProductPage/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <DarkModeContextProvider>
        <TotalPriceProvider>
          <RouterProvider router={router}/> 
        </TotalPriceProvider>
      </DarkModeContextProvider>
    </Provider>
  </React.StrictMode>
)
