/*
  Warnings:

  - You are about to drop the column `pendidikanAkhir` on the `applicationlokers` table. All the data in the column will be lost.
  - You are about to drop the column `perguruanTinggi` on the `applicationmagangs` table. All the data in the column will be lost.
  - You are about to alter the column `dateStart` on the `lokers` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `dateEnd` on the `lokers` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `dateStart` on the `magangs` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `dateEnd` on the `magangs` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - Added the required column `sekolah` to the `applicationLokers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sekolah` to the `applicationMagangs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `applicationlokers` DROP COLUMN `pendidikanAkhir`,
    ADD COLUMN `sekolah` VARCHAR(500) NOT NULL;

-- AlterTable
ALTER TABLE `applicationmagangs` DROP COLUMN `perguruanTinggi`,
    ADD COLUMN `sekolah` VARCHAR(500) NOT NULL;

-- AlterTable
ALTER TABLE `lokers` MODIFY `dateStart` DATETIME NULL,
    MODIFY `dateEnd` DATETIME NULL;

-- AlterTable
ALTER TABLE `magangs` MODIFY `dateStart` DATETIME NULL,
    MODIFY `dateEnd` DATETIME NULL;
