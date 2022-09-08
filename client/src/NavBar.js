import React from "react";
import { NavLink } from "react-router-dom";

function NavBar({ currentUser, updateUser }) {

  const handleLogOut = () => {
    // DELETE `/logout`
    fetch("/logout", {
      method: "DELETE",
    });
    updateUser(false);
  };
  return (
    <nav>
      <div className="nav-links">
        <div className="nav-home">
      <NavLink to="/">Home</NavLink>
      </div>
      <div className="nav-submit">
      <NavLink exact to="/coffees/new">
        Submit a Coffee
      </NavLink>
      </div>
      <p>{currentUser ? <NavLink to={`/users/${currentUser.id}`}>Account</NavLink> : null }</p>
      <p>{currentUser? null : <NavLink exact to="/users/new">Sign up</NavLink>}</p>
      {currentUser ? (
        <button onClick={handleLogOut}>Log Out</button>  /*Logout navlink here*/
      ) : (
        <NavLink exact to="/login">
          Log in
        </NavLink>
      )}
      {currentUser && <span>           Hello, {currentUser.username}!</span>}
      </div>
    </nav>
  );
}

export default NavBar;
