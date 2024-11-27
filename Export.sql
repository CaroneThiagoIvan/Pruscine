-- MySQL dump 10.13  Distrib 8.0.39, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: Prucine
-- ------------------------------------------------------
-- Server version	8.0.39-0ubuntu0.22.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `actor`
--

DROP TABLE IF EXISTS `actor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `actor` (
  `idactor` int NOT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `fechaNacimiento` varchar(45) DEFAULT NULL,
  `descripcion` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idactor`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `actor`
--

LOCK TABLES `actor` WRITE;
/*!40000 ALTER TABLE `actor` DISABLE KEYS */;
/*!40000 ALTER TABLE `actor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `director`
--

DROP TABLE IF EXISTS `director`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `director` (
  `iddirector` int NOT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `fechaNacimiento` date DEFAULT NULL,
  `descripcion` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`iddirector`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `director`
--

LOCK TABLES `director` WRITE;
/*!40000 ALTER TABLE `director` DISABLE KEYS */;
/*!40000 ALTER TABLE `director` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `favoritoP`
--

DROP TABLE IF EXISTS `favoritoP`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `favoritoP` (
  `usuario_idusuario` int NOT NULL,
  `pelicula_idpelicula` int NOT NULL,
  PRIMARY KEY (`usuario_idusuario`,`pelicula_idpelicula`),
  KEY `fk_usuario_has_pelicula_pelicula3_idx` (`pelicula_idpelicula`),
  KEY `fk_usuario_has_pelicula_usuario2_idx` (`usuario_idusuario`),
  CONSTRAINT `fk_usuario_has_pelicula_pelicula3` FOREIGN KEY (`pelicula_idpelicula`) REFERENCES `pelicula` (`idpelicula`),
  CONSTRAINT `fk_usuario_has_pelicula_usuario2` FOREIGN KEY (`usuario_idusuario`) REFERENCES `usuario` (`idusuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `favoritoP`
--

LOCK TABLES `favoritoP` WRITE;
/*!40000 ALTER TABLE `favoritoP` DISABLE KEYS */;
/*!40000 ALTER TABLE `favoritoP` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `favoritoR`
--

DROP TABLE IF EXISTS `favoritoR`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;

--
-- Table structure for table `genero`
--

DROP TABLE IF EXISTS `genero`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `genero` (
  `idgenero` int NOT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idgenero`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `genero`
--

LOCK TABLES `genero` WRITE;
/*!40000 ALTER TABLE `genero` DISABLE KEYS */;
/*!40000 ALTER TABLE `genero` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lista`
--

DROP TABLE IF EXISTS `lista`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lista` (
  `usuario_idusuario` int NOT NULL,
  `pelicula_idpelicula` int NOT NULL,
  PRIMARY KEY (`usuario_idusuario`,`pelicula_idpelicula`),
  KEY `fk_usuario_has_pelicula_pelicula2_idx` (`pelicula_idpelicula`),
  KEY `fk_usuario_has_pelicula_usuario1_idx` (`usuario_idusuario`),
  CONSTRAINT `fk_usuario_has_pelicula_pelicula2` FOREIGN KEY (`pelicula_idpelicula`) REFERENCES `pelicula` (`idpelicula`),
  CONSTRAINT `fk_usuario_has_pelicula_usuario1` FOREIGN KEY (`usuario_idusuario`) REFERENCES `usuario` (`idusuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lista`
--

LOCK TABLES `lista` WRITE;
/*!40000 ALTER TABLE `lista` DISABLE KEYS */;
/*!40000 ALTER TABLE `lista` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pais`
--

DROP TABLE IF EXISTS `pais`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pais` (
  `idpais` int NOT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idpais`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pais`
--

LOCK TABLES `pais` WRITE;
/*!40000 ALTER TABLE `pais` DISABLE KEYS */;
/*!40000 ALTER TABLE `pais` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pelicula`
--

DROP TABLE IF EXISTS `pelicula`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pelicula` (
  `idpelicula` int NOT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `anioPublicado` date DEFAULT NULL,
  `pais_idpais` int NOT NULL,
  PRIMARY KEY (`idpelicula`,`pais_idpais`),
  KEY `fk_pelicula_pais1_idx` (`pais_idpais`),
  CONSTRAINT `fk_pelicula_pais1` FOREIGN KEY (`pais_idpais`) REFERENCES `pais` (`idpais`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pelicula`
--

LOCK TABLES `pelicula` WRITE;
/*!40000 ALTER TABLE `pelicula` DISABLE KEYS */;
/*!40000 ALTER TABLE `pelicula` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `peliculaActor`
--

DROP TABLE IF EXISTS `peliculaActor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `peliculaActor` (
  `pelicula_idpelicula` int NOT NULL,
  `actor_idactor` int NOT NULL,
  PRIMARY KEY (`pelicula_idpelicula`,`actor_idactor`),
  KEY `fk_pelicula_has_actor_actor1_idx` (`actor_idactor`),
  KEY `fk_pelicula_has_actor_pelicula1_idx` (`pelicula_idpelicula`),
  CONSTRAINT `fk_pelicula_has_actor_actor1` FOREIGN KEY (`actor_idactor`) REFERENCES `actor` (`idactor`),
  CONSTRAINT `fk_pelicula_has_actor_pelicula1` FOREIGN KEY (`pelicula_idpelicula`) REFERENCES `pelicula` (`idpelicula`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `peliculaActor`
--

LOCK TABLES `peliculaActor` WRITE;
/*!40000 ALTER TABLE `peliculaActor` DISABLE KEYS */;
/*!40000 ALTER TABLE `peliculaActor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `peliculaDirector`
--

DROP TABLE IF EXISTS `peliculaDirector`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `peliculaDirector` (
  `director_iddirector` int NOT NULL,
  `pelicula_idpelicula` int NOT NULL,
  PRIMARY KEY (`director_iddirector`,`pelicula_idpelicula`),
  KEY `fk_director_has_pelicula_pelicula1_idx` (`pelicula_idpelicula`),
  KEY `fk_director_has_pelicula_director1_idx` (`director_iddirector`),
  CONSTRAINT `fk_director_has_pelicula_director1` FOREIGN KEY (`director_iddirector`) REFERENCES `director` (`iddirector`),
  CONSTRAINT `fk_director_has_pelicula_pelicula1` FOREIGN KEY (`pelicula_idpelicula`) REFERENCES `pelicula` (`idpelicula`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `peliculaDirector`
--

LOCK TABLES `peliculaDirector` WRITE;
/*!40000 ALTER TABLE `peliculaDirector` DISABLE KEYS */;
/*!40000 ALTER TABLE `peliculaDirector` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `peliculaGenero`
--

DROP TABLE IF EXISTS `peliculaGenero`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `peliculaGenero` (
  `pelicula_idpelicula` int NOT NULL,
  `genero_idgenero` int NOT NULL,
  PRIMARY KEY (`pelicula_idpelicula`,`genero_idgenero`),
  KEY `fk_pelicula_has_genero_genero1_idx` (`genero_idgenero`),
  KEY `fk_pelicula_has_genero_pelicula1_idx` (`pelicula_idpelicula`),
  CONSTRAINT `fk_pelicula_has_genero_genero1` FOREIGN KEY (`genero_idgenero`) REFERENCES `genero` (`idgenero`),
  CONSTRAINT `fk_pelicula_has_genero_pelicula1` FOREIGN KEY (`pelicula_idpelicula`) REFERENCES `pelicula` (`idpelicula`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `peliculaGenero`
--

LOCK TABLES `peliculaGenero` WRITE;
/*!40000 ALTER TABLE `peliculaGenero` DISABLE KEYS */;
/*!40000 ALTER TABLE `peliculaGenero` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `resena`
--

DROP TABLE IF EXISTS `resena`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `resena` (
  `usuario_idusuario` int NOT NULL,
  `pelicula_idpelicula` int NOT NULL,
  `descripcion` varchar(45) DEFAULT NULL,
  `calificacion` int DEFAULT NULL,	
  PRIMARY KEY (`usuario_idusuario`,`pelicula_idpelicula`),
  KEY `fk_usuario_has_pelicula_pelicula1_idx` (`pelicula_idpelicula`),
  KEY `fk_usuario_has_pelicula_usuario_idx` (`usuario_idusuario`),
  CONSTRAINT `fk_usuario_has_pelicula_pelicula1` FOREIGN KEY (`pelicula_idpelicula`) REFERENCES `pelicula` (`idpelicula`),
  CONSTRAINT `fk_usuario_has_pelicula_usuario` FOREIGN KEY (`usuario_idusuario`) REFERENCES `usuario` (`idusuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `resena`
--

LOCK TABLES `resena` WRITE;
/*!40000 ALTER TABLE `resena` DISABLE KEYS */;
/*!40000 ALTER TABLE `resena` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `idusuario` int NOT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `contrasenia` text,
  `fechaNacimiento` date DEFAULT NULL,
  PRIMARY KEY (`idusuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-08-22 17:45:56
