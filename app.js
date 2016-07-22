const express = require("express")
const app = express()

app.get("/", (req, res) => {
  res.json({name: "Guten", action: "kiss Sharon"})
})

app.listen(80)
console.log("Express server listening on port %d in %s mode", 80, app.settings.env);

