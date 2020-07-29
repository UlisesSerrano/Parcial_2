const express = require("express");

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("You are on the hompage");
})
app.post("/post", (req, res) => {
    res.send(`Welcome ${req.body.user}`);
})
app.delete("/delete", (req, res) => {
    res.send("{delete: true}");
})
app.put("/put:userID", (req, res) => {

    res.send(`Task ${req.params.userID} has been updated`);

})
app.listen(PORT, () => {
    console.log("Server running on port: ", PORT)

})