import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Counter } from './pages/ProjectsPages/CounterER/Counter';
import { Home } from './pages/Home';
import { ErrorPage } from './pages/ErrorPage';
import { Main } from './Main';





const router = createBrowserRouter([
  {
    path : '/',
    element: <Main/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: 'portfolio/home',
        element: <Home/>

      },
      {
        path: 'portfolio/Countdown',
        element: <Counter/>

      },

    ]
  }
])

function App() {
  return (
    
    <RouterProvider router={router}/>
  );
}

export default App;
