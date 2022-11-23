drop table if exists tables;

CREATE TABLE tables (
table_id serial PRIMARY KEY,
table_name varchar(255)
);

CREATE TABLE users (
    user_id serial PRIMARY KEY,
    username varchar(255),
    password text
);

INSERT INTO tables(
    table_name
) values (
    'table 1'
), ('table 2');

