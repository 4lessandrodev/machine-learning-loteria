-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema loteria_db
-- -----------------------------------------------------
-- Banco de dados loteria caixas
DROP SCHEMA IF EXISTS `loteria_db` ;

-- -----------------------------------------------------
-- Schema loteria_db
--
-- Banco de dados loteria caixas
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `loteria_db` DEFAULT CHARACTER SET utf8 COLLATE utf8_bin ;
USE `loteria_db` ;

-- -----------------------------------------------------
-- Table `concursos`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `concursos` ;

CREATE TABLE IF NOT EXISTS `concursos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `data` DATE NOT NULL,
  `arrecadacao_total` DECIMAL(13,2) NOT NULL DEFAULT 0.00,
  `ganhadores_15_numeros` INT NOT NULL DEFAULT 0,
  `ganhadores_14_numeros` INT NOT NULL DEFAULT 0,
  `ganhadores_13_numeros` INT NOT NULL DEFAULT 0,
  `ganhadores_12_numeros` INT NOT NULL DEFAULT 0,
  `ganhadores_11_numeros` INT NOT NULL DEFAULT 0,
  `valor_rateio_15_numeros` DECIMAL(10,2) NOT NULL DEFAULT 0.00,
  `valor_rateio_14_numeros` DECIMAL(10,2) NOT NULL DEFAULT 0.00,
  `valor_rateio_13_numeros` DECIMAL(10,2) NOT NULL DEFAULT 0.00,
  `valor_rateio_12_numeros` DECIMAL(10,2) NOT NULL DEFAULT 0.00,
  `valor_rateio_11_numeros` DECIMAL(10,2) NOT NULL DEFAULT 0.00,
  `estimativa_premio` DECIMAL(10,2) NOT NULL DEFAULT 0.00,
  `valor_acumulado_15_numeros` DECIMAL(10,2) NOT NULL DEFAULT 0.00,
  `valor_acumulado_especial` DECIMAL(10,2) NOT NULL DEFAULT 0.00,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `numeros_sorteados`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `numeros_sorteados` ;

CREATE TABLE IF NOT EXISTS `numeros_sorteados` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `numero` INT(2) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `concursos_tem_numeros`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `concursos_tem_numeros` ;

CREATE TABLE IF NOT EXISTS `concursos_tem_numeros` (
  `concurso_id` INT NOT NULL,
  `numero_id` INT NOT NULL,
  PRIMARY KEY (`concurso_id`, `numero_id`),
  INDEX `fk_concursos_has_numeros_sorteados_numeros_sorteados1_idx` (`numero_id` ASC),
  INDEX `fk_concursos_has_numeros_sorteados_concursos_idx` (`concurso_id` ASC),
  CONSTRAINT `fk_concursos_has_numeros_sorteados_concursos`
    FOREIGN KEY (`concurso_id`)
    REFERENCES `concursos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_concursos_has_numeros_sorteados_numeros_sorteados1`
    FOREIGN KEY (`numero_id`)
    REFERENCES `numeros_sorteados` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `frequencias`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `frequencias` ;

CREATE TABLE IF NOT EXISTS `frequencias` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `frequencia` INT NOT NULL DEFAULT 0,
  `numero_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_frequencias_numeros_sorteados1_idx` (`numero_id` ASC),
  CONSTRAINT `fk_frequencias_numeros_sorteados1`
    FOREIGN KEY (`numero_id`)
    REFERENCES `numeros_sorteados` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

USE `loteria_db`;

DELIMITER $$

USE `loteria_db`$$
DROP TRIGGER IF EXISTS `atualizar_frequencia_mais` $$
USE `loteria_db`$$
CREATE TRIGGER atualizar_frequencia_mais AFTER INSERT ON concursos_tem_numeros FOR EACH ROW
BEGIN

	UPDATE frequencias SET frequencia = frequencias.frequencia + 1 
    WHERE numero_id = NEW.numero_id;

END$$


USE `loteria_db`$$
DROP TRIGGER IF EXISTS `atualizar_frequencia_menos` $$
USE `loteria_db`$$
CREATE TRIGGER atualizar_frequencia_menos AFTER DELETE ON concursos_tem_numeros FOR EACH ROW
BEGIN

	UPDATE frequencias SET frequencia = frequencias.frequencia - 1 
    WHERE numero_id = OLD.numero_id;

END$$


DELIMITER ;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `numeros_sorteados`
-- -----------------------------------------------------
START TRANSACTION;
USE `loteria_db`;
INSERT INTO `numeros_sorteados` (`id`, `numero`) VALUES (1, 1);
INSERT INTO `numeros_sorteados` (`id`, `numero`) VALUES (2, 2);
INSERT INTO `numeros_sorteados` (`id`, `numero`) VALUES (3, 3);
INSERT INTO `numeros_sorteados` (`id`, `numero`) VALUES (4, 4);
INSERT INTO `numeros_sorteados` (`id`, `numero`) VALUES (5, 5);
INSERT INTO `numeros_sorteados` (`id`, `numero`) VALUES (6, 6);
INSERT INTO `numeros_sorteados` (`id`, `numero`) VALUES (7, 7);
INSERT INTO `numeros_sorteados` (`id`, `numero`) VALUES (8, 8);
INSERT INTO `numeros_sorteados` (`id`, `numero`) VALUES (9, 9);
INSERT INTO `numeros_sorteados` (`id`, `numero`) VALUES (10, 10);
INSERT INTO `numeros_sorteados` (`id`, `numero`) VALUES (11, 11);
INSERT INTO `numeros_sorteados` (`id`, `numero`) VALUES (12, 12);
INSERT INTO `numeros_sorteados` (`id`, `numero`) VALUES (13, 13);
INSERT INTO `numeros_sorteados` (`id`, `numero`) VALUES (14, 14);
INSERT INTO `numeros_sorteados` (`id`, `numero`) VALUES (15, 15);
INSERT INTO `numeros_sorteados` (`id`, `numero`) VALUES (16, 16);
INSERT INTO `numeros_sorteados` (`id`, `numero`) VALUES (17, 17);
INSERT INTO `numeros_sorteados` (`id`, `numero`) VALUES (18, 18);
INSERT INTO `numeros_sorteados` (`id`, `numero`) VALUES (19, 19);
INSERT INTO `numeros_sorteados` (`id`, `numero`) VALUES (20, 20);
INSERT INTO `numeros_sorteados` (`id`, `numero`) VALUES (21, 21);
INSERT INTO `numeros_sorteados` (`id`, `numero`) VALUES (22, 22);
INSERT INTO `numeros_sorteados` (`id`, `numero`) VALUES (23, 23);
INSERT INTO `numeros_sorteados` (`id`, `numero`) VALUES (24, 24);
INSERT INTO `numeros_sorteados` (`id`, `numero`) VALUES (25, 25);

COMMIT;


-- -----------------------------------------------------
-- Data for table `frequencias`
-- -----------------------------------------------------
START TRANSACTION;
USE `loteria_db`;
INSERT INTO `frequencias` (`id`, `frequencia`, `numero_id`) VALUES (1, 0, 1);
INSERT INTO `frequencias` (`id`, `frequencia`, `numero_id`) VALUES (2, 0, 2);
INSERT INTO `frequencias` (`id`, `frequencia`, `numero_id`) VALUES (3, 0, 3);
INSERT INTO `frequencias` (`id`, `frequencia`, `numero_id`) VALUES (4, 0, 4);
INSERT INTO `frequencias` (`id`, `frequencia`, `numero_id`) VALUES (5, 0, 5);
INSERT INTO `frequencias` (`id`, `frequencia`, `numero_id`) VALUES (6, 0, 6);
INSERT INTO `frequencias` (`id`, `frequencia`, `numero_id`) VALUES (7, 0, 7);
INSERT INTO `frequencias` (`id`, `frequencia`, `numero_id`) VALUES (8, 0, 8);
INSERT INTO `frequencias` (`id`, `frequencia`, `numero_id`) VALUES (9, 0, 9);
INSERT INTO `frequencias` (`id`, `frequencia`, `numero_id`) VALUES (10, 0, 10);
INSERT INTO `frequencias` (`id`, `frequencia`, `numero_id`) VALUES (11, 0, 11);
INSERT INTO `frequencias` (`id`, `frequencia`, `numero_id`) VALUES (12, 0, 12);
INSERT INTO `frequencias` (`id`, `frequencia`, `numero_id`) VALUES (13, 0, 13);
INSERT INTO `frequencias` (`id`, `frequencia`, `numero_id`) VALUES (14, 0, 14);
INSERT INTO `frequencias` (`id`, `frequencia`, `numero_id`) VALUES (15, 0, 15);
INSERT INTO `frequencias` (`id`, `frequencia`, `numero_id`) VALUES (16, 0, 16);
INSERT INTO `frequencias` (`id`, `frequencia`, `numero_id`) VALUES (17, 0, 17);
INSERT INTO `frequencias` (`id`, `frequencia`, `numero_id`) VALUES (18, 0, 18);
INSERT INTO `frequencias` (`id`, `frequencia`, `numero_id`) VALUES (19, 0, 19);
INSERT INTO `frequencias` (`id`, `frequencia`, `numero_id`) VALUES (20, 0, 20);
INSERT INTO `frequencias` (`id`, `frequencia`, `numero_id`) VALUES (21, 0, 21);
INSERT INTO `frequencias` (`id`, `frequencia`, `numero_id`) VALUES (22, 0, 22);
INSERT INTO `frequencias` (`id`, `frequencia`, `numero_id`) VALUES (23, 0, 23);
INSERT INTO `frequencias` (`id`, `frequencia`, `numero_id`) VALUES (24, 0, 24);
INSERT INTO `frequencias` (`id`, `frequencia`, `numero_id`) VALUES (25, 0, 25);

COMMIT;

