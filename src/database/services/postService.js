const { getAllCategories } = require('./categoryService');
const { BlogPost, Category, PostCategory, User } = require('../models');

const categoryExists = async (categoryIds) => {
  const categoriesArr = await getAllCategories();
  const checkArr = [];
  categoryIds.forEach((categoryId) => {
    if (!categoriesArr.some((cat) => cat.id === categoryId)) {
      checkArr.push('false');
    } else {
      checkArr.push('true');
    }
  });
  const exists = checkArr.every((el) => el === 'true');
  if (!exists) {
    const errorMessage = { status: 400, message: '"categoryIds" not found' };
    throw errorMessage;
  }
};
  
const createPost = async (title, content, userId, categoryIds) => {
  const result = await BlogPost.create(
    { title, 
      content,
      userId,
      published: new Date(),
      updated: new Date(),
    },
  );
  categoryIds.forEach((categoryId) => PostCategory.create(
  {
    postId: result.id,
    categoryId,
  },
  ));
  return result;
};

const getAllPosts = async () => {
  const posts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' },
    ], 
});
  return posts;
};

module.exports = { categoryExists, createPost, getAllPosts };
