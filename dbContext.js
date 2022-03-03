const config = require('./config');

const knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: `${config.db.name}`,
  },
});
  
module.exports = knex;






