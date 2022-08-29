const express =  require("express")
const bodyParser = require('body-parser')

const app = express()

const Auth = require("./routes/nQueen")

app.use("/api",Auth)

app.use(bodyParser.json());
const port = process.env.PORT || 5000

app.listen(port , ()=>{
    console.log(`listining on port ${port}`);
})
