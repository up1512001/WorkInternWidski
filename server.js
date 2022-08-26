const express = require('express')

const app = express()

app.listen(5000);

const solveNQueens = require('./controller/authUser');

const parser = require('./config/parser');

app.post('/NQueen',parser,(req,response)=>{
  let n = req.body.n;
  const ans = solveNQueens(n);
  console.log(ans);
  if((n<4 || n>15) && n!=1) response.status(200).send('Enter Valid N Value');
  else response.status(200).send(`${ans}`);
})


