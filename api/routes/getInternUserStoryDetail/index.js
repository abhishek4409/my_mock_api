const express = require("express");
const jsonData = require("./index.json");
const router = express.Router();
const multer = require("multer")();

router.post("/",multer.none(), (req, res) => {
    const requestData = JSON.parse(JSON.stringify(req.body));
    const returnData = jsonData.filter(data => {
        if(requestData.internId === data.internId) return data;
    });
    res.send(returnData);
});

module.exports = router;
