const authUser = require('./controller/authUser');
const express = require("express")
const { Parser } = require("../config/parser")
const Route = express.Router()


// app.post('/NQueen',parser,(req,response)=>{
//   let n = req.body.n;
//   const ans = solveNQueens(n);
//   console.log(ans);
//   if((n<4 || n>15) && n!=1) response.status(200).send('Enter Valid N Value');
//   else response.status(200).send(`${ans}`);
// })



Route.get('/test',Parser,(req,res)=>authUser.test);
Route.post("/NQueen", Parser,(req,res) => authUser.Nqueen(req,res))
// Route.post("/n-queen", Parser , (req,res) => authController.SignUp(req,res))



module.exports =  Route