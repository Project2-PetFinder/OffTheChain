
CREATE DATABASE PetSearch;;

USE PetSearch;;

CREATE TABLE `lostpets` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Animal_ID` varchar(30) NOT NULL,
  `Lost_location` varchar(255) NOT NULL,
  `AAC` varchar(30) NOT NULL,
  `Lost_date` date NOT NULL,
  `Pet_Type` varchar(30) NOT NULL,
  `Looks_Like` varchar(255) NOT NULL,
  `Color` varchar(30) NOT NULL,
  `Sex` varchar(30) NOT NULL,
  `Age` varchar(30) NOT NULL,
  `image_Link` varchar(255) NOT NULL,
  PRIMARY KEY (`id`,'Animal_ID')
)

DROP TABLE IF EXISTS `Foundpets`;

CREATE TABLE `Foundpets` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Animal_ID` varchar(30) NOT NULL,
  `Found_location` varchar(255) NOT NULL,
  `AAC` varchar(30) NOT NULL,
  `Found_date` date NOT NULL,
  `Pet_Type` varchar(30) NOT NULL,
  `Looks_Like` varchar(255) NOT NULL,
  `Color` varchar(30) NOT NULL,
  `Sex` varchar(30) NOT NULL,
  `Age` varchar(30) NOT NULL,
  `image_Link` varchar(255) NOT NULL,
  PRIMARY KEY (`id`,'Animal_ID')
)


