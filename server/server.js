require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const massive = require("massive");
const controller = require("./controller");
const app = express();

app.use(bodyParser.json());

massive('postgres://barstjalkwbudz:61e90ebcd978c2870e83df6ce5cb91c44c4a0430ff35f537774e2309c06e8a73@ec2-50-16-196-57.compute-1.amazonaws.com:5432/d7onjkq17cq10u?ssl=true')
  .then(connection => {
    app.set("db", connection);   // HAD TROUBLE GETTING THE DATABASE URL FROM ENV TO WORK HERE 
  })
  .catch(err => {
    console.log(err);
  });

app.get("/api/houses", controller.get);
app.post("/api/house", controller.post);
app.delete("/api/house/:id", controller.delete);

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
