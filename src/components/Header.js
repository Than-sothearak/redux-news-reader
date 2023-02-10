import React from "react";

// Import the NavLink component.
import { NavLink } from "react-router-dom";
export default function Header () {

  // Replace the 4 <a> tags with <NavLink> components
  return (
    <div className="bg-red-900 bg-cover text-center p-6 flex gap-9 justify-center text-white">
      <NavLink  to="/abouts">About</NavLink >
      <NavLink  to="/articles">Articles</NavLink > 
      <NavLink  to="/categories">Categories</NavLink>
    </div>
  )
}
