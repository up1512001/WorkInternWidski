const express = require("express")
const { Parser } = require("../config/parser")
const authController = require("../controller/authController")
const Route = express.Router()

Route.get("/test", Parser,(req,res) => authController.test(req,res))
// n
Route.post("/n-queen", Parser , (req,res) => authController.NQueen(req,res))
// num
Route.post("/powof4",Parser,(req,res)=>authController.powOf4(req,res))
// Route.post("/permutation",Parser,(req,res)=>authController.permutations(req,res))
// Route.post('/allBs',Parser,(req,res)=>authController.allBinaryString(req,res));
// val
Route.post('/convertToBinary',Parser,(req,res)=>authController.convertToBinary(req,res));
// string str
Route.post('/palindrome',Parser,(req,res)=>authController.palindrome(req,res));

// s1 & s2 array required
Route.post('/anagram',Parser,(req,res)=>authController.anagramChecker(req,res));

module.exports =  Route