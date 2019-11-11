const express = require("express");
const jsonData = require("./index.json");
const router = express.Router();
const multer = require("multer")();

router.post("/",multer.none(), (req, res) => {
    const requestData = req.body;
    const returnData = jsonData.filter(data => {
        return (requestData.internId === data.internId);
    });
    res.send(returnData);
});

module.exports = router;
