const express = require("express");
const { handlebars } = require("hbs");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "../public")));
app.set("view engine", "hbs");

let items = [];
let index = items.length + 1;

app.get("", (req, res) => {
  res.send("Hello");
});

app.get("/json", (req, res) => {
  res.json({
    name: "saad",
    desc: "Software Engineer",
  });
});

app.get("/dynamic-site", (req, res) => {
  index = items.length + 1;
  res.render("index", {
    name: "Saad",
    items,
  });
});

app.post("/add-item", (req, res) => {
  items.push({
    id: index,
    title: `Title Number ${index}`,
  });
  res.redirect("/dynamic-site");
});

app.post("/remove-item", (req, res) => {
  items.pop();
  res.redirect("/dynamic-site");
});

app.listen(8000, () => {
  console.log(`Listen to PORT 8000`);
});
