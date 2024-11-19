import React from 'react';
import { RouterProvider, createBrowserRouter ,Outlet } from 'react-router-dom'; // Import RouterProvider and createBrowserRouter
import Nav from './Home Page Component/Header Section/Nav';
import AnimatedCursor from '../src/Animated Cursor/AnimatedCursor';
import Project from './Projects/Project';
import Experience from './Experience/Experience';
import Gallery from './Gallery/Gallery';
import Main from './Main Page/Main'
import ScrollTop from './Scroll To Top/ScrollTop';
import Preloader from '../src/Preloader/Preloader';
import Error from '../src/Error/Error'
const App = () => {
  return (
    <>
      <div>
        <Nav />
        <AnimatedCursor />
        <ScrollTop />
        <Preloader />
        <Outlet/>
      </div>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path:"/",
        element:<Main/>
      },
      {
        path: '/project',
        element: <Project />
      },
    
      {
        path: '/experience',
        element: <Experience />
      }
    ],
    errorElement: <Error />
  }
]);
const Root = () => {
  return (
    <RouterProvider router={appRouter}>
      <App />
    </RouterProvider>
  );
};

export default Root; 



