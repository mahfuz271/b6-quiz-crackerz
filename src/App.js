import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './Components/Blog/Blog';
import Quizes from './Components/Quizes/Quizes';
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
        },
        {
          path: "/quiz/:quizId",
          element: <Quizes></Quizes>,
          loader: ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`);
          }
        },
        {
          path: '/blog',
          element:<Blog></Blog>
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
