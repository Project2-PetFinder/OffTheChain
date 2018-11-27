var router = require("express").Router();

 router.route("/file-upload").post(function(req, res) {
        if (error) throw error;
        console.log(result)
        res.json(result)
    })

    module.exports = router;