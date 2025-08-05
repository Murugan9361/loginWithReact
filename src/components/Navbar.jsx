import React from "react";

function Navbar() {
  return (
    <div style={styles.nav}>
      <h2 style={styles.logo}>Murugan</h2>
      <a href="/" style={styles.logout}>Logout</a>
    </div>
  );
}

const styles = {
  nav: {
    height: "60px",
    backgroundColor: "#333",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 20px",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000
  },
  logo: {
    margin: 0
  },
  logout: {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold"
  }
};

export default Navbar;
