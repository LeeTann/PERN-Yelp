CREATE TABLE restaurants (
  id BIGSERIAL NOT NULL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  location VARCHAR(50) NOT NULL,
  price_range INT NOT NULL CHECK(price_range >=1 and price_range <=5)
);


// Crud operations
SELECT * FROM restaurants;

SELECT * FROM restaurants WHERE id = 1;

INSERT INTO restaurants (name, location, price_range) VALUES ('koon thai', 'kearny mesa', 2) RETURNING *;

UPDATE restaurants SET name = 'red lobster', location = 'oceanside', price_range = 5 WHERE id = 4 RETURNING *;

DELETE FROM restaurants where id = 1;