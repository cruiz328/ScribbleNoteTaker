const router =require('express').Router();

const notesroute = require('./note-route');

router.use(notesroute);

module.exports = router;