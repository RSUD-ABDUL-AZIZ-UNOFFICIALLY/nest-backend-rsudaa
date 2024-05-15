-- CreateTable
CREATE TABLE `laporanTahunan` (
    `name` VARCHAR(191) NOT NULL,
    `desc` VARCHAR(1000) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `laporanTahunan_name_key`(`name`),
    PRIMARY KEY (`name`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `fileLaporanTahunan` (
    `tahun` VARCHAR(191) NOT NULL,
    `laporanTahunanName` VARCHAR(191) NOT NULL,
    `file` VARCHAR(1000) NOT NULL,
    `desc` VARCHAR(1000) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `fileLaporanTahunan_tahun_key`(`tahun`),
    PRIMARY KEY (`tahun`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `fileLaporanTahunan` ADD CONSTRAINT `fileLaporanTahunan_laporanTahunanName_fkey` FOREIGN KEY (`laporanTahunanName`) REFERENCES `laporanTahunan`(`name`) ON DELETE RESTRICT ON UPDATE CASCADE;
