const express = require("express");
const bodyParser = require("body-parser");
const apiRoutes = require("./routes");
const mongoose = require("mongoose");

// set up express app
const app = express();

/*******************************
 * MIDDLEWARE
 *******************************/
// configuring static files for the application
app.use(express.static("public"));

//  You can use express.json or body-parser to attach the body to the request object
// app.use(express.json());
app.use(bodyParser.json());

//Database connection
mongoose
    .connect("mongodb://localhost/node-api")
    .then(() => {
        // listen for requests
        app.listen(process.env.port || 4000, () => console.log("now listening to requests"));
    })
    .catch((err) => console.log(err));

/*******************************
 * APPLICATION ROUTES
 *******************************/
app.get("/", function (req, res) {
    res.send({ name: "Yoshi", age: 40 });
});

app.use("/api", apiRoutes);

// Error Handling middleware
app.use(function (err, req, res, next) {
    res.status(422).send({
        error: err.message,
    });
});
