require("dotenv").config();
const app = require("./app");
const debug = require("debug")("node-dinner-api:server");
const http = require("http");
const { DEFAULT_PORT } = require("./utils/constants");

const port = process.env.PORT || DEFAULT_PORT;
app.set("port", port);

const server = http.createServer(app);

// Event listener for HTTP server "error" event.
function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }

  const bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
}

// Event listener for HTTP server "listening" event.
function onListening() {
  const addr = server.address();
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
  debug("Listening on " + bind);
}

server.listen(port, () => {
  console.log(`[server] Listening on port ${port}`);
  console.log(
    `[swagger] API documentation is available here: http://localhost:${port}/api/v1/api-docs/`
  );
});
server.on("error", onError);
server.on("listening", onListening);
