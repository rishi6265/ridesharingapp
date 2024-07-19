import React from 'react';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';

import Layout from './components/layout.jsx';
import Home from './components/home.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Ride from './components/Ride.jsx';
import Sign from './components/Sign.jsx';
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Ride" element={<Ride />} />
        <Route path="/Sign" element={<Sign />} />
       
        
      </Route>
    )
  );

  return (
    <RouterProvider router={router}>
      
    </RouterProvider>
  );
}

export default App;
