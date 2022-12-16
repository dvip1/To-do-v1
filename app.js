const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const date= require(__dirname+ "/date.js");
const app = express();
let items = [];
let workItems = [];
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));
const port = 3000;
app.get('/', (req, res) => {
    let day= date();
    res.render("list", { TaskType: day, NewItem: items, dir: '/' });
});
app.post('/', (req, res) => {
    if (req.body.button == 'Work') {
        let item = req.body.new_item;
        workItems.push(item);
        res.redirect("/work");
    }
    else {
        let item = req.body.new_item;
        items.push(item);
        res.redirect("/");
    }
    console.log(req.body)
})
app.get('/work', (req, res) => {
    res.render("list", { TaskType: "Work List", NewItem: workItems, dir: '/work' });
});
app.post('/work', (req, res) => {
    let item = req.body.new_item;
    workItems.push(item);
    res.redirect("/work");
});

app.listen(port, () =>
    console.log(`App listening on port ${port}!`));
