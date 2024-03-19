/*
  Warnings:

  - A unique constraint covering the columns `[activityID]` on the table `activities` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `activityID` to the `activities` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `activities` ADD COLUMN `activityID` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `activities_activityID_key` ON `activities`(`activityID`);
