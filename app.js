const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const routes = require("./src/modules/routes/order-routes");
const { PORT, URL } = require("./config");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/", routes);

const connect = () => {
  try {
    mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    app.listen(PORT, () => {
      console.log(`Port is listen on ${PORT}`);
    });
  } catch (error) {
    console.error("Error connected");
    process.exit(1);
  }
};

connect();
