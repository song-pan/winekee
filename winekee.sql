SET NAMES UTF8;
DROP DATABASE IF EXISTS winekee;
CREATE DATABASE winekee CHARSET=UTF8;
USE winekee;
CREATE TABLE w_user (
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(8) NOT NULL,
  upwd VARCHAR(16) NOT NULL,
  email VARCHAR(20) NOT NULL
);
INSERT INTO w_user VALUES(null,'songpan',123456,"909410530@qq.com");