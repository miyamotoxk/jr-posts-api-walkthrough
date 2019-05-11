const posts = [];
let currentId = 1;

const addPost = (post) => {
  const newPost = {...post, id: currentId++};
  posts.push(newPost);
  return newPost;
};

const getAllPost = () => {
  return JSON.parse(JSON.stringify(posts));
};

const getPostById = (id) => {
  return posts.find(i=>i.id===id);
};

const deletePostById = (id) => {
  const index = getPostIndex(id);
  return posts.splice(index,1);
};

const replacePostById = (id, newPost) => {
  const index = getPostIndex(id);
  const updatedPost = {...newPost, id: id};
  posts[index] = updatedPost;
  return updatedPost;
};

const updatePostById = (id, newPost) => {
  const index = getPostIndex(id);
  const prePost = posts[index];
  const {author, content} = newPost;
  let updatedPost = prePost;
  if(author&&content) {
    updatedPost = {...newPost, id: id};
  } else if(!content) {
    updatedPost = {author: author, content: prePost.content, id: id};
  } else if(!author) {
    updatedPost = {author: prePost.author, content: content, id: id};
  }
  posts[index] = updatedPost;
  return updatedPost;
};

const getPostIndex = (id) => {
  return posts.findIndex(i=>i.id===id);
};

const doesIdExist = (id) => {
  return getPostIndex(id) !== -1;
};

module.exports = {
  addPost,
  getAllPost,
  getPostById,
  deletePostById,
  replacePostById,
  updatePostById,
  doesIdExist
};