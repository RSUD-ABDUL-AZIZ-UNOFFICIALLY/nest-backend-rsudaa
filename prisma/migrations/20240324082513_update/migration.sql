/*
  Warnings:

  - The primary key for the `applicationlokers` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `applyId` on the `applicationlokers` table. All the data in the column will be lost.
  - You are about to drop the column `applyId` on the `applicationmagangs` table. All the data in the column will be lost.
  - You are about to alter the column `dateStart` on the `lokers` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `dateEnd` on the `lokers` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `dateStart` on the `magangs` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `dateEnd` on the `magangs` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - A unique constraint covering the columns `[id]` on the table `applicationLokers` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `applicationMagangs` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `updatedAt` to the `applicationLokers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `applicationMagangs` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `applicationLokers_applyId_key` ON `applicationlokers`;

-- DropIndex
DROP INDEX `applicationMagangs_applyId_key` ON `applicationmagangs`;

-- AlterTable
ALTER TABLE `applicationlokers` DROP PRIMARY KEY,
    DROP COLUMN `applyId`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `applicationmagangs` DROP COLUMN `applyId`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL,
    MODIFY `id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `lokers` MODIFY `dateStart` DATETIME NULL,
    MODIFY `dateEnd` DATETIME NULL;

-- AlterTable
ALTER TABLE `magangs` MODIFY `dateStart` DATETIME NULL,
    MODIFY `dateEnd` DATETIME NULL;

-- CreateIndex
CREATE UNIQUE INDEX `applicationLokers_id_key` ON `applicationLokers`(`id`);

-- CreateIndex
CREATE UNIQUE INDEX `applicationMagangs_id_key` ON `applicationMagangs`(`id`);
