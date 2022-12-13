const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));
const port = 3000;
app.get('/', (req, res) => {
    var days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var today = new Date();
    var CurrentDay=today.getDay();
   res.render("list",{kindOfDay:days[CurrentDay]});
});

app.listen(port, () =>
    console.log(`Example app listening on port ${port}!`));
