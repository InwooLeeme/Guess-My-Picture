import {join } from "path";
import express from "express";

const app = express();
const PORT = 4000;

const handleGet = (req, res) =>{
    res.render("home");
}

app.set('view engine',"pug");
app.set('views',join(__dirname + '/views'));
app.use(express.static(join(__dirname,"static")));
app.get('/',handleGet);

app.listen(PORT,() => {
    console.log(`Server is running`);
})