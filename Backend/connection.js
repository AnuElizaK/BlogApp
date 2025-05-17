const mongoose = require("mongoose");
mongoose //missing code inserted here
  .connect('mongodb+srv://anuek005:opsOfYI9FYsf1NFM@cluster0.l4vopgs.mongodb.net/BlogApp'
  )
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });