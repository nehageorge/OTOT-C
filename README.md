## MySQL installation and set up

1. Install mysql.
   a) If you used brew, you should start mySQL using `brew services start mysql`
2. Run `mysql -u root -p` and enter password.
3. Run `CREATE DATABASE xchange;`.
4. Run `CREATE USER 'xchange'@'localhost';`.
5. Run `GRANT ALL privileges on xchange.* to xchange@localhost;`.
6. Run `FLUSH privileges;`.
7. Run `exit`.

## For database changes

After Making changes to the database

1. Go to the api folder using `cd api`.
2. Create a migration script that describes the changes. Run `flask db migrate -m "Message about the changes"`.
3. To apply the changes to the database run `flask db upgrade`.

When a migration is made ensure that you perform the following steps before running the backend or frontend.

1. Go to the api folder using `cd api`.
2. Run `flask db migrate`.
3. Run `flask db upgrade`.

To seed the university table, run the following statement in mysql shell:
1. `LOAD DATA LOCAL INFILE '/path/to/xchange/api/seed_university.csv' INTO TABLE university FIELDS TERMINATED BY '|' LINES TERMINATED BY '\n' (id, name, competition, languages, program, terms, location);`

## Selenium Scraper setup

1. Go to https://sites.google.com/chromium.org/driver/downloads?authuser=0 and download the correct version of WebDriver depending on your chrome browser version

## Environment setup
1. Go to the root directory and create a `.env` file. 
2. In that file, write `SECRET="somestring"`, where "somestring" is a string of your choice.
3. Also write `PASSWORD="12345Abc@"` for forgot password functionality.

## How to run the backend

1. Go to the project root directory.
2. Run `cd api`.
3. Run `source venv/bin/activate`.
4. Run `pip3 install -r requirements.txt`
5. Run `flask run`.

## How to run the frontend

1. Go to the project root directory.
2. Run `yarn start`.
   a) If yarn command is not found, install yarn using brew, npm, or another installer and try again.
   b) If you get an error like `/bin/sh: react-scripts: command not found`, try running `yarn install`
3. Navigate to localhost:3000 on your browser.
