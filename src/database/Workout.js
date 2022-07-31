const DB = require('./db.json');

const getAllWorkouts = () => {
    return DB.getAllWorkouts;
};

module.exports = { getAllWorkouts };