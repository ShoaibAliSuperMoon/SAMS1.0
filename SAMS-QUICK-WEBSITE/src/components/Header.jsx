import React from "react";

function Header() {
  return (
    <header style={{ display: "flex", alignItems: "center" }}>
      <h1 style={{ marginRight: "auto" }}>Sams 1.0</h1>
      <p className="events">Events</p>
      <form className="Registration">
        <button>Login</button>
        <button>Signup</button>
      </form>
    </header>
  );
}

export default Header;
