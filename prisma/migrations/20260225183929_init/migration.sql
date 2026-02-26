-- CreateTable
CREATE TABLE `MainHead` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SubHead` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `mainHeadId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Category` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `subHeadId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Item` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(200) NOT NULL,
    `shortName` VARCHAR(50) NULL,
    `brand` VARCHAR(100) NULL,
    `mainHeadId` INTEGER NOT NULL,
    `subHeadId` INTEGER NOT NULL,
    `categoryId` INTEGER NOT NULL,
    `liquorType` VARCHAR(50) NULL,
    `sizeType` VARCHAR(20) NULL,
    `ml` DECIMAL(8, 2) NULL,
    `bottlesPerCase` INTEGER NOT NULL DEFAULT 12,
    `barcode` VARCHAR(100) NULL,
    `exciseCode` VARCHAR(100) NULL,
    `minimumStock` INTEGER NOT NULL DEFAULT 0,
    `reorderLevel` INTEGER NOT NULL DEFAULT 0,
    `reorderDays` INTEGER NOT NULL DEFAULT 0,
    `godownLocation` VARCHAR(100) NULL,
    `shelfLocation` VARCHAR(100) NULL,
    `isAvailable` BOOLEAN NOT NULL DEFAULT true,
    `isFavourite` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ItemPrice` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `itemId` INTEGER NOT NULL,
    `purchasePricePerCase` DECIMAL(10, 2) NOT NULL,
    `purchasePricePerBottle` DECIMAL(10, 2) NOT NULL,
    `salesPricePerBottle` DECIMAL(10, 2) NOT NULL,
    `wholesalePrice` DECIMAL(10, 2) NULL,
    `mrp` DECIMAL(10, 2) NULL,
    `stockValuationMethod` VARCHAR(191) NOT NULL DEFAULT 'purchase',
    `effectiveFromDate` DATE NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ItemBarcode` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `itemId` INTEGER NOT NULL,
    `barcode` VARCHAR(100) NOT NULL,

    UNIQUE INDEX `ItemBarcode_barcode_key`(`barcode`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Supplier` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(200) NOT NULL,
    `gstNumber` VARCHAR(20) NULL,
    `contactPerson` VARCHAR(100) NULL,
    `phone` VARCHAR(20) NULL,
    `address` TEXT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PurchaseInvoice` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `supplierId` INTEGER NOT NULL,
    `invoiceNumber` VARCHAR(100) NOT NULL,
    `invoiceDate` DATE NOT NULL,
    `totalAmount` DECIMAL(12, 2) NOT NULL,
    `taxAmount` DECIMAL(12, 2) NOT NULL DEFAULT 0,
    `createdById` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PurchaseInvoiceItem` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `purchaseInvoiceId` INTEGER NOT NULL,
    `itemId` INTEGER NOT NULL,
    `quantityCases` INTEGER NOT NULL DEFAULT 0,
    `quantityBottles` INTEGER NOT NULL DEFAULT 0,
    `purchasePricePerCase` DECIMAL(10, 2) NULL,
    `purchasePricePerBottle` DECIMAL(10, 2) NULL,
    `totalAmount` DECIMAL(12, 2) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SalesInvoice` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `invoiceNumber` VARCHAR(100) NOT NULL,
    `invoiceDate` DATE NOT NULL,
    `counterId` INTEGER NOT NULL,
    `userId` INTEGER NOT NULL,
    `grossAmount` DECIMAL(12, 2) NOT NULL,
    `discountAmount` DECIMAL(12, 2) NOT NULL DEFAULT 0,
    `taxAmount` DECIMAL(12, 2) NOT NULL DEFAULT 0,
    `netAmount` DECIMAL(12, 2) NOT NULL,
    `paymentMode` ENUM('CASH', 'CARD', 'UPI', 'CREDIT') NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `SalesInvoice_invoiceNumber_key`(`invoiceNumber`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SalesInvoiceItem` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `salesInvoiceId` INTEGER NOT NULL,
    `itemId` INTEGER NOT NULL,
    `quantity` DECIMAL(10, 3) NOT NULL,
    `rate` DECIMAL(10, 2) NOT NULL,
    `freeQuantity` DECIMAL(10, 3) NOT NULL DEFAULT 0,
    `totalAmount` DECIMAL(12, 2) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `StockLedger` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `itemId` INTEGER NOT NULL,
    `transactionType` ENUM('PURCHASE', 'SALE', 'ADJUSTMENT', 'RETURN', 'TRANSFER') NOT NULL,
    `referenceId` INTEGER NULL,
    `referenceType` VARCHAR(50) NULL,
    `qtyIn` DECIMAL(10, 3) NOT NULL DEFAULT 0,
    `qtyOut` DECIMAL(10, 3) NOT NULL DEFAULT 0,
    `balanceAfter` DECIMAL(10, 3) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ItemConversion` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `itemId` INTEGER NOT NULL,
    `unitType` VARCHAR(30) NOT NULL,
    `conversionFactor` DECIMAL(10, 4) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Role` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `username` VARCHAR(50) NOT NULL,
    `passwordHash` VARCHAR(255) NOT NULL,
    `roleId` INTEGER NOT NULL,
    `isActive` BOOLEAN NOT NULL DEFAULT true,

    UNIQUE INDEX `User_username_key`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Counter` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `location` VARCHAR(100) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Godown` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `location` VARCHAR(200) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `SubHead` ADD CONSTRAINT `SubHead_mainHeadId_fkey` FOREIGN KEY (`mainHeadId`) REFERENCES `MainHead`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Category` ADD CONSTRAINT `Category_subHeadId_fkey` FOREIGN KEY (`subHeadId`) REFERENCES `SubHead`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Item` ADD CONSTRAINT `Item_mainHeadId_fkey` FOREIGN KEY (`mainHeadId`) REFERENCES `MainHead`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Item` ADD CONSTRAINT `Item_subHeadId_fkey` FOREIGN KEY (`subHeadId`) REFERENCES `SubHead`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Item` ADD CONSTRAINT `Item_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `Category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ItemPrice` ADD CONSTRAINT `ItemPrice_itemId_fkey` FOREIGN KEY (`itemId`) REFERENCES `Item`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ItemBarcode` ADD CONSTRAINT `ItemBarcode_itemId_fkey` FOREIGN KEY (`itemId`) REFERENCES `Item`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PurchaseInvoice` ADD CONSTRAINT `PurchaseInvoice_supplierId_fkey` FOREIGN KEY (`supplierId`) REFERENCES `Supplier`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PurchaseInvoice` ADD CONSTRAINT `PurchaseInvoice_createdById_fkey` FOREIGN KEY (`createdById`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PurchaseInvoiceItem` ADD CONSTRAINT `PurchaseInvoiceItem_purchaseInvoiceId_fkey` FOREIGN KEY (`purchaseInvoiceId`) REFERENCES `PurchaseInvoice`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PurchaseInvoiceItem` ADD CONSTRAINT `PurchaseInvoiceItem_itemId_fkey` FOREIGN KEY (`itemId`) REFERENCES `Item`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SalesInvoice` ADD CONSTRAINT `SalesInvoice_counterId_fkey` FOREIGN KEY (`counterId`) REFERENCES `Counter`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SalesInvoice` ADD CONSTRAINT `SalesInvoice_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SalesInvoiceItem` ADD CONSTRAINT `SalesInvoiceItem_salesInvoiceId_fkey` FOREIGN KEY (`salesInvoiceId`) REFERENCES `SalesInvoice`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SalesInvoiceItem` ADD CONSTRAINT `SalesInvoiceItem_itemId_fkey` FOREIGN KEY (`itemId`) REFERENCES `Item`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `StockLedger` ADD CONSTRAINT `StockLedger_itemId_fkey` FOREIGN KEY (`itemId`) REFERENCES `Item`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ItemConversion` ADD CONSTRAINT `ItemConversion_itemId_fkey` FOREIGN KEY (`itemId`) REFERENCES `Item`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_roleId_fkey` FOREIGN KEY (`roleId`) REFERENCES `Role`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
