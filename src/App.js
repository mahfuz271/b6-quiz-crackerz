import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Slider from './Components/Slider/Slider';
import Topics from './Components/Topics/Topics';
import Main from './Layouts/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children: [
        {
          path: '/',
          element: <div><Slider /><Topics /></div>,
          loader: () => {
            return fetch("https://openapi.programming-hero.com/api/quiz");
          }
        }
      ]
    }
  ]);


  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
