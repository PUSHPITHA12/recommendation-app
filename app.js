const express = require("express");
const app = express();

app.use(express.static("public"));

const items = [
 { name: "Laptop", category: "Electronics", price: 700 },
 { name: "Phone", category: "Electronics", price: 400 },
 { name: "Shoes", category: "Fashion", price: 50 },
 { name: "Watch", category: "Fashion", price: 120 }
];

app.get("/items", (req, res) => {

 let result = items;

 if (req.query.category) {
   result = result.filter(i => i.category == req.query.category);
 }

 if (req.query.sort == "price") {
   result = result.sort((a, b) => a.price - b.price);
 }

 res.json(result);

});

app.listen(3000, () => {
 console.log("Server running on port 3000");
});