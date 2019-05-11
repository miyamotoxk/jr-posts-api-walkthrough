const postModel = require('../models/post');

const addPost = (req,res) => {
  const {author, content} = req.body;
  const newPost = postModel.addPost({author, content});
  return res.status(201).json(newPost);
};

const getAllPost = (req,res) => {
  const posts = postModel.getAllPost();
  return res.json(posts);
};

const getPostById = (req,res) => {
  const {id} = req.params;
  const post = postModel.getPostById(id);
  return res.json(post);
};

const deletePostById = (req,res) => {
  const {id} = req.params;
  const deletedPost = postModel.deletePostById(id);
  return res.json(deletedPost);
};

const replacePostById = (req,res) => {
  const {id} = req.params;
  const {author, content} = req.body;
  const updatedPost = postModel.replacePostById(id,{author, content});
  return res.json(updatedPost);
};

const updatePostById = (req,res) => {
  const {id} = req.params;
  const {author, content} = req.body;
  const updatedPost = postModel.updatePostById(id,{author, content});
  return res.json(updatedPost);
};

module.exports = {
  addPost,
  getAllPost,
  getPostById,
  deletePostById,
  replacePostById,
  updatePostById
};