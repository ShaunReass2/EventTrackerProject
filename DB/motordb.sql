-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema motordb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `motordb` ;

-- -----------------------------------------------------
-- Schema motordb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `motordb` DEFAULT CHARACTER SET utf8 ;
USE `motordb` ;

-- -----------------------------------------------------
-- Table `motorcycle`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `motorcycle` ;

CREATE TABLE IF NOT EXISTS `motorcycle` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `year` INT NOT NULL,
  `make` VARCHAR(100) NOT NULL,
  `model` VARCHAR(100) NOT NULL,
  `weight_wet_pounds` INT NOT NULL,
  `load_capacity_pounds` INT NOT NULL,
  `fuel_capacity_gallons` DOUBLE NOT NULL,
  `fuel_consumption_mpg` DOUBLE NOT NULL,
  `range_in_miles` INT NOT NULL,
  `tire_pressure_psi` VARCHAR(50) NOT NULL,
  `route_name` VARCHAR(300) NOT NULL,
  `route_country` VARCHAR(100) NOT NULL,
  `route_region` VARCHAR(200) NOT NULL,
  `route_length_miles` INT NOT NULL,
  `route_comments` TEXT(500) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS motoruser@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'motoruser'@'localhost' IDENTIFIED BY 'motoruser';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'motoruser'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `motorcycle`
-- -----------------------------------------------------
START TRANSACTION;
USE `motordb`;
INSERT INTO `motorcycle` (`id`, `name`, `year`, `make`, `model`, `weight_wet_pounds`, `load_capacity_pounds`, `fuel_capacity_gallons`, `fuel_consumption_mpg`, `range_in_miles`, `tire_pressure_psi`, `route_name`, `route_country`, `route_region`, `route_length_miles`, `route_comments`) VALUES (1, 'Elsa', 2012, 'BMW', 'R1200GSA', 550, 350, 8.7, 40, 348, '38 Front / 42 Rear', 'Pan-American Highway', 'Canada to Argentina', 'Multiple', 19000, 'Multiple countries and continents. Terrain, climate, countries, and languages vary. Longest network of routes in the world. ');
INSERT INTO `motorcycle` (`id`, `name`, `year`, `make`, `model`, `weight_wet_pounds`, `load_capacity_pounds`, `fuel_capacity_gallons`, `fuel_consumption_mpg`, `range_in_miles`, `tire_pressure_psi`, `route_name`, `route_country`, `route_region`, `route_length_miles`, `route_comments`) VALUES (2, 'Hilde', 2019, 'BMW', 'R1250GSA', 560, 350, 7.6, 42, 319, '38 Front / 42 Rear', 'Washington State Backcountry Discovery Route (WABDR)', 'United States', 'Washington', 593, 'Overlanding route, ranging from mountainous to arid plains');
INSERT INTO `motorcycle` (`id`, `name`, `year`, `make`, `model`, `weight_wet_pounds`, `load_capacity_pounds`, `fuel_capacity_gallons`, `fuel_consumption_mpg`, `range_in_miles`, `tire_pressure_psi`, `route_name`, `route_country`, `route_region`, `route_length_miles`, `route_comments`) VALUES (3, 'Heide', 2008, 'BMW', 'F800ST', 430, 250, 4.2, 60, 252, '38 Front / 42 Rear', 'Alasksan-Canadian Highway (ALCAN)', 'Canada-United States', 'Washington, British Columbia, Yukon Territory, Alaska', 1382, 'Terrain varies, mostly asphalt, sections of loose and hard-packed gravel and soil');
INSERT INTO `motorcycle` (`id`, `name`, `year`, `make`, `model`, `weight_wet_pounds`, `load_capacity_pounds`, `fuel_capacity_gallons`, `fuel_consumption_mpg`, `range_in_miles`, `tire_pressure_psi`, `route_name`, `route_country`, `route_region`, `route_length_miles`, `route_comments`) VALUES (4, 'Alexandra', 2021, 'KTM', '1290 Super Adventure R', 545, 300, 7.2, 42, 302, '39 Front / 40 Rear', 'Carretera Austral (Ruta 7)', 'Chile', 'Aysén and Los Lagos', 770, 'Terrain varies, route ranges from asphalt to hard and loose gravel and soil');
INSERT INTO `motorcycle` (`id`, `name`, `year`, `make`, `model`, `weight_wet_pounds`, `load_capacity_pounds`, `fuel_capacity_gallons`, `fuel_consumption_mpg`, `range_in_miles`, `tire_pressure_psi`, `route_name`, `route_country`, `route_region`, `route_length_miles`, `route_comments`) VALUES (5, 'Emma', 2021, 'KTM', '890 Adventure Rally R', 470, 250, 5.1, 47, 239, '36 Front / 38 Rear', 'Ruta 40', 'Argentina', 'Jujuy to Santa Cruz', 3100, 'Terrain varies, route ranges from asphalt to hard and loose gravel and soil');
INSERT INTO `motorcycle` (`id`, `name`, `year`, `make`, `model`, `weight_wet_pounds`, `load_capacity_pounds`, `fuel_capacity_gallons`, `fuel_consumption_mpg`, `range_in_miles`, `tire_pressure_psi`, `route_name`, `route_country`, `route_region`, `route_length_miles`, `route_comments`) VALUES (6, 'Ada', 2021, 'KTM', '690 Enduro R', 450, 220, 4.7, 52, 244, '36 Front / 38 Rear', 'Trans-Siberian', 'Russia', 'Multiple', 6800, 'Terrain varies. Extreme weather conditions. Asphalt, hard-pack gravel and soil.  Long distances between fuel stations in remote regions. Extra fuel recommended. ');
INSERT INTO `motorcycle` (`id`, `name`, `year`, `make`, `model`, `weight_wet_pounds`, `load_capacity_pounds`, `fuel_capacity_gallons`, `fuel_consumption_mpg`, `range_in_miles`, `tire_pressure_psi`, `route_name`, `route_country`, `route_region`, `route_length_miles`, `route_comments`) VALUES (7, 'Hisae', 2008, 'Kawasaki', 'KLR650', 460, 240, 4.5, 54, 243, '36 Front / 38 Rear', 'Valle de Colca', 'Peru', 'Arequipa', 43, 'Mountainous, hard-packed gravel and loose dirt');
INSERT INTO `motorcycle` (`id`, `name`, `year`, `make`, `model`, `weight_wet_pounds`, `load_capacity_pounds`, `fuel_capacity_gallons`, `fuel_consumption_mpg`, `range_in_miles`, `tire_pressure_psi`, `route_name`, `route_country`, `route_region`, `route_length_miles`, `route_comments`) VALUES (8, 'Sakura', 2020, 'Honda', 'Africa Twin', 525, 278, 6.2, 45, 279, '36 Front / 38 Rear', 'Trans-Sahara Highway', 'Algeria to Nigeria', 'Multiple', 7500, 'Terrain varies. Extreme weather conditions. Multiple border crossings and languages. Asphalt, hard-pack gravel, loose sand. ');
INSERT INTO `motorcycle` (`id`, `name`, `year`, `make`, `model`, `weight_wet_pounds`, `load_capacity_pounds`, `fuel_capacity_gallons`, `fuel_consumption_mpg`, `range_in_miles`, `tire_pressure_psi`, `route_name`, `route_country`, `route_region`, `route_length_miles`, `route_comments`) VALUES (9, 'Akira', 2018, 'Suzuki', 'V-STROM 1050XT Adventure', 522, 285, 5.3, 47, 249, '38 Front / 42 Rear', 'Highway 1', 'Australia', 'Multiple', 9000, 'Terrain varies. Several sub-routes offering various conditions and terrain. Extreme weather conditions in some areas. Asphalt and hard-pack gravel to loose sand on sub-routes. ');
INSERT INTO `motorcycle` (`id`, `name`, `year`, `make`, `model`, `weight_wet_pounds`, `load_capacity_pounds`, `fuel_capacity_gallons`, `fuel_consumption_mpg`, `range_in_miles`, `tire_pressure_psi`, `route_name`, `route_country`, `route_region`, `route_length_miles`, `route_comments`) VALUES (10, 'Beth', 2021, 'Harley-Davidson', 'Pan America 1250 Special', 580, 350, 6.7, 39, 261, '38 Front / 42 Rear', 'Route 66', 'United States', 'Illinois to California', 2448, 'Terrain varies, asphalt, historic');

COMMIT;

