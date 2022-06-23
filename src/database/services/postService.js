const { getAllCategories } = require('./categoryService');
const { BlogPost } = require('../models');

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
  
const createPost = async (title, content, userId) => BlogPost.create(
  { title, 
    content,
    userId,
    published: new Date(),
    updated: new Date(),
  },
  );

module.exports = { categoryExists, createPost };
