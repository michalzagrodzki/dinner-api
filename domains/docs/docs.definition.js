const definition = {
  openapi: "3.0.0.",
  info: {
    title: "Dinners Express REST API",
    version: "1.0.0.",
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
      url: "http://localhost:2000/api/v1",
      description: "Development server",
    },
  ],
};

module.exports = definition;
