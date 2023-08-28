const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "swagger with Http Methjod",
      description: "Fahad Himel",
      version: "1.0.1",
    },

    components: {
      schemas: {
        Person: {
          type: "object",
          properties: {
            id: {
              type: "integer",
            },
            name: {
              type: "string",
            },
            birth: {
              type: "date",
            },
          },
        },
        User: {
          type: "object",
          properties: {
            id: {
              type: "integer",
            },
            name: {
              type: "string",
            },
            birth: {
              type: "date",
            },
          },
        },
      },
    },
  },
  apis: ['./app.js','./Routes/User.router.js'],
};

const specs = swaggerJsdoc(options);

module.exports = specs;
