/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Actor` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Actor_email_key` ON `Actor`(`email`);
