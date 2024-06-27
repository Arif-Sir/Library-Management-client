// import React from 'react';

import { Link, useRouteError } from 'react-router-dom';
import errorimg from '../public/pic/detective-animation-404-error-page.gif'
const ErrorPage = () => {
    const error = useRouteError();
  console.error(error);
    return (
        <div className="mx-36 lg:px-64 mt-10" id="error-page">
        {/* <h1>Oops!</h1> */}
        {/* <img src="/src/assets/img/404 error.jpg" alt="" /> */}
        <img src={errorimg}  />
        
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <h1 className="font-extrabold ">Return to <Link className="text-red-800 text-3xl" to='/'><button> HOME</button></Link> </h1>
      </div>
    );
};

export default ErrorPage;