const { Post } = require('../blog_scripts/models');

const postData = [
  {
    title: 'the bootcamp though',
    body: 'this has been quite the adventure.',
    user_id: 1
    
  },
  {
    title: 'the fun of learning to code',
    body: 'this challenge was that challenge.',
    user_id: 2
  },
  {
    title: 'the journey of coding ',
    body: 'where was I then, where am I now.',
    user_id: 3
  }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;