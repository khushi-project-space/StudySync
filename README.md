# StudySync

StudySync is a PHP 8 and MySQL study partner finder for students. It supports student profiles, skill and subject interests, transparent peer matching, study requests, partner messaging, groups, study sessions, notifications, ratings, and user reports. An administrator can review students, groups, reports, feedback, subjects, and skills.

## Stack and requirements

- PHP 8+ with PDO MySQL and Fileinfo enabled
- MySQL 5.7+ / MariaDB compatible with InnoDB and `CHECK` constraints
- Apache (XAMPP recommended)
- Bootstrap and Bootstrap Icons are loaded from CDN; an internet connection is needed for those presentation assets. Core PHP and database features are local.

## Install

Follow the beginner walkthrough in [PROJECT_SETUP.md](PROJECT_SETUP.md). In short: start Apache and MySQL, copy this folder into `C:\xampp\htdocs\studysync`, import `database/schema.sql` and then `database/seed.sql` in phpMyAdmin, confirm credentials in `config/database.php`, and browse to `http://localhost/studysync/`.

## Demo access

These fictional accounts are for local evaluation. Both have password `password`:

- Student: `student@studysync.test`
- Administrator: `admin@studysync.test`

The seed uses a PHP-compatible bcrypt hash and never stores a plain-text password.

## Features

- Session login, hashed passwords, role checks, CSRF tokens on state-changing forms, output escaping, and PDO prepared statements
- Registration creates a student profile; editable profile details include validated JPG/PNG/WEBP image upload (2 MB maximum), skills, subjects to help with or learn, study mode, availability, and languages
- Partner search runs filters in SQL and ranks up to 60 returned profiles using shared subjects, complementary help/learning intent, shared skills, study mode, availability, course, and semester; the page explains the contributing factors
- Request lifecycle: send, accept, reject, and cancel. Messaging is limited to accepted connections; conversations include timestamps and unread tracking
- Create, browse, join, and leave groups; group creators are automatically admins and cannot leave their own group
- Schedule sessions for a group or accepted partner; creators can cancel; upcoming sessions appear on dashboards
- Database notifications, accepted-partner ratings, user reports, and admin report status management
- Admin dashboard metrics and registration/popular-subject data, student status/deletion controls, group suspension, and subject/skill activation

## Project map

```text
config/       PDO database settings
includes/     Authentication helpers, CSRF, matching, shared layout
student/      Student dashboard and learning workflows
admin/        Admin dashboard and moderation/management pages
actions/      POST handlers for account and student actions
database/     Relational schema and fictional seed records
assets/       Shared CSS and JavaScript
uploads/      Profile image storage
```

## Security and local setup notes

Set a non-empty MySQL password if your local instance uses one. Keep uploads writable by Apache, but not executable. Do not use demo credentials on an internet-facing deployment. Before production use, add HTTPS, rate limiting, email verification, reset-token delivery, audit logs, stricter group membership permissions, and a deployment-specific upload policy. Schema import intentionally resets existing StudySync tables.

## Troubleshooting

- **Database connection error:** confirm MySQL is running and update the four constants in `config/database.php`.
- **PDO driver missing:** enable `pdo_mysql` in the PHP configuration used by Apache and restart Apache.
- **Images do not upload:** ensure `uploads/profiles` is writable by Apache and PHP's upload limit exceeds 2 MB.
- **Blank page:** check the Apache/PHP error log. For local development, see the temporary error-display instructions in `PROJECT_SETUP.md`.
- **Styles or icons missing:** Bootstrap assets use CDNs and require a network connection; PHP and MySQL features remain local.

## Current MVP limits

Password reset email is not configured, so `forgot-password.php` explains local recovery. The “remember me” option is not persisted beyond the PHP session. Session edit, group invitations, live polling chat, and session reminders are omitted; creators can schedule and cancel sessions. These functions require additional delivery or authorization infrastructure beyond this locally runnable MVP.
