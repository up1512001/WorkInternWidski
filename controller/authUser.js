module.exports = {
    Nqueen : async(req,res) =>{
      let n = req.body.n;
      const ans = solveNQueens(n);
      console.log(ans);
      if((n<4 || n>15) && n!=1) response.status(200).send('Enter Valid N Value');
      else response.status(200).send(`${ans}`);
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
    
    },
    test: async(req,res) =>{
      res.status(200).send('hello world');
    },
}