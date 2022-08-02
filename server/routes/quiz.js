const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://lawScholar:lawScholar@cluster0.mobem.mongodb.net/userDB", { useNewUrlParser: true, useUnifiedTopology: true });


const quizSchema = new mongoose.Schema({
    questionText: String,
    answerOptions: [],
  })
  


  const Quiz = new mongoose.model("quiz", quizSchema);


const temp2 = new Quiz({
  questionText:"Which one of the following statements correctly distinguishes theft from extortion?",
  answerOptions:[
    {answeText:"In extortion, there is dishonest intention whereas in theft it is not there.",isCorrect:false},
    {answeText:"  In theft, there is dishonest intention whereas in extortion it is not there.",isCorrect:false},
    {answeText:" In theft, there is taking of property whereas in extortion there is the delivery of property. ",isCorrect:true},
    {answeText:" In theft, there is dishonest intention, whereas in extortion it is fraudulent intention.",isCorrect:false},
  ]
})
const temp3 = new Quiz({
  questionText:"If Actus non facit reum nisi mens sit rea is a cardinal principle of criminal law, then which one of the following statements correctly reflects the above principle? ",
  answerOptions:[
    {answeText:" CTo constitute a crime there must be actus reus and mens rea",isCorrect:true},
    {answeText:" Mens rea is an essential element of a crime and there cannot be a crime without mens rea.",isCorrect:false},
    {answeText:" Criminal liability under Indian Law always implies mens rea",isCorrect:false},
    {answeText:"  None of the Above.",isCorrect:false},
  ]
})
const temp4 = new Quiz({
  questionText:" A obtains property from B by saying that “your child is in the hands of my gang and will be put to death unless you send us ten lac rupees”. A commits...",
  answerOptions:[
    {answeText:"Criminal breach of trust",isCorrect:false},
    {answeText:"Robbery",isCorrect:false},
    {answeText:"Extortion",isCorrect:true},
    {answeText:"Theft",isCorrect:false},
  ]
})
const temp5 = new Quiz({
  questionText:"Which one of the following statements correctly defines the offense of criminal breach of trust? ",
  answerOptions:[
    {answeText:" Whoever dishonestly misappropriated any property for his own use, is guilty of criminal breach of trust",isCorrect:false},
    {answeText:"  Whoever is entrusted with the dominion of property dishonestly converts it as his property is guilty of criminal breach of trust.",isCorrect:true},
    {answeText:"Whoever uses any movable property in violation of law or legal contract commits criminal breach of trust.",isCorrect:false},
    {answeText:"None of the above.",isCorrect:false},
  ]
})
const temp6 = new Quiz({
  questionText:"The offense of theft becomes robbery when it is: ",
  answerOptions:[
    {answeText:" Coupled with force",isCorrect:false},
    {answeText:" Coupled with imminent danger to life.",isCorrect:true},
    {answeText:" Committed by five or more persons",isCorrect:false},
    {answeText:" Committed by two or more but less than five persons",isCorrect:false},
  ]
})
const temp7 = new Quiz({
  questionText:"Which one of the following is associated with Common intention?",
  answerOptions:[
    {answeText:"  Similar intention",isCorrect:false},
    {answeText:" Premeditated concert",isCorrect:false},
    {answeText:" Same intention",isCorrect:false},
    {answeText:" Unanimous decision in a meeting to do a particular act",isCorrect:true},
  ]
})
const temp8 = new Quiz({
  questionText:"When a criminal act is done by several persons in furtherance of the common intention of all each one of them is liable: ",
  answerOptions:[
    {answeText:"For an attempt to commit the act",isCorrect:false},
    {answeText:" Only for the part, each one has done",isCorrect:false},
    {answeText:"  For an abetment to commit the act",isCorrect:false},
    {answeText:" As if it was done by each one of them in a singular capacity",isCorrect:true},
  ]
})
const temp9 = new Quiz({
  questionText:"The principle of proximity to the crime under criminal law is irrelevant while deciding the homicide and murder: ",
  answerOptions:[
    {answeText:" Kidnapping and abduction",isCorrect:false},
    {answeText:" Theft and dacoity",isCorrect:false},
    {answeText:" Abetment and conspiracy ",isCorrect:true},
    {answeText:"  Culpable homicide and murder",isCorrect:false},
  ]
})

// temp2.save()

// temp3.save()

// temp4.save()

// temp5.save()

// temp6.save()

// temp7.save()

// temp8.save()

// temp9.save()










module.exports = Quiz