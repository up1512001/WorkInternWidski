const { all } = require("../routes/authRoute");

var solveNQueens = function(n) {
    var res = [];
    // if (n === 1 || n >= 4) dfs(res, [], n, 0);
    // return res;
    // if(n<4 || n>15) return [];
    return dfs(res,[],n,0);
  };
  
  var dfs = function (res, points, n, index) {
    for (var i = index; i < n; i++) {
      if (points.length !== i) return;
      for (var j = 0; j < n; j++) {
        if (isValid(points, [i, j])) {
          points.push([i, j]);
          dfs(res, points, n, i + 1);
          // if (points.length === n) res.push(buildRes(points));
          if(points.length == n) return buildRes(points);
          points.pop();
        }
      }
    }
  };
  
  var buildRes = function (points) {
    var res = [];
    var n = points.length;
    for (var i = 0; i < n; i++) {
      res[i] = '';
      for (var j = 0; j < n; j++) {
        res[i] += (points[i][1] === j ? 'Q' : '.');
      }
    }
    return res;
  };
  
  var isValid = function (oldPoints, newPoint) {
    var len = oldPoints.length;
    for (var i = 0; i < len; i++) {
      if (oldPoints[i][0] === newPoint[0] || oldPoints[i][1] === newPoint[1]) return false;
      if (Math.abs((oldPoints[i][0] - newPoint[0]) / (oldPoints[i][1] - newPoint[1])) === 1) return false;
    }
    return true;
  };


  var permutationFinder = function(per,arr,ind){
    if(ind == arr.length){
        console.log(arr);
        per.push(arr);
        return;
    }else{
        for(var i=ind;i<arr.length;i++){
            var t = arr[ind];
            arr[ind] = arr[i];
            arr[i] = t;
            permutationFinder(per,arr,ind+1)
            t = arr[ind];
            arr[ind] = arr[i];
            arr[i] = t;
        }
    }
    
  }

  var generateStringsEach = function(n,x,allStr,k){
    if(n==k){
        allStr.push(x);
        return;
    }
    if(x[n-1]=='1'){
        x[n] = '0';
        generateStringsEach(n+1,x,allStr,k);
        x[n] = '1';
        generateStringsEach(n+1,x,allStr,k);
    }
    else if(x[n-1]=='0'){
        x[n] = '1';
        generateStringsEach(n+1,x,allStr,k);
        x[n] = '0';
        generateStringsEach(n+1,x,allStr,k);
    }

  }
  var generateStrings = function(n,allStr){
    if(n==0){
        return;
    }else{
        var x = new Array(n);
        x[0] = '0';
        generateStringsEach(1,x,allStr,n)
        x[0] = '1';
        generateStringsEach(1,x,allStr,n)
    }
  }

module.exports = {
    NQueen: async (req,res) => {
      const n = req.body.n;
      const ans = solveNQueens(n);
      console.log(ans);
      if((n<4 || n>15) && n!=1) res.status(200).send('Enter Valid N Value');
      else res.status(200).send(`${ans}`);
      
    },
    test: async(req,res) => {
        res.json("test")
    },
    powOf4 : async(req,res) => {
        const n = req.body.num;
        console.log(n);
        if(n !=0 && ((n&(n-1)) == 0) && !(n & 0xAAAAAAAA)) res.status(200).send(`Enter number ${n} is power of 4`)
        else res.status(200).send(`Enter number ${n} is NOT power of 4`)
    }, 
    permutations : async(req,res) =>{
        let arr = req.body.arr;
        let per = [];
        let ind = 0;
        permutationFinder(per,arr,ind);
        res.status(200).send(`${per}`);
    },
    allBinaryString: async(req,res) =>{
        var n = req.body.Bstring;
        let allStr = []
        generateStrings(n,allStr);
        res.status(200).send(`${allStr}`);
    },
    convertToBinary : async(req,res) =>{
        var val = req.body.val;
        var binary = [];
        while(val>0){
            if(1&val){
                binary.push('1');
            }else{
                binary.push('0');
            }
            val = (val>>1);
        }
        for(var i=0;i<binary.length/2;i++){
            var t = binary[i];
            binary[i] = binary[binary.length-i-1];
            binary[binary.length-i-1] = t;
        }
        res.status(200).send(`${binary}`);
    },
    palindrome : async(req,res) =>{
        var arr = req.body.str;
        var flg = true
        for(var i=0;i<arr.length/2;i++){
            if(arr[i]!=arr[arr.length-1-i]){
                console.log(i);
                flg = false
                break
            }
        }
        if(flg) res.status(200).send(`Enter String ${arr} is Palindrome `)
        else res.status(200).send(`Enter String ${arr} is Not palindrome`)
    },
    anagramChecker : async(req,res)=>{
        const s1 = req.body.s1;
        const s2 = req.body.s2;
        var a1 = new Array(256);
        for(var i=0;i<256;i++){
            a1[i] = 0;
        }
        // var a2 = new Array(26);
        for(var i=0;i<s1.length;i++){
            a1[s1[i]]++;
        }
        for(var i=0;i<s2.length;i++){
            a1[s2[i]]--;
        }
        var flg = true
        for(var i=0;i<256;i++){
            if(a1[i]!=0){
                flg = false
                break
            }
        }
        if(flg) res.status(200).send(`${s1} and ${s2} are anagrams`)
        else res.status(200).send(`${s1} and ${s2} are NOT anagrams`)

    }
    
}