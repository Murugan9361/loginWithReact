import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const dummyEmail = "murugan@example.com";
  const dummyPassword = "murugan@123";

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === dummyEmail && password === dummyPassword) {
      setMessage("✅ Login successful!");
      setTimeout(() => {
        navigate("/home");
      }, 1000);
    } else {
      setMessage("❌ Invalid email or password.");
    }
  };

  return (
    <div style={styles.container}>
      {/* Left Side */}


      {/* Right Side */}
      <div >
        <div style={styles.loginBox}>
          <h2 style={styles.title}>🔐 Login</h2>
          <form onSubmit={handleLogin} style={styles.form}>
            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
            />
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
            />
            <button type="submit" style={styles.button}>Login</button>
            <p style={styles.message}>{message}</p>
          </form>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    
    display: "flex",
    flexDirection:"column",
    justifyContent:"center",
    minHeight: "100vh",
    minWidth:"100vw",
    alignItems:"center"
  },
  leftSide: {
    flex: "1",
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "40px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  leftTitle: {
    fontSize: "36px",
    fontWeight: "bold",
    marginBottom: "20px",
    textAlign: "center"
  },
  leftSubtitle: {
    fontSize: "18px",
    textAlign: "center",
    maxWidth: "300px"
  },
  rightSide: {
    flex: "1",
    backgroundColor: "#f5f5f5",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px"
  },
  loginBox: {
    backgroundColor: "#fff",
    padding: "40px",
    borderRadius: "12px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
    width: "100%",
    maxWidth: "400px"
  },
  title: {
    marginBottom: "20px",
    fontSize: "24px",
    fontWeight: "bold",
    textAlign: "center"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px"
  },
  input: {
    padding: "12px 14px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "6px"
  },
  button: {
    padding: "12px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background-color 0.3s"
  },
  message: {
    marginTop: "10px",
    textAlign: "center",
    color: "#d00",
    fontWeight: "bold"
  }
};

export default Login;
