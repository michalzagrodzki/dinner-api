const { DEFAULT_PORT } = require("./../utils/constants");
const { version } = require("./../package.json");
const definition = {
  openapi: "3.0.0.",
  info: {
    title: "Dinners Express REST API",
    version,
    description: "REST API for serving and ordering dinners",
    license: {
      name: "MIT",
      url: "https://spdx.org/licenses/MIT.html",
    },
    contact: {
      name: "Michal Zagrodzki",
    },
  },
  servers: [
    {
      url: `http://localhost:${DEFAULT_PORT}/api/v1`,
      description: "Development server",
    },
  ],
};

module.exports = definition;
