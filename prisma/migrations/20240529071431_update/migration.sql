/*
  Warnings:

  - Made the column `file` on table `maklumatpelayanan` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `maklumatpelayanan` MODIFY `file` VARCHAR(1000) NOT NULL;
