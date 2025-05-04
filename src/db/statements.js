const db = require('better-sqlite3')('./src/db/database.db');

const createUsersTable = () => {
  const sql = `CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
  )`;
  db.prepare(sql).run();
}

const addUser = (username, password) => {
  const sql = `INSERT INTO users (username, password) VALUES (?, ?)`;
  db.prepare(sql).run(username, password);
}

const getUser = (username) => {
  const sql = `SELECT * FROM users WHERE username = ?`;
  const user = db.prepare(sql).get(username);
  console.log(user);
}

const deleteUser = (username) => {
  const sql = `DELETE FROM users WHERE username = ?`;
  db.prepare(sql).run(username);
}

deleteUser('admin');


