/*
  Warnings:

  - Added the required column `tanggalLahir` to the `applicationLokers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tanggalLahir` to the `applicationMagangs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `applicationlokers` ADD COLUMN `tanggalLahir` DATE NOT NULL,
    MODIFY `fileResume` VARCHAR(500) NULL,
    MODIFY `fileApply` VARCHAR(500) NULL,
    MODIFY `fileOther` VARCHAR(500) NULL;

-- AlterTable
ALTER TABLE `applicationmagangs` ADD COLUMN `tanggalLahir` DATE NOT NULL,
    MODIFY `fileResume` VARCHAR(500) NULL,
    MODIFY `fileApply` VARCHAR(500) NULL,
    MODIFY `fileOther` VARCHAR(500) NULL;
