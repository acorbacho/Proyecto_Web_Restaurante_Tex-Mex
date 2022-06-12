-- MariaDB dump 10.19  Distrib 10.4.24-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: restaurant
-- ------------------------------------------------------
-- Server version	10.4.24-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `dishes`
--

DROP TABLE IF EXISTS `dishes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `dishes` (
  `dish_name` varchar(50) NOT NULL,
  `price` double NOT NULL,
  `ingredient_name_1` varchar(50) NOT NULL,
  `ingredient_name_2` varchar(50) DEFAULT NULL,
  `ingredient_name_3` varchar(50) DEFAULT NULL,
  `ingredient_name_4` varchar(50) DEFAULT NULL,
  `ingredient_name_5` varchar(50) DEFAULT NULL,
  `ingredient_name_6` varchar(50) DEFAULT NULL,
  `ingredient_1_amount` int(10) NOT NULL,
  `ingredient_2_amount` int(10) DEFAULT NULL,
  `ingredient_3_amount` int(10) DEFAULT NULL,
  `ingredient_4_amount` int(10) DEFAULT NULL,
  `ingredient_5_amount` int(10) DEFAULT NULL,
  `ingredient_6_amount` int(10) DEFAULT NULL,
  PRIMARY KEY (`dish_name`),
  KEY `dishes_FK_1` (`ingredient_name_1`),
  KEY `dishes_FK_2` (`ingredient_name_2`),
  KEY `dishes_FK_3` (`ingredient_name_3`),
  KEY `dishes_FK_4` (`ingredient_name_4`),
  KEY `dishes_FK_5` (`ingredient_name_5`),
  KEY `dishes_FK_6` (`ingredient_name_6`),
  CONSTRAINT `dishes_FK_1` FOREIGN KEY (`ingredient_name_1`) REFERENCES `ingredients_stock` (`ingredient_name`),
  CONSTRAINT `dishes_FK_2` FOREIGN KEY (`ingredient_name_2`) REFERENCES `ingredients_stock` (`ingredient_name`),
  CONSTRAINT `dishes_FK_3` FOREIGN KEY (`ingredient_name_3`) REFERENCES `ingredients_stock` (`ingredient_name`),
  CONSTRAINT `dishes_FK_4` FOREIGN KEY (`ingredient_name_4`) REFERENCES `ingredients_stock` (`ingredient_name`),
  CONSTRAINT `dishes_FK_5` FOREIGN KEY (`ingredient_name_5`) REFERENCES `ingredients_stock` (`ingredient_name`),
  CONSTRAINT `dishes_FK_6` FOREIGN KEY (`ingredient_name_6`) REFERENCES `ingredients_stock` (`ingredient_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dishes`
--

LOCK TABLES `dishes` WRITE;
/*!40000 ALTER TABLE `dishes` DISABLE KEYS */;
INSERT INTO `dishes` VALUES ('fajita',4,'tortilla_trigo','preparado_fajitas','lechuga',NULL,NULL,NULL,1,100,50,NULL,NULL,NULL),('nachos',3.5,'totopos','pico_gallo','salsa_queso',NULL,NULL,NULL,250,50,50,NULL,NULL,NULL),('taco',6.9,'tortilla_maiz','carne_marinada','pico_gallo','guacamole','lima',NULL,1,200,100,50,2,NULL);
/*!40000 ALTER TABLE `dishes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ingredients_stock`
--

DROP TABLE IF EXISTS `ingredients_stock`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ingredients_stock` (
  `ingredient_name` varchar(50) NOT NULL,
  `ingredient_stock` int(10) NOT NULL,
  PRIMARY KEY (`ingredient_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ingredients_stock`
--

LOCK TABLES `ingredients_stock` WRITE;
/*!40000 ALTER TABLE `ingredients_stock` DISABLE KEYS */;
INSERT INTO `ingredients_stock` VALUES ('carne_marinada',8000),('guacamole',9800),('lechuga',8650),('lima',100),('pico_gallo',3050),('preparado_fajitas',2500),('salsa_queso',14250),('tortilla_maiz',200),('tortilla_trigo',573),('totopos',3250);
/*!40000 ALTER TABLE `ingredients_stock` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `orders` (
  `order_id` varchar(15) NOT NULL,
  `username` varchar(15) NOT NULL,
  `total` float NOT NULL,
  `order_dish_1` varchar(50) NOT NULL,
  `order_dish_2` varchar(50) DEFAULT NULL,
  `order_dish_3` varchar(50) DEFAULT NULL,
  `order_dish_4` varchar(50) DEFAULT NULL,
  `order_dish_5` varchar(50) DEFAULT NULL,
  `order_dish_6` varchar(50) DEFAULT NULL,
  `order_dish_7` varchar(50) DEFAULT NULL,
  `order_dish_8` varchar(50) DEFAULT NULL,
  `order_dish_9` varchar(50) DEFAULT NULL,
  `order_dish_10` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`order_id`),
  KEY `orders_FK_1` (`username`),
  KEY `orders_FK_2` (`order_dish_1`),
  KEY `orders_FK_3` (`order_dish_2`),
  KEY `orders_FK_4` (`order_dish_3`),
  KEY `orders_FK_5` (`order_dish_4`),
  KEY `orders_FK_6` (`order_dish_5`),
  KEY `orders_FK_7` (`order_dish_6`),
  KEY `orders_FK_8` (`order_dish_7`),
  KEY `orders_FK_9` (`order_dish_8`),
  KEY `orders_FK_10` (`order_dish_9`),
  KEY `orders_FK_11` (`order_dish_10`),
  CONSTRAINT `orders_FK_10` FOREIGN KEY (`order_dish_9`) REFERENCES `dishes` (`dish_name`),
  CONSTRAINT `orders_FK_11` FOREIGN KEY (`order_dish_10`) REFERENCES `dishes` (`dish_name`),
  CONSTRAINT `orders_FK_2` FOREIGN KEY (`order_dish_1`) REFERENCES `dishes` (`dish_name`),
  CONSTRAINT `orders_FK_3` FOREIGN KEY (`order_dish_2`) REFERENCES `dishes` (`dish_name`),
  CONSTRAINT `orders_FK_4` FOREIGN KEY (`order_dish_3`) REFERENCES `dishes` (`dish_name`),
  CONSTRAINT `orders_FK_5` FOREIGN KEY (`order_dish_4`) REFERENCES `dishes` (`dish_name`),
  CONSTRAINT `orders_FK_6` FOREIGN KEY (`order_dish_5`) REFERENCES `dishes` (`dish_name`),
  CONSTRAINT `orders_FK_7` FOREIGN KEY (`order_dish_6`) REFERENCES `dishes` (`dish_name`),
  CONSTRAINT `orders_FK_8` FOREIGN KEY (`order_dish_7`) REFERENCES `dishes` (`dish_name`),
  CONSTRAINT `orders_FK_9` FOREIGN KEY (`order_dish_8`) REFERENCES `dishes` (`dish_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES ('15265877KIB','kib',7.5,'fajita','nachos',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('172012568KIB','kib',39.9,'fajita','nachos','fajita','nachos','taco','nachos','nachos','fajita','nachos','nachos');
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `username` varchar(15) NOT NULL,
  `password` varchar(20) NOT NULL,
  `email` varchar(50) NOT NULL,
  `admin` tinyint(1) NOT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('admin','00000000','admin@admin.com',1),('kib','12345678','kib@kib.jp',0),('user','12345678','user@user.com',0);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-12 13:52:51
