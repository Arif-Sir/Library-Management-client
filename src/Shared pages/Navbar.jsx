// import React from 'react';

import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Authcontext } from "../Provider/AuthProvider";


const Navbar = () => {

    const {user,logOut} =useContext(Authcontext);
    const handelLogOut = ()=>{
        logOut()
        .then(result=>{
            console.log(result.user);
        })
        .catch(error=>{
            console.error(error.message);
        })
    }

    const navlinks = <>
    <li className="text-black text-xl font-semibold"><NavLink to='/'>Home</NavLink></li>
    
    <li><NavLink to='/all'>All Books </NavLink></li>
    {/* { user && <> */}
      <li><NavLink to='/try'>Trying</NavLink></li>
      <li className="text-black text-semibold"><NavLink to='/add'>Add Book </NavLink></li>

    </>
    return (
      <div className="">
          <div className="navbar bg-[#F8F9FA] px-5">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navlinks}
            </ul>
          </div>
          <a href="/" className="btn btn-ghost text-3xl text-black font-bold">PATHSHALA</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navlinks}
          </ul>
        </div>
        <div className="navbar-end">
        
          {
            user? <>
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar  tooltip tooltip-left" data-tip={user.displayName}>
              <div className="w-15 rounded-full">
                <img   src={user.photoURL} />
              </div>
            </div>
      
            {/* <p>{user.displayName}</p> */}
            <button onClick={handelLogOut} className='btn btn-accent'>LogOut</button>
            </>
            
            :<>
            <Link to='/resister'>
            <button className='btn btn-success'>Resister</button>
            </Link>
            <Link to='/login'>
            <button className='btn btn-error ml-2'>Login</button>
            </Link>
            </>
          }
         
        </div>
        
      </div>
      <hr className="border-black " />
      </div>
      
    );
};

export default Navbar;