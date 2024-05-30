-- CreateTable
CREATE TABLE `users` (
    `no_wa` VARCHAR(100) NOT NULL,
    `fullName` VARCHAR(250) NOT NULL,
    `password` VARCHAR(250) NOT NULL,
    `token` VARCHAR(250) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `users_no_wa_key`(`no_wa`),
    PRIMARY KEY (`no_wa`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `activities` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `activityID` VARCHAR(191) NOT NULL,
    `title` VARCHAR(250) NOT NULL,
    `desc` VARCHAR(1000) NULL,
    `images` VARCHAR(1000) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `activities_activityID_key`(`activityID`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `articles` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `articleID` VARCHAR(191) NOT NULL,
    `title` VARCHAR(250) NOT NULL,
    `desc` VARCHAR(1000) NULL,
    `images` VARCHAR(1000) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `articles_articleID_key`(`articleID`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `announcements` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `announcementID` VARCHAR(191) NOT NULL,
    `title` VARCHAR(250) NOT NULL,
    `desc` VARCHAR(1000) NULL,
    `images` VARCHAR(1000) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `announcements_announcementID_key`(`announcementID`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `socmeds` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(250) NOT NULL,
    `link` VARCHAR(1000) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `socmeds_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `profiles` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(250) NOT NULL,
    `desc` VARCHAR(1000) NULL,
    `images` JSON NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `profiles_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `lokers` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(250) NOT NULL,
    `desc` VARCHAR(1000) NULL,
    `dateStart` VARCHAR(250) NULL,
    `dateEnd` VARCHAR(250) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `lokers_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `magangs` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(250) NOT NULL,
    `desc` VARCHAR(1000) NULL,
    `dateStart` VARCHAR(250) NULL,
    `dateEnd` VARCHAR(250) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `magangs_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `application_lokers` (
    `id` VARCHAR(191) NOT NULL,
    `nik` VARCHAR(100) NOT NULL,
    `no_wa` VARCHAR(100) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `fullName` VARCHAR(250) NOT NULL,
    `tanggalLahir` DATE NOT NULL,
    `lokerId` VARCHAR(191) NOT NULL,
    `sekolah` VARCHAR(500) NOT NULL,
    `jurusan` VARCHAR(500) NOT NULL,
    `jenjang` VARCHAR(100) NOT NULL,
    `address` VARCHAR(1000) NOT NULL,
    `fileResume` VARCHAR(500) NULL,
    `fileApply` VARCHAR(500) NULL,
    `fileOther` VARCHAR(500) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `application_lokers_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `application_magangs` (
    `id` VARCHAR(191) NOT NULL,
    `nik` VARCHAR(100) NOT NULL,
    `no_wa` VARCHAR(100) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `fullName` VARCHAR(250) NOT NULL,
    `tanggalLahir` DATE NOT NULL,
    `magangId` VARCHAR(191) NOT NULL,
    `sekolah` VARCHAR(500) NOT NULL,
    `jurusan` VARCHAR(500) NOT NULL,
    `jenjang` VARCHAR(100) NOT NULL,
    `address` VARCHAR(1000) NOT NULL,
    `fileResume` VARCHAR(500) NULL,
    `fileApply` VARCHAR(500) NULL,
    `fileOther` VARCHAR(500) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `application_magangs_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `laporan_tahunan` (
    `name` VARCHAR(191) NOT NULL,
    `desc` VARCHAR(1000) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `laporan_tahunan_name_key`(`name`),
    PRIMARY KEY (`name`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `file_laporan_tahunan` (
    `id` VARCHAR(250) NOT NULL,
    `tahun` INTEGER NOT NULL,
    `laporanTahunanName` VARCHAR(191) NOT NULL,
    `file` VARCHAR(1000) NOT NULL,
    `desc` VARCHAR(1000) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `file_laporan_tahunan_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `link_aplikasi` (
    `id` VARCHAR(250) NOT NULL,
    `name` VARCHAR(250) NOT NULL,
    `link` VARCHAR(1000) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `link_aplikasi_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `dasar_hukum` (
    `id` VARCHAR(250) NOT NULL,
    `name` VARCHAR(250) NOT NULL,
    `file` VARCHAR(1000) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `dasar_hukum_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `maklumat_pelayanan` (
    `id` VARCHAR(250) NOT NULL,
    `file` VARCHAR(1000) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `maklumat_pelayanan_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `application_lokers` ADD CONSTRAINT `application_lokers_lokerId_fkey` FOREIGN KEY (`lokerId`) REFERENCES `lokers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `application_magangs` ADD CONSTRAINT `application_magangs_magangId_fkey` FOREIGN KEY (`magangId`) REFERENCES `magangs`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `file_laporan_tahunan` ADD CONSTRAINT `file_laporan_tahunan_laporanTahunanName_fkey` FOREIGN KEY (`laporanTahunanName`) REFERENCES `laporan_tahunan`(`name`) ON DELETE RESTRICT ON UPDATE CASCADE;
