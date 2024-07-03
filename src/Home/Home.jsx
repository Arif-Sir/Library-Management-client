// import React from 'react';

import { Link } from "react-router-dom";
import Banner from "./Banner";
import AllBooks from "../All books/AllBooks";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AllBooks></AllBooks>
         
        </div>
    );
};

export default Home;