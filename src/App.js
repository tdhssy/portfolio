import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ProjectsPages } from './pages/ProjectsPage/ProjectsPage.js';
import { Home } from './pages/Home';
import { ErrorPage } from './pages/ErrorPage';
import { Main } from './Main';
import { Counter } from './pages/ProjectsPages/CounterER/Counter.js';



/*errorElement: <ErrorPage/>,*/

const router = createBrowserRouter([
  {
    path : '/',
    element: <Main/>,
    
    children: [
      {
        path: 'portfolio/home',
        element: <Home/>

      },
      {
        path: 'portfolio/projects',
        element: <ProjectsPages/>,
 
      },
      {
          path: 'portfolio/projects/Countdown',
          element: <Counter/>,
      }

    ]
  }
])

function App() {
  return (
    
    <RouterProvider router={router}/>
  );
}

export default App;
