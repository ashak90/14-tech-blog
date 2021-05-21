const router = require('express').Router();

const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const comentRoutes = require('./commentRoutes');


router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', comentRoutes);

module.exports = router;