import React, { useEffect, useState, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.svg"
import gsap from "gsap";

import { useGSAP } from '@gsap/react';
import { useNavigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import Userbuttn from "./userbuttn";

function Header() {
  gsap.registerPlugin(useGSAP);


  const navigate = useNavigate();



  let [click, setclick] = useState(false);
  const { isSignedIn, user } = useUser();
  const menu = useRef(null);

  useEffect(() => {
    if (window.innerWidth < 640) {

      let x = 0;
      x = click ? -125 : 125;
      gsap.to(menu.current, { x: x, ease: 'power3.inOut', duration: 0.5 });
    }
  }, [click]);



  return (
    <>


      <header className="w-full h-20 fixed top-0 left-0 z-20">
        <nav className="  w-full font-bold text-black  bg-black  h-full flex items-center">
          <div className="m-2">
            <a href="http://127.0.0.1:5173/">


              <svg version="1.1" viewBox="0 0 2000 2000" width="70" height="70" xmlns="http://www.w3.org/2000/svg">
                <path transform="translate(945)" d="m0 0h112l65 7 42 6 43 8 43 10 42 12 43 14 37 14 26 11 20 9 26 12 40 21 24 14 22 13 39 26 14 10 18 13 28 22 26 22 8 7 10 9 15 14 4 3v2l4 2 26 26 7 8 15 16 11 12 9 11 11 13 11 14 14 18 13 18 14 20 10 15 12 19 15 25 13 23 14 26 12 24 14 31 15 36 14 39 10 30 12 43 9 37 8 40 6 38 6 54 3 32v97l-6 65-6 45-7 40-11 49-12 43-16 49-13 34-13 31-12 26-12 25-13 25-14 24-8 14-15 24-22 33-13 18-9 12-13 17-13 16-12 14-9 11-43 46-9 9-8 7-8 8-8 7-16 15-11 9-13 11-14 11-15 12-36 26-24 16-22 14-22 13-25 14-29 15-26 13-39 17-41 16-36 12-29 9-37 10-41 9-38 7-43 6-44 5-23 2h-102l-59-6-39-5-41-7-42-9-35-9-40-12-33-11-36-14-26-11-24-11-29-14-25-13-24-14-27-16-20-13-22-15-14-10-28-21-16-13-11-9-14-12-11-10-8-7-16-15-7-7-8-7-9-9-7-8-10-10-7-8-14-15-9-11-12-14-11-14-12-15-26-36-16-24-12-19-12-20-12-21-14-26-17-34-13-29-11-27-11-29-13-38-10-34-10-39-7-32-7-39-5-35-5-47-2-22v-111l7-66 6-42 8-42 9-39 12-43 15-46 16-42 13-30 11-24 21-42 13-23 11-19 15-24 22-33 10-14 14-19 11-14 13-16 9-11 12-14 22-24 16-17 24-24 8-7 16-15 10-9 11-9 14-12 13-10 18-14 18-13 20-14 12-8 17-11 28-17 23-13 32-17 33-16 30-13 30-12 42-15 32-10 37-10 39-9 36-7 55-8 48-5z" fill="#010204" />
                <path transform="translate(878,422)" d="m0 0h43l41 3 34 6 19 5 37 11 33 16 14 8 30 20 10 9 12 11 9 8 9 11 8 9 11 14 7 10 16 27 2 3-1 5-9 8-10 8-9 7-4-1-11-18-14-21-13-16-11-13-9-9-8-7-12-11-17-12-14-9-16-8-27-12-26-8-18-4-27-4-36-3-16-1h-21l-27 2-30 4-23 5-24 7-26 10-14 6-19 10-24 15-19 14-13 11-11 9-20 20-7 8-14 17-13 18-11 17-13 22-10 19-14 32-10 28-8 26-9 39-6 37-3 29-2 33v50l1 27 4 43 6 39 6 26 7 27 12 33 12 26 8 16 16 26 9 12 13 16 1 3h2l7 8 14 14 14 11 12 10 22 14 17 10 25 11 36 12 33 8 17 3 52 5 14 1h24l30-2 36-5 22-5 30-9 21-8 22-12 13-8 1-1 1-312h-140l-1-1v-36h141v-174l1-1 27-1h134l47 2 37 4 25 4 29 6 21 6 27 9 23 10 16 8 16 9 16 11 13 10 11 10 8 7 7 7 9 11 11 14 10 15 12 22 9 20 8 22 8 30 5 28 3 25 2 39v15l-2 39-4 31-5 26-7 26-9 25-11 24-9 16-14 21-10 13-9 10-7 8-7 7-8 7-11 9-18 13-22 13-22 11-23 9-28 9-25 6-34 6-29 3-14 1-51 1h-155l-1-1v-90l1-17-19 10-16 7-13 6-15 5-24 7-36 7-20 3-36 2h-41l-24-2-31-4-19-3-25-6-25-8-22-8-24-11-26-14-17-11-18-13-14-12-10-9-18-18-9-11-11-13-13-19-9-14-10-17-12-23-13-32-12-36-7-27-6-29-5-33-4-38-2-31v-43l2-37 4-40 4-27 6-31 7-28 9-29 8-22 9-21 12-25 8-15 12-20 8-12 11-16 10-13 14-17 10-10 7-8 7-7 8-7 11-10 14-11 18-13 19-12 21-12 27-13 21-8 24-8 29-7 35-6z" fill="#010204" />
                <path transform="translate(878,422)" d="m0 0h43l41 3 34 6 19 5 37 11 33 16 14 8 30 20 10 9 12 11 9 8 9 11 8 9 11 14 7 10 16 27 2 3-1 5-9 8-10 8-9 7-4-1-11-18-14-21-13-16-11-13-9-9-8-7-12-11-17-12-14-9-16-8-27-12-26-8-18-4-27-4-36-3-16-1h-21l-27 2-30 4-23 5-24 7-26 10-14 6-19 10-24 15-19 14-13 11-11 9-20 20-7 8-14 17-13 18-11 17-13 22-10 19-14 32-10 28-8 26-9 39-6 37-3 29-2 33v50l1 27 4 43 6 39 6 26 7 27 12 33 12 26 8 16 16 26 9 12 13 16 1 3h2l7 8 14 14 14 11 12 10 22 14 17 10 25 11 36 12 33 8 17 3 52 5 14 1h24l30-2 36-5 22-5 30-9 21-8 22-12 13-8 1-1 1-312h-140l-1-1v-36h141v-174l1-1 27-1h134l47 2 37 4 25 4 29 6 21 6 27 9 23 10 16 8 16 9 16 11 13 10 11 10 8 7 7 7 9 11 11 14 10 15 12 22 9 20 8 22 8 30 5 28 3 25 2 39v15l-2 39-4 31-5 26-7 26-9 25-11 24-9 16-14 21-10 13-9 10-7 8-7 7-8 7-11 9-18 13-22 13-22 11-23 9-28 9-25 6-34 6-29 3-14 1-51 1h-155l-1-1v-90l1-17-19 10-16 7-13 6-15 5-24 7-36 7-20 3-36 2h-41l-24-2-31-4-19-3-25-6-25-8-22-8-24-11-26-14-17-11-18-13-14-12-10-9-18-18-9-11-11-13-13-19-9-14-10-17-12-23-13-32-12-36-7-27-6-29-5-33-4-38-2-31v-43l2-37 4-40 4-27 6-31 7-28 9-29 8-22 9-21 12-25 8-15 12-20 8-12 11-16 10-13 14-17 10-10 7-8 7-7 8-7 11-10 14-11 18-13 19-12 21-12 27-13 21-8 24-8 29-7 35-6zm227 382-1 47 1 103 118 1v430l-29 1-1-23-6-102-2-33h-2l-11 18-12 19-10 13-9 11-11 13-14 13-8 7-3 3v105h157l31-2 26-3 24-4 26-6 26-8 24-9 25-12 21-13 13-10 13-11 19-19 11-14 7-10 9-15 11-21 9-23 8-27 6-27 5-40 1-20v-47l-2-26-4-29-6-27-7-24-9-22-8-17-12-20-13-17-18-20-8-7-12-10-16-11-17-10-22-11-24-9-25-8-33-7-23-4-36-4-43-2z" fill="#FCFDFE" />
                <path transform="translate(1105,991)" d="m0 0h79v93l-3 32-3 19-6 25-6 20-11 26-8 16-9 15-8 11-10 13-12 14-3 1z" fill="#010204" />
                <path transform="translate(1105,804)" d="m0 0h134l43 2 36 4 34 6 18 4 1 2v41l-1 1h-259l-6-1-1-5v-16z" fill="#FE0033" />
                <path transform="translate(1017,1390)" d="m0 0h56l1 1 1 64h155l51-1 33-3 23-3 31-6h3v43l-4 1h-350l-1-1v-94z" fill="#FF0034" />
                <path transform="translate(1038,752)" d="m0 0h303l29 1 1 1v14l1 26-8-1-30-6-31-4-20-2-47-2h-134l-27 1-1 81-2 3h-55l-1-1v-110z" fill="#FF0034" />
                <path transform="translate(1196,1389)" d="m0 0 159 1 15 1 1 1 1 22-24 6-22 4-23 3-23 2-18 1h-157v-39l1-1z" fill="#FF0034" />
              </svg>
            </a>
          </div>
          <h1 style={{ fontFamily: "Oswald, sans-serif", color: "white" }} className=" text-3xl py-5 font-bold">
            <a href="http://127.0.0.1:5173/">GoDrive</a>
          </h1>



          <ul ref={menu} className="flex order-3 md:border-none   border-2 border-black top-20 text-lg gap-5 fixed items-center
             md:flex-row md:text-white md:w-auto w-32 -right-32 md:left-56 md:bg-transparent bg-black flex-col text-yellow font-bold md:top-7 z-40 ">

            <li onClick={() => setclick(false)} >
              <NavLink to={"./Home"} className={({ isActive }) => (isActive ? "text-orange-700" : "text-white")}>
                Home
              </NavLink>

            </li>
            <li onClick={() => setclick(false)}>
              <NavLink to={"./Ride"} className={({ isActive }) => (isActive ? "text-orange-700" : "text-white")}>
                Ride
              </NavLink>

            </li>
            <li onClick={() => setclick(false)}>
              <NavLink to={"./About"} className={({ isActive }) => (isActive ? "text-orange-700" : "text-white")}>
                About
              </NavLink>

            </li>
            <li onClick={() => setclick(false)}>
              <NavLink to={"./Contact"} className={({ isActive }) => (isActive ? "text-orange-700" : "text-white")}>
                Contactus
              </NavLink>

            </li>

          </ul>
          <div className="fixed right-6 z-50 ">
            {isSignedIn ? (

              <Userbuttn />
            ) :
              <button
                className="text-black bg-white rounded-lg w-16 size-12 font-sans hover:scale-110"
                onClick={() => navigate("/Sign")}
              >


                Login


              </button>}
          </div>




        </nav>
        <button onClick={() => setclick(prev => click = !prev)} className="text-white rounded-md size-10 w-auto h-auto md:hidden ml-5">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg>
        </button>
      </header>


      <div className="w-full h-20 bg-none"></div>




    </>




  )
}
export default Header;