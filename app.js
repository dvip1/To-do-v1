const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const app = express();
let items=["Buy Food","Cook Food","Eat Food "];
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));
const port = 3000;
app.get('/', (req, res) => {
    let today = new Date();
    let options = {
        weekday: "long",
        day: 'numeric',
        month: 'long'
    };

    let day = today.toLocaleDateString("en-US", options);
    res.render("list", { kindOfDay: day,NewItem:items});
});
app.post('/',(req, res)=>{
    let item = req.body.new_item;
    items.push(item);
    res.redirect("/");
})

app.listen(port, () => 
    console.log(`App listening on port ${port}!`));
