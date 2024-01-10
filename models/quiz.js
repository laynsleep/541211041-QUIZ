module.exports = (sequelize, Sequelize) => {
    const Quiz = sequelize.define('quiz', {
        quiz: {
            type: sequelize.STRING,
        },
        a: {
            type: sequelize.STRING,
        },
        b: {
            type: sequelize.STRING,
        },
        c: {
            type: sequelize.STRING,
        },
        d: {
            type: sequelize.STRING,
        },
        key: {
            type: sequelize.STRING,
        },
        categoryId: {
            type: sequelize.INTEGER,
        },
        levelId: {
            type: sequelize.INTEGER,
        },
    });
    return Quiz;
}