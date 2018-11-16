
CREATE DATABASE PetSearch;;

USE PetSearch;;

CREATE TABLE `lostpets` (
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
  PRIMARY KEY (`Animal_ID`)
)
SELECT * FROM lostpets;

DROP TABLE IF EXISTS `Foundpets`;

CREATE TABLE `Foundpets` (
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
  PRIMARY KEY (`Animal_ID`)
  )


