CREATE TABLE `tasks` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`title` text,
	`created_at` text DEFAULT CURRENT_TIMESTAMP
);
