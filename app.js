const express = require("express");
const cors = require("cors");
const router = require("./Routes/route");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger");
const {errHandle}=require('./Multer/multer.errorHandle');

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Multer View IMGS This path&Location
app.use("/profileIMG", express.static("upload/images"));

// swaggerUi Setup
app.use("/fahad", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/**
 * @swagger
 * /:
 *   get:
 *     summary: Get a message.
 *     responses:
 *       '200':
 *         description: Returns an object of persons.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/Person'
 */
app.get("/", (req, res) => {
  res.status(200).json({ message: "get Method Home Route" });
});

//All Route
app.use(router);

//Multer Error Handle
app.use(errHandle);

//Default Route
app.use((req, res, next) => {
  res.status(404).json({ message: "Route Not Found" });
});

// Server Error
app.use((req, res, next) => {
  res.status(500).json({ message: "Server Error" });
});

module.exports = app;
