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

CREATE TABLE reviews (
  id BIGSERIAL NOT NULL PRIMARY KEY,
  restaurant_id BIGINT NOT NULL REFERENCES restaurants(id),
  name VARCHAR(50) NOT NULL,
  review TEXT NOT NULL,
  rating INT NOT NULL CHECK(rating >=1 and rating <=5)
);

DROP TABLE reviews;

INSERT INTO reviews (restaurant_id, name, review, rating) VALUES ('11', 'carl', 'restaurant was good', 5);

SELECT * FROM reviews WHERE restaurant_id = 11;

SELECT TRUNC(AVG(rating), 2) AS avg_rating FROM reviews WHERE restaurant_id = 13;

SELECT COUNT(rating) AS avg_rating FROM reviews WHERE restaurant_id = 13;

SELECT location, COUNT(location) FROM restaurants GROUP BY location;

SELECT restaurant_id, AVG(rating), COUNT(rating) FROM reviews GROUP BY restaurant_id;

SELECT * FROM restaurants INNER JOIN reviews ON restaurants.id = reviews.restaurant_id;