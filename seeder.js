const fs = require('fs');
const Bootcamp = require('./models/Bootcamp');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const colors = require('colors');

// Load env vars
dotenv.config({ path: './config/config.env' });

// connect to db
mongoose.connect(process.env.MONGO_URI);

// Read json files from bootcamps.json
const bootcamps = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/bootcamps.json`, 'utf-8')
);

// Insert data into the database
const importData = async () => {
  try {
    await Bootcamp.create(bootcamps);
    console.log('Data imported to database...'.green.inverse);
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

// Delete Data from the db
const deleteData = async () => {
  try {
    await Bootcamp.deleteMany();
    console.log('Data destroyed from database...'.red.inverse);
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

if (process.argv[2] === '-i') {
  importData();
} else if (process.argv[2] === '-d') {
  deleteData();
}
