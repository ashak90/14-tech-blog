const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

Post.init(
    {
        title: DataTypes.STRING,
        body: DataTypes.STRING

    },
    {
        sequelize
    }
);

module.exports = Post;
