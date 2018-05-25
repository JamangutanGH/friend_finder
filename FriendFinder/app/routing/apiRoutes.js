var friendsData = require("../data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {

  
  console.log(friendsData);
  
  
  app.get("/api/friends", function (req, res) {
    res.json(friendsData);  
  });

 app.post("/api/friends", function(req, res){
     /**var friend = req.body;
        friend.push.(arrFriends)**/
 });
 
 
  
};









//Here we grab the form elements

//  $("#submit").on("click", function(event) {
  //   event.preventDefault();
  
  
  //   var newReservation = {
    //       "customerName": $("#reserve-name").val().trim(),
    //     "phoneNumber": $("#reserve-phone").val().trim(),
    //     "customerEmail": $("#reserve-email").val().trim(),
    //     "customerID": $("#reserve-unique-id").val().trim()
    //   };


// In this code below we create the Front-end JavaScript which "POSTS" our form data to our express server.
// In essence, when the user hits submit, jQuery grabs all of the fields then sends a post request to our api
// Our api recognizes the route (/api/tables)... and then runs the associated code (found in api-routes.js).
// In this case the associated code "saves" the data to the table-data.js file or waitinglist-data.js file

// $("#submit").on("click", function(event) {
    //   event.preventDefault();
    
    // Here we grab the form elements  
    //   var newReservation = {
    //       "customerName": $("#reserve-name").val().trim(),
    //     "phoneNumber": $("#reserve-phone").val().trim(),
    //     "customerEmail": $("#reserve-email").val().trim(),
    //     "customerID": $("#reserve-unique-id").val().trim()
    //   };


    // app.post("/api/friends", function (req, res) {
    //   console.log("inside post" +friendsData);
    //   var bestMatchScore;
    //   var bestMatchPerson;
    //   var tempMatchScore = 0;
  
     
    //   for (var i = 0; i < friendsData.length; i++) {
  
      
    //     for (var j = 0; j < req.body.scores.length; j++) {
    //       tempMatchScore += Math.abs(req.body.scores[j] - friendsData[i].scores[j]);
    //     }
  
    //     if (!bestMatchScore) {
    //       bestMatchScore = tempMatchScore;
    //     }else if (tempMatchScore < bestMatchScore) {
    //       bestMatchScore = tempMatchScore;
    //       bestMatchPerson = friendsData[i];
    //     }
  
  
    //     tempMatchScore = 0;
    //   }
  
    //   res.json(bestMatchPerson);
    //   friendsData.push(req.body);
    // });