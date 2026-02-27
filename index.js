import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/",async (req,res)=>{
    try {
        res.render("index.ejs",{joke: null});
    } catch (error) {
        console.log("Error: "+error);
    }
});

app.post("/joke",async (req,res)=>{
    try {
        const result = await axios.get("https://v2.jokeapi.dev/joke/Any?type=single");
        res.render("index.ejs",{joke:result.data.joke});
    } catch (error) {
        console.log("Error: "+error);
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
