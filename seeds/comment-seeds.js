const { Comment } = require('../blog_scripts/models');

const commentData = [
  {
    body: "Cool",
    user_id: 1,
    post_id: 1
  },
  {
    body: "Good to know",
    user_id: 2,
    post_id: 2
  },
  {
    body: "Awesome",
    user_id: 3,
    post_id: 3
  }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;