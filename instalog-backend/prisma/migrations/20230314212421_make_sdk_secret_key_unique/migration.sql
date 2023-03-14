/*
  Warnings:

  - A unique constraint covering the columns `[sdk_secret_key]` on the table `Actor` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Actor_sdk_secret_key_key` ON `Actor`(`sdk_secret_key`);
