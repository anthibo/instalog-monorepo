-- CreateIndex
CREATE FULLTEXT INDEX `Action_name_idx` ON `Action`(`name`);

-- CreateIndex
CREATE FULLTEXT INDEX `Actor_name_email_idx` ON `Actor`(`name`, `email`);
