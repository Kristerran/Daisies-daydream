const sequelize = require('../config/connection');
const { User, Question, Options,Fig } = require('../models');

const userData = require('./userData.json');
const questionData = require('./question.json');
const optionData = require('./options.json')
const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const questions = await Question.bulkCreate(questionData, {
    individualHooks: true,
    returning: true,
  });

  const options = await Options.bulkCreate(optionData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
