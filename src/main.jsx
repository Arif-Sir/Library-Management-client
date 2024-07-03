import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from './Root';
import ErrorPage from './ErrorPage';
import Home from './Home/Home';
import Login from './Res & log/Login';
import Resister from './Res & log/Resister';
import AuthProvider from './Provider/AuthProvider';
import Add from './Add';
import Try from './Try/Try';
import AllBooks from './All books/AllBooks';
import BookDetails from './All books/BookDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/resister",
        element: <Resister></Resister>,
      },
      {
        path: "/add",
        element: <Add></Add>,
      },
      {
        path: "/all",
        element: <AllBooks></AllBooks>,
      },
      {
        path: "/viewdetails/:name",
        element: <BookDetails></BookDetails>,
        loader: ({params})=>fetch(`http://localhost:5173/all/${params.name}`)
      },
      {
        path: "/try",
        element: <Try></Try>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <AuthProvider>
<RouterProvider router={router} />
</AuthProvider>
</React.StrictMode>

);


