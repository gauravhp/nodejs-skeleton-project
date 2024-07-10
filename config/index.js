const development = require("./development");
const production = require("./production");
const database = require("./database");

const env = process.env.NODE_ENV || "development";

const configs = {
  development,
  production,
};

module.exports = {
  ...configs[env],
  database,
};
