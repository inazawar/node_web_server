const express = require('express');
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "public")))
app.use(express.urlencoded({ extended: false }))

app.post('/api/v1/quiz', function (req, res) {
  const answer = req.body.answer;
  if(answer === "2" ) {
    // res.send("<h1>正解</h1>");
    res.redirect("/correct.html")
  } else {
    // res.send("不正解");
    res.redirect("/wrong.html")
  }
})

app.get('/api/v1/users', function (req, res) {
  res.send({
    name: "Mike",
    age: 30,
  })
})

const PORT = process.env.PORT || 3000;
app.listen(PORT ,function() {
  console.log("動いてます。")
});

console.log("最終行");