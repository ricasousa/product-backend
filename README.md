# Install PostgreSQL on MacOSX

Para este projeto, o PostgreSQL foi instalado via brew(Homebre).

## Install Postgres with Homebrew

```bash
$ brew install postgres
```

O comando abaixo é responsável por "start" o servidor.

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
$ createdb postgis_test
```

## Enable PostGIS

```bash
$ psql postgis_test
```
