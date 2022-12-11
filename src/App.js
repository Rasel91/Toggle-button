
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Toggle from './Toggle';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Toggle></Toggle>
    }
  ])
  return (
    <RouterProvider router={router}>

    </RouterProvider>
  );
}

export default App;
