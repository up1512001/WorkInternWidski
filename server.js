const express =  require("express")
const bodyParser = require('body-parser')

const app = express()




const Auth = require("./routes/authRoute")

app.use("/api",Auth)

app.use(bodyParser.json());
const port = process.env.PORT || 9000

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})