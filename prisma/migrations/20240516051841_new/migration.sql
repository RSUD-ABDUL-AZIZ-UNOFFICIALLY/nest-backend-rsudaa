/*
  Warnings:

  - The primary key for the `filelaporantahunan` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `tahun` on the `filelaporantahunan` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `filelaporantahunan` DROP PRIMARY KEY,
    MODIFY `tahun` INTEGER NOT NULL,
    ADD PRIMARY KEY (`tahun`);
