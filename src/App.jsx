
import './App.css'
import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom';
import Header from './common/Header'
import Footer from './common/Footer';
import Home from './Components/Home';
import ProductList from './Components/ProductList';
import ProductDetails from './Components/ProductDetails';

const Layout = () => {
    return (
      <>
        <Header />
        <Outlet />
        <Footer/>
      </>
    )
  }


function App() {

  


  const router = createBrowserRouter([

    
    {
       path: '/',
       element: <Layout />,
       children: [
        {
          path: '/',
          element: <Home />
        },

        // {
        //   path: '/products',
        //   element: <ProductList />
        // },

        {
          path : "/product/:id",
          element: <ProductDetails />
        }
       ]
       
        
    }
  ])

  return (
    <>
      <RouterProvider router= {router} />
      
      
    </>
  )
}

export default App
