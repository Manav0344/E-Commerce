import './App.css'
import { createHashRouter, RouterProvider, Outlet } from 'react-router-dom';
import Header from './common/Header'
import Footer from './common/Footer';
import Home from './Components/Home';
import ProductDetails from './Components/ProductDetails';

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

function App() {
  const router = createHashRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/product/:id',
          element: <ProductDetails />
        }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
