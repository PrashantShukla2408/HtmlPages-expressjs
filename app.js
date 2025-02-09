const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const contactRoutes = require("./routes/contact");
const successRoutes = require("./routes/success");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use("/shop", shopRoutes);
app.use(contactRoutes);
app.use(successRoutes);

app.use((req, res, next) => {
  console.log(path.join(__dirname, "views", "page-not-found.html"));
  res
    .status(404)
    .sendFile(path.join(__dirname, "views", "page-not-found.html"));
});

app.listen(3000);
