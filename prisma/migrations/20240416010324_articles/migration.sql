/*
  Warnings:

  - You are about to alter the column `dateStart` on the `lokers` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `dateEnd` on the `lokers` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `dateStart` on the `magangs` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `dateEnd` on the `magangs` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.

*/
-- AlterTable
ALTER TABLE `lokers` MODIFY `dateStart` DATETIME NULL,
    MODIFY `dateEnd` DATETIME NULL;

-- AlterTable
ALTER TABLE `magangs` MODIFY `dateStart` DATETIME NULL,
    MODIFY `dateEnd` DATETIME NULL;

-- CreateTable
CREATE TABLE `articles` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `articlesID` VARCHAR(191) NOT NULL,
    `title` VARCHAR(250) NOT NULL,
    `desc` VARCHAR(1000) NULL,
    `images` JSON NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `articles_articlesID_key`(`articlesID`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
