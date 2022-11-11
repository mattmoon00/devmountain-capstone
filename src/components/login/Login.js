import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [name, setName] = useState("");
  const [uname, setUname] = useState("");
  const [pword, setPword] = useState("");

  const Employee = {
    id: 12345,
    password: "abcde",
  };

  function handleInput(e) {
    setName(e.target.value);
  }

  function authenticate() {
    if (uname == Employee.id && pword === Employee.password) {
      alert("Success! Logged in.");
    } else {
      alert("Invalid Employee ID and/or password");
    }
  }

  function handleSubmit(e) {
    authenticate();
    e.preventDefault();
    setUname("");
    setPword("");
  }

  return (
    <div className="login-card">
      Hello {name}
      <form onSubmit={handleSubmit}>
        <div className="username" onChange={handleInput}>
          <input
            type="input"
            className="username-input"
            placeholder="Employee ID"
            onChange={(e) => setUname(e.target.value)}
            value={uname}
            autoComplete="off"
          />
        </div>
        <div className="password">
          <input
            className="password-input"
            type="password"
            placeholder="Password"
            onChange={(e) => setPword(e.target.value)}
            value={pword}
            autoComplete="off"
          />
        </div>
        <button className="submit-btn" type="submit" onClick={handleSubmit}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
