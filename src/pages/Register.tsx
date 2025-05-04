import { useState } from "react";




// const addUser = (username: string, password: string) => {
//   const db = require('better-sqlite3')('./src/db/database.db');
//   const sql = `INSERT INTO users (username, password) VALUES (?, ?)`;
//   db.prepare(sql).run(username, password);
// }

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    // addUser(username, password);
    alert("User registered successfully!");
  };

  return (
    <div>
      <h1>Register</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;