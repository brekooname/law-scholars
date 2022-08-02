var express = require("express");
var router = express.Router();
const model = require("./quiz");







router.get("/", function(req, res, next) {
    model.find({},function(err,found){
        res.json({"quiz":found,"length":found.length})
    })
    
    
});



module.exports = router;




