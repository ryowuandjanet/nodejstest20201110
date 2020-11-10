CREATE DATABASE nodekb;

CREATE TABLE articles(
  _id SERIAL PRIMARY KEY,
  title VARCHAR(30),
  author VARCHAR(30), 
  body VARCHAR(100)
);