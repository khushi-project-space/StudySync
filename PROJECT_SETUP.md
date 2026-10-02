# StudySync — XAMPP setup

1. Install and open XAMPP. Start **Apache** and **MySQL**.
2. Copy the `studysync` folder to `C:\xampp\htdocs\studysync`.
3. Open `http://localhost/phpmyadmin/`.
4. Choose **Import**, select `database/schema.sql`, and run it. This creates the `studysync` database and its tables.
5. Import `database/seed.sql` the same way to add fictional demo students and sample activity.
6. Open `config/database.php`. The defaults are host `localhost`, database `studysync`, user `root`, and a blank password. Change these if your MySQL setup differs.
7. Visit `http://localhost/studysync/`.

Demo accounts (all use password **password**):

- Student: `student@studysync.test`
- Admin: `admin@studysync.test`

The supplied schema uses `DROP TABLE` statements so reimporting it resets the local demo database. Export any data you want to keep first. The setup expects PHP 8+, PDO MySQL, and Apache with `.htaccess` support.

To show PHP errors during local development only, temporarily add `ini_set('display_errors','1'); error_reporting(E_ALL);` at the top of a PHP page. Remove it before sharing the project or placing it on a public server.
