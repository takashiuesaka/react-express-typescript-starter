import express from "express";
import path from "path";
import config from "config";
import {logger} from "./logger";

import sample from "./mod-a/sample";

const app = express();

const serverConfig: any = config.get("server");

app.use(express.static(path.join("./", "dist")));

app.get("/api", (req, res) => {
  const value = sample();
  res.send({ api: "test", test: value });
});

app.get("*", function (req, res) {
  res.sendFile(path.join("./", "dist", "index.html"));
});

app.listen(serverConfig.port, () => {
  logger.info(`server starting -> [port] ${serverConfig.port} [env] ${process.env.NODE_ENV}`);
  // console.log(
  //   `server starting -> [port] ${serverConfig.port} [env] ${process.env.NODE_ENV}`
  // );
});
