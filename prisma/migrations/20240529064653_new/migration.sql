-- CreateTable
CREATE TABLE `maklumatPelayanan` (
    `id` VARCHAR(250) NOT NULL,
    `name` VARCHAR(250) NOT NULL,
    `file` VARCHAR(1000) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `maklumatPelayanan_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
