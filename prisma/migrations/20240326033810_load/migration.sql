/*
  Warnings:

  - You are about to alter the column `dateStart` on the `lokers` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `dateEnd` on the `lokers` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `dateStart` on the `magangs` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `dateEnd` on the `magangs` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `no_wa` on the `users` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `lokers` MODIFY `dateStart` DATETIME NULL,
    MODIFY `dateEnd` DATETIME NULL;

-- AlterTable
ALTER TABLE `magangs` MODIFY `dateStart` DATETIME NULL,
    MODIFY `dateEnd` DATETIME NULL;

-- AlterTable
ALTER TABLE `users` MODIFY `no_wa` INTEGER NOT NULL;
