const { User } = require('../blog_scripts/models');

const userData = [
  {
    username: 'PeterQuinn1',
    password: 'test1'
    
  },
  {
    username: 'other test',
    password: 'test2'
  },
  {
    username: 'ip',
    password: 'test3'
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;