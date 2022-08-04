const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://lawScholar:lawScholar@cluster0.mobem.mongodb.net/userDB", { useNewUrlParser: true, useUnifiedTopology: true });


const quizSchema = new mongoose.Schema({
    questionText: String,
    answerOptions: [],
  })
const blogSchema = new mongoose.Schema({
  heading:String,
  description:String
})


  const Quiz = new mongoose.model("quiz", quizSchema);
  const Blog = new mongoose.model("blog", blogSchema);



module.exports = {Quiz,Blog}
