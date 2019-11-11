const express = require('express');
const router = express.Router();

const getInternDataDummy = require('./getInternDataDummy');
const getInternLastCommitDummy =  require('./getInternLastCommitDummy');
const getInternUserStory = require('./getInternUserStory');
const getInternUserStoryDetail = require('./getInternUserStoryDetail');

router.use('/getInternDataDummy.do', getInternDataDummy);
router.use('/getInternLastCommitDummy.do', getInternLastCommitDummy);
router.use('/getInternUserStory.do', getInternUserStory);
router.use('/getInternUserStoryDetail.do', getInternUserStoryDetail);


module.exports = router;
