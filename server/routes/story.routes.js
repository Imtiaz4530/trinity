const router = require('express').Router();

const {createStory, getAllStories} = require('../controllers/story.controller.js');

router.get('/', getAllStories);
router.post('/create', createStory);

module.exports = router;