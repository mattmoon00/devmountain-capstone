import React, { useState, useEffect } from "react";
import "./Login.css";
import axios from "axios";

function Login() {
  const [name, setName] = useState("");
  const [uname, setUname] = useState("");
  const [pword, setPword] = useState("");

  function handleInput(e) {
    setName(e.target.value);
  }

  const cookie = document.cookie;

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .put("http://localhost:5432/login", {
        name: name,
        pword: pword,
      })
      .then((res) => {
        console.log("signed in");
        console.log(res.data);
        //navigate away using useNavigate()
      })
      .catch((error) => {
        console.log(error);
      });

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
