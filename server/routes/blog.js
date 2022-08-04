var express = require("express");
var router = express.Router();
const model = require("./model");







router.get("/", function(req, res, next) {
    model.Blog.find({},function(err,found){
        res.json(found)
    })


});



module.exports = router;
