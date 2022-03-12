const User = require('./User');
const Question = require('./Question')
const Options = require('./Options')
const Fig = require('./Fig');

User.hasMany(Fig, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Fig.belongsTo(User, {
    foreignKey: 'user_id'
})

Question.hasMany(Options, {
    foreignKey: 'question_id',
    onDelete: 'CASCADE'
})

Options.belongsTo(Question, {
    foreignKey: 'question_id'
})

module.exports = { User, Question, Options, Fig };