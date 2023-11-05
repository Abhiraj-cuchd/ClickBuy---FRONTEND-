import { createBrowserRouter, RouterProvider, Route, Outlet } from 'react-router-dom';
import Home from './pages/Home/Home';
import Product from './pages/product/Product';
import Products from './pages/products/Products';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import OrderComplete from './pages/OrderComplete/orderComplete';
import './App.scss';
import { useEffect } from 'react';


const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children:[
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/products/:id",
        element: <Products />
      },
      {
        path: "/product/:id",
        element: <Product />
      },
      {
        path: "/order",
        element: <OrderComplete />
      }
    ]
  },
])

function App() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
  <div>
    <RouterProvider router={router} />
  </div>
 )
}

export default App;
