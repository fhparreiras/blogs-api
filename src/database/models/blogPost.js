module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  },
  {
    tableName: 'BlogPosts',
    underscored: true,
  });

  BlogPost.associate = (models) => {
    BlogPost.belongsTo('User',
      { foreignKey: 'userId', as: 'user' })
  };

  return BlogPost;
};
