// Create web server for comments

//==================================

// Import module
const express = require('express');
const router = express.Router();
const commentsController = require(../controllers/comments.js)

router.get('/', commentsController.comments_list);
router.get('/create', commentsController.comments_create_get);
router.post('/create', commentsController.comments_create_post);
router.delete('/:id/delete', commentsController.comments_create_delete);