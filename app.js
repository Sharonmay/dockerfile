const express = require("express")
const app = express()


app.get("/", (req, res) => {
  res.json({name: "Guten", action: "kiss Sharon"})
})


app.listen(80)

