# Devcamper API

> Backend API for Devcamper application, a bootcamp directory website.

## Usage

Rename "config/config.env.env" to "config/config.env" and update the values on your own.

## Install Dependencies

```
npm install
```

## Run App

```
# To run in dev mode
npm run dev

# To run in prod mode
npm start
```

## Database Seeder

```
# Import all data from the "_data" folder and populate the database
node seeder -i

# Destroy all data from database
node seeder -d
```
