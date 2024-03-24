/*
  Warnings:

  - You are about to alter the column `dateStart` on the `lokers` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `dateEnd` on the `lokers` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - The primary key for the `magangs` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `magangId` on the `magangs` table. All the data in the column will be lost.
  - You are about to alter the column `dateStart` on the `magangs` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `dateEnd` on the `magangs` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - A unique constraint covering the columns `[id]` on the table `magangs` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX `magangs_magangId_key` ON `magangs`;

-- AlterTable
ALTER TABLE `lokers` MODIFY `dateStart` DATETIME NULL,
    MODIFY `dateEnd` DATETIME NULL;

-- AlterTable
ALTER TABLE `magangs` DROP PRIMARY KEY,
    DROP COLUMN `magangId`,
    MODIFY `id` VARCHAR(191) NOT NULL,
    MODIFY `dateStart` DATETIME NULL,
    MODIFY `dateEnd` DATETIME NULL,
    ADD PRIMARY KEY (`id`);

-- CreateTable
CREATE TABLE `applicationMagangs` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `applyId` VARCHAR(191) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `fullName` VARCHAR(250) NOT NULL,
    `magangId` VARCHAR(191) NOT NULL,
    `sekolah` VARCHAR(500) NOT NULL,
    `jurusan` VARCHAR(500) NOT NULL,
    `jenjang` VARCHAR(100) NOT NULL,
    `address` VARCHAR(1000) NOT NULL,
    `fileResume` VARCHAR(500) NOT NULL,
    `fileApply` VARCHAR(500) NOT NULL,

    UNIQUE INDEX `applicationMagangs_applyId_key`(`applyId`),
    UNIQUE INDEX `applicationMagangs_magangId_key`(`magangId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `magangs_id_key` ON `magangs`(`id`);

-- AddForeignKey
ALTER TABLE `applicationMagangs` ADD CONSTRAINT `applicationMagangs_magangId_fkey` FOREIGN KEY (`magangId`) REFERENCES `magangs`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
