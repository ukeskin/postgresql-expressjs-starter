import repl from "repl";

import config from "../src/utils/config.js";
import app from "../src/app.js";
import { User } from "../src/models/init.js";
import UserService from "../src/services/user.js";

const main = async () => {
  process.stdout.write("Database and Express app initialized.\n");
  process.stdout.write("Autoimported modules: config, app, models, services\n");

  const r = repl.start("> ");
  r.context.config = config;
  r.context.app = app;
  r.context.models = {
    User,
  };
  r.context.services = {
    UserService,
  };

  r.on("exit", () => {
    process.exit();
  });

  r.setupHistory(".shell_history", () => {});
};

main();
