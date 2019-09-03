DROP DATABASE IF EXISTS chatspace;
CREATE DATABASE chatspace;

CREATE TABLE channel (
    id INT NOT NULL AUTO_INCREMENT,
    topic varchar(50) NOT NULL,
    messages varchar(255),
    PRIMARY KEY(id)
);

CREATE TABLE user (
    id INT NOT NULL AUTO_INCREMENT,
    handle varchar(50) NOT NULL,
    password longtext,
    email varchar(50) Not Null,
    PRIMARY KEY(id)
);
