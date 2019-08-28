DROP DATABASE IF EXISTS chatspace;
CREATE DATABASE chatspace;

CREATE TABLE channel (
    id INT NOT NULL AUTO_INCREMENT,
    topic varchar(50) NOT NULL,
    messages varchar(255),
    PRIMARY KEY(id)
);