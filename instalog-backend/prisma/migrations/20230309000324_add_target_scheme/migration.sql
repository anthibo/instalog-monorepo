/*
  Warnings:

  - You are about to drop the column `email` on the `Event` table. All the data in the column will be lost.
  - Added the required column `target_id` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `target_name` to the `Event` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Event_email_key` ON `Event`;

-- AlterTable
ALTER TABLE `Event` DROP COLUMN `email`,
    ADD COLUMN `target_id` VARCHAR(191) NOT NULL,
    ADD COLUMN `target_name` VARCHAR(191) NOT NULL;
