import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div style={styles.sidebar}>
      <Link to="/home" style={styles.link}>🏠 Home</Link>
      <Link to="/about" style={styles.link}>📖 About</Link>
      <Link to="/contact" style={styles.link}>☎️ Contact</Link>
    </div>
  );
}

const styles = {
  sidebar: {
    width: "200px",
    height: "100vh",
    backgroundColor: "#f0f0f0",
    position: "fixed",
    top: "60px",
    left: 0,
    paddingTop: "20px"
  },
  link: {
    display: "block",
    padding: "15px 20px",
    textDecoration: "none",
    color: "#333",
    fontWeight: "bold"
  }
};

export default Sidebar;
