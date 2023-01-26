var express = require('express');
var router = express.Router();
const postSyncController = require("../controllers/post.sync.controller")
const postAsyncController = require("../controllers/post.async.controller")

/* GET home page. */
// router.get('/', (req, res, next) => {
//   res.send({ title: 'Welcome' });
// });

router.get('/sync', postSyncController.getPostIdsSync);

router.get('/sync/:id', postSyncController.getPostByIdSync);

router.get('/async', postAsyncController.getPostIdsAsync);

router.get('/async/:id', postAsyncController.getPostByIdAsync);

module.exports = router;

