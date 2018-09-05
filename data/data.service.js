const db = require('_helpers/db');
const Data = db.Data;

module.exports = {
    getAll,
    create
};

async function getAll() {
    // get all data
    return await Data.find().select('-hash');
}


async function create(dataParam) {
    const data = new Data(dataParam);
    // save data
    await data.save();
}

