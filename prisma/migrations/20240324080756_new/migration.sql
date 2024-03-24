/*
  Warnings:

  - You are about to alter the column `dateStart` on the `lokers` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `dateEnd` on the `lokers` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `dateStart` on the `magangs` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `dateEnd` on the `magangs` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - Added the required column `jurusan` to the `applicationLokers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `applicationlokers` ADD COLUMN `jurusan` VARCHAR(500) NOT NULL;

-- AlterTable
ALTER TABLE `lokers` MODIFY `dateStart` DATETIME NULL,
    MODIFY `dateEnd` DATETIME NULL;

-- AlterTable
ALTER TABLE `magangs` MODIFY `dateStart` DATETIME NULL,
    MODIFY `dateEnd` DATETIME NULL;
