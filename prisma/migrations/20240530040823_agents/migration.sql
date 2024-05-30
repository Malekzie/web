/*
  Warnings:

  - Added the required column `position` to the `Agents` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `agents` ADD COLUMN `position` VARCHAR(191) NOT NULL;
