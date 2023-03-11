/*
  Warnings:

  - A unique constraint covering the columns `[occurred_at]` on the table `Event` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Event_occurred_at_key` ON `Event`(`occurred_at`);
