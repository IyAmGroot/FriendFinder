// ===============================================================================
// LOAD DATA
// ===============================================================================

var friendsData = require("../data/friends");



// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });



  // API POST Requests
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
    //1.  Find best match
    //2.  Add to array
    //3.  Pass back best match
    var newScores = [];
    var newItem = req.body;
    //convert score strings to ints
    req.body.scores.forEach(function(e){
        var newInt = parseInt(e);
        newScores.push(newInt);
    })
    newItem.scores = newScores;
   
    var best = 100;
    var bestFriend = {};
    for(var i=0; i <friendsData.length; i++){
        var score=0;
        for (var x=0; x<friendsData[i].scores.length; x++){
            score += Math.abs(parseInt(friendsData[i].scores[x]) - newScores[x]);
        }
        console.log(friendsData[i].name + " Score: " + score);
        if(score < best){
            best = score;
            bestFriend = friendsData[i];
        }

    }
    
    friendsData.push(newItem);


    res.json(bestFriend);
  });

  
};
