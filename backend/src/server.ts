import app from "./app.js";

const port = 3001;

app.listen(port, () => {
    console.log("api running on port", port)
});