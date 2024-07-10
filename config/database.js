const development = require("./development");
const production = require("./production");

const env = process.env.NODE_ENV || "development";

const configs = {
  development: development.db,
  production: production.db,
};

module.exports = configs[env];
