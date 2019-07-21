# Install PostgreSQL on MacOSX

Para este projeto, o PostgreSQL foi instalado via brew(Homebre).

## Install Postgres with Homebrew

```bash
$ brew install postgres
```

## Start PostgreSQL server

```bash
$ pg_ctl -D /usr/local/var/postgres start
```

## Check what version is running:

```bash
$ postgres -V
```

## Create Database

```bash
$ initdb /usr/local/var/postgres
```

## Create a new database

```bash
$ createdb [dbname]
```

## Enable PostGIS

```bash
$ psql [dbname]
```

## Command Line Utility

createuser [username] --superuser --createdb

createdb [dbname] --owner="owner" --password -U [username]
: When pass ``--password``s force createdb to prompt for a password before connecting to a database.

dropuser: deletes a user
dropdb: deletes a database

## psql commands

\du: List all users
\l | \list: List all databases
\d: List all tables on connected database
\d [tableName]: Shows the table schema
\password [username]: Set a new password for the username
\c dbname: Connect to another database