require("dotenv").config();

const express = require("express");
// const mongoose = require("mongoose");

const app = express();
const router = require("./routes/router");
const PORT = process.env.PORT;
// const dbURI = process.env.dbURI;

const errorHandler = require("./middleware/errorHandler");

// mongoose.connect(dbURI, { useNewUrlParser: true });

app.use(express.static(`${__dirname}/public`));

app.use(express.json());
app.use("/api", router);
app.use("/*", (req, res) => res.sendFile(`${__dirname}/public/index.html`));

app.use(errorHandler);

app.listen(PORT, () => console.log(`Express is running on port ${PORT}`));
