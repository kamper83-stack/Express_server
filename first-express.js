import express from "express";
const app = express();
app.get("/users", (req, res) => {
  res.json({ message: "Hello from Express!" });
});
app.get("/users/id", (req, res) => {
  res.json({ message: "Hello from Express!" });
});


app.listen(3000, () => console.log("Server running http://localhost:3000"));
