import React, { useState } from "react";

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault(); // stops page reload

    if (name === "" || password === "") {
      alert("Fill all fields");
    } else {
      alert("Login Successful");
    }
  }

  return (
    <div style={{ border: "2px solid black", width: "300px", padding: "20px" }}>
      <h3>Login</h3>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br /><br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br /><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;