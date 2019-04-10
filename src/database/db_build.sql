BEGIN;
  DROP TABLE IF EXISTS users
  CASCADE;

CREATE TABLE users
(
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(100) NOT NULL,
  location TEXT NOT NULL
);

INSERT INTO users
  (name, location)
VALUES
  ('Sam', 'Reading'),
  ('Oli', 'Manchester')
;


COMMIT;