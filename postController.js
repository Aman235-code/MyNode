const posts = [
  { id: 1, title: "Post One" },
  { id: 2, title: "Post two" },
];

const getPosts = () => {
  return posts;
};

export const getPostsLength = () => posts.length;

export default getPosts;
