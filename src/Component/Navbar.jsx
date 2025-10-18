import React from 'react';
import logo from '../assets/img/firebase-logo.png';
import MyContainer from './MyContainer';
import { Link, NavLink } from 'react-router';
import MyLink from './MyLink';
const Navbar = () => {
    return (
        <div className="bg-slate-100f py-2 border-b border-b-slate-300 ">
            <MyContainer className="flex items-center justify-between">
                <figure>
                    <Link to={'/'}>
                        <img src={logo} className="w-[55px]" />
                    </Link>
                </figure>
                <ul className="flex items-center gap-2">
                    <MyLink to={'/'} >Home</MyLink>
                    <MyLink to={'/about-us'}>About Us</MyLink>
                    <MyLink to={'/profile'}>Profile</MyLink>
                    {/* <li><NavLink to={'/about-us'} className={({ isActive }) => isActive ? 'text-purple-500' : ''}>About us</NavLink></li> */}
                    {/* <li>
                        <MyLink to={"/"}>Home</MyLink>
                    </li>
                    <li>
                        <MyLink to={"/about-us"}>About US</MyLink>
                    </li>
                    <li>
                        <MyLink to={"/profile"}>Profile</MyLink>
                    </li> */}
                </ul>

                <button className="bg-purple-500 text-white px-4 py-2 rounded-md font-semibold cursor-pointer">
                    <Link to='/signin'>Sign in</Link>
                </button>
            </MyContainer>
        </div>
    );
};

export default Navbar;