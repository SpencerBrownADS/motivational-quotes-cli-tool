
const axios = require('axios');


axios.get("https://zenquotes.io/api/random")
.then(function (res) {


    console.log("\n\nHere's a motivational quote for you: \"" + res.data[0].q + "\"\n\n");
})
.catch(function (error) {

    console.log(error);
})