const cron = require("node-cron");
const knex = require("knex")({
  client: "mssql",
  connection: {
    host: "database",
    user: "sa",
    password: "123@DDrootpassword",
    database: "my_db",
  },
});

console.log("INIT HEALTH-CHECK");

async function healthCheck() {
  try {
    await knex("SELECT 1");
  } catch (error) {
    console.log(error);
  }
}

cron.schedule("*/10 * * * * *", () => {
  healthCheck();
});
