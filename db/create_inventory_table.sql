CREATE TABLE inventory (
  	id SERIAL PRIMARY KEY,
  	name VARCHAR(240),
    shelf VARCHAR(240),
    bin INTEGER,
    image VARCHAR(240),
    price INTEGER
);