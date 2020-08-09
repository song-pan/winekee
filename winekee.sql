SET NAMES UTF8;
DROP DATABASE IF EXISTS winekee;
CREATE DATABASE winekee CHARSET=UTF8;
USE winekee;
CREATE TABLE w_user (
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(8) NOT NULL UNIQUE,
  upwd VARCHAR(16) NOT NULL,
  email VARCHAR(20) NOT NULL
);
CREATE TABLE shop (
  pid INT PRIMARY KEY AUTO_INCREMENT,
  pname VARCHAR(36) NOT NULL,
  images VARCHAR(200),
  price DECIMAL(7,2)
);
INSERT INTO shop VALUES(null, '葡萄酒1号', 'images/0001.jpg', "100");
INSERT INTO shop VALUES(null, '葡萄酒2号', 'images/0002.jpg', "100");
INSERT INTO shop VALUES(null, '葡萄酒3号', 'images/0003.jpg', "100");
INSERT INTO shop VALUES(null, '葡萄酒4号', 'images/0004.jpg', "100");
INSERT INTO shop VALUES(null, '葡萄酒5号', 'images/0005.jpg', "100");
INSERT INTO shop VALUES(null, '葡萄酒6号', 'images/0006.jpg', "100");
INSERT INTO shop VALUES(null, '葡萄酒7号', 'images/0007.jpg', "100");
INSERT INTO shop VALUES(null, '葡萄酒8号', 'images/0022.jpg', "100");
INSERT INTO shop VALUES(null, '葡萄酒9号', 'images/0009.jpg', "100");
INSERT INTO shop VALUES(null, '葡萄酒10号', 'images/0010.jpg', "100");
INSERT INTO shop VALUES(null, '葡萄酒11号', 'images/0011.jpg', "100");
INSERT INTO shop VALUES(null, '葡萄酒12号', 'images/0012.jpg', "100");
INSERT INTO shop VALUES(null, '葡萄酒13号', 'images/0013.jpg', "100");
INSERT INTO shop VALUES(null, '葡萄酒14号', 'images/0014.jpg', "100");
INSERT INTO shop VALUES(null, '葡萄酒15号', 'images/0015.jpg', "100");
INSERT INTO shop VALUES(null, '葡萄酒16号', 'images/0016.jpg', "100");
INSERT INTO shop VALUES(null, '葡萄酒17号', 'images/0018.jpg', "100");
INSERT INTO shop VALUES(null, '葡萄酒19号', 'images/0019.jpg', "100");
INSERT INTO shop VALUES(null, '葡萄酒20号', 'images/0020.jpg', "100");
INSERT INTO shop VALUES(null, '葡萄酒21号', 'images/0021.jpg', "100");
INSERT INTO w_user VALUES(null, 'songpan', 123456, "909410530@qq.com");
