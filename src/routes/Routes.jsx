import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Home from '../pages/Home'
import Blogs from '../pages/Blogs'
import Bookmarks from '../pages/Bookmarks'
import BlogDetails from '../pages/BlogDetails.jsx'
import Content from '../components/Content.jsx';
import Author from '../components/Author.jsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>,
        loader: () => fetch('https://dev.to/api/articles?per_page=20&top=2')
      },
      {
        path: '/blogs/:id',
        element: <BlogDetails></BlogDetails>,
        loader: ({params}) => fetch(`https://dev.to/api/articles/${params.id}`),
        children: [
          {
            index: true,
            element: <Content></Content>,
            loader: ({params}) => fetch(`https://dev.to/api/articles/${params.id}`),
          },
          {
            path: 'author',
            element: <Author></Author>,
            loader: ({params}) => fetch(`https://dev.to/api/articles/${params.id}`),
          }
        ]
      },
      {
        path: 'bookmarks',
        element: <Bookmarks></Bookmarks>
      }
    ]
  },
]);