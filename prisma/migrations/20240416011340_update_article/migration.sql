/*
  Warnings:

  - You are about to drop the column `articlesID` on the `articles` table. All the data in the column will be lost.
  - You are about to alter the column `dateStart` on the `lokers` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `dateEnd` on the `lokers` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `dateStart` on the `magangs` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `dateEnd` on the `magangs` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - A unique constraint covering the columns `[articleID]` on the table `articles` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `articleID` to the `articles` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `articles_articlesID_key` ON `articles`;

-- AlterTable
ALTER TABLE `articles` DROP COLUMN `articlesID`,
    ADD COLUMN `articleID` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `lokers` MODIFY `dateStart` DATETIME NULL,
    MODIFY `dateEnd` DATETIME NULL;

-- AlterTable
ALTER TABLE `magangs` MODIFY `dateStart` DATETIME NULL,
    MODIFY `dateEnd` DATETIME NULL;

-- CreateIndex
CREATE UNIQUE INDEX `articles_articleID_key` ON `articles`(`articleID`);
