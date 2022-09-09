import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "./contexts/Context";

function NavBar({ updateUser }) {
  const user = useContext(UserContext);
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
        <p>
          {user ? <NavLink to={`/users/${user.id}`}>Account</NavLink> : null}
        </p>
        <p>
          {user ? null : (
            <NavLink exact to="/users/new">
              Sign up
            </NavLink>
          )}
        </p>
        {user ? (
          <button onClick={handleLogOut}>
            Log Out
          </button> /*Logout navlink here*/
        ) : (
          <NavLink exact to="/login">
            Log in
          </NavLink>
        )}
        {user && <span> Hello, {user.username}!</span>}
      </div>
    </nav>
  );
}

export default NavBar;
