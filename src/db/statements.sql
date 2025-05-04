CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);


INSERT INTO users (username, password_hash)
VALUES ('admin','$2b$12$e0Y5Q1Z3g7z4j5v8x9y1Oe6J6F5a5f5a5f5a5f5a5f5a5f5a5f5a')

SELECT * FROM users WHERE username = 'admin';

DELETE FROM users WHERE username = 'SERAFIM';

DROP TABLE IF EXISTS users;