const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dashboard-routes.js');

router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/api/user', userRoutes);
router.use('/api/post', postRoutes);
router.use('/api/comment', commentRoutes);

module.exports = router;
