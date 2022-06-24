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

const getPostById = async (id) => {
  const posts = await BlogPost.findOne({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' },
    ], 
    where: { id },
  });
  if (!posts) {
    const errorMessage = { status: 404, message: 'Post does not exist' };
    throw errorMessage;
  }
  return posts;
};

const updatePost = async (postId, userId, body) => {
  const postData = await getPostById(postId);
  if (postData.user.id !== userId) {
    const errorMessage = { status: 401, message: 'Unauthorized user' };
    throw errorMessage;
  }
  const { title, content } = body;
  if (!title || !content) {
    const errorMessage = { status: 400, message: 'Some required fields are missing' };
    throw errorMessage;
  }
  await BlogPost.update({ title, content, updated: new Date() },
    { where: { id: postId } });
  const updatedPost = await getPostById(postId);
  return updatedPost;
};

module.exports = { categoryExists, createPost, getAllPosts, getPostById, updatePost };
