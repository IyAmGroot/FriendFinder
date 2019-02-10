// ===============================================================================
// DATA
// Below data will hold all of the friends data
// ===============================================================================

var friendsArray = [
    {
      name: "SpongeBob",
      photo: "https://images.parenting.mdpcdn.com/sites/parenting.com/files/styles/story_detail/public/spongebob.gif?itok=5YcyxQSs@example.com",
      scores:[
      1,
      1,
      4,
      1,
      1,
      1,
      2,
      1,
      4,
      1
    ]
    },     
    {
      name: "Rick Sanchez",
      photo: "https://cdn.images.express.co.uk/img/dynamic/20/590x/secondary/Rick-and-Morty-seasons-1-to-3-are-on-Netflix-now-1444958.jpg?r=1533535173402",
      scores:[
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1
    ]
    }

  ];
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = friendsArray;