const { getAllPosts, getByTerm } = require('../services/postService');

module.exports = async (req, res) => {
  const { q } = req.query;
  let result = [];
  if (!q) {
    result = await getAllPosts();
    res.status(200).json(result);
  }
  const searchResult = await getByTerm(q);
  if (searchResult !== undefined) {
    result = searchResult;
  }
  return res.status(200).json(result);
};
