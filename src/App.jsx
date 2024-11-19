import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Error from './components/Error';
import TypeName from './components/TypeName';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Home />
        </>
      ),
    },
    {
      path: "*",
      element: (
        <>
          <Navbar />
          <Error />
        </>
      ),
    },
    {
      path: "/TypeName",
      element: (
        <>
          <Navbar />
          <TypeName />
        </>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
