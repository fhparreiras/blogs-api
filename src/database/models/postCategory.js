module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: { type: DataTypes.INTEGER, primaryKey: true },
    categoryId: { type: DataTypes.INTEGER, primaryKey: true },
  },
  {
    timestamps: false,
    tableName: 'PostCategories',
  });

  PostCategory.associate = (models) => {
    models.BlogPost.belongsToOne(models.Category,{
      as:'category',
      through: PostCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
    models.Category.belongsToOne(models.BlogPost,{
      as:'post',
      through: PostCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    })
  };

  return PostCategory;
};
