var express = require('express');
var routes = require("./src/routes/crmRoutes");
var mongoose = require('mongoose');
var bodyParser = require('body-parser')


const app = express();
const PORT = 3000;

//mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('XXX Your Connection String comes here XXX', {
    useNewUrlParser: true
})

//bodyparser setup
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json())


routes(app);

app.get("/", (req, res) => {
    res.json({
        'one': 34
    })
})

app.listen(PORT, () => {
    console.log(`Server is up and running on ${PORT}`)
})