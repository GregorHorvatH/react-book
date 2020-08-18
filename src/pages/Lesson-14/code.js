export const code1 = `const reduxStateShape = {
  session: {
    user: {
      name: 'Mango',
      email: 'mango@gmail.com',
    },
    authenticated: true,
    error: null,
  },
  posts: {
    items: [],
    loading: false,
    selectedTags: [],
  },
};`;

export const code2 = `// posts-selectors.js
export const getAllPosts = state => state.posts.items;

export const isPostsLoading = state => state.posts.loading;

export const getPostById = (state, id) => {
  const posts = getAllPosts(state);

  return posts.find(post => post.id === id);
};

const getSelectedTags = state => state.posts.selectedTags;

export const getPostsWithTags = state => {
  const posts = getAllPosts(state);
  const tags = getSelectedTags(state);

  return posts.filter(post => tags.some(tag => post.tags.includes(tag)));
};

// session-selectors.js
export const getUserName = state => state.session.user.name;
export const isUserAuthenticated = state => state.session.authenticated;`;

export const code3 = `// PostsContainer.js
import { connect } from 'react-redux';
import Posts from 'path/to/posts';
import {
  getAllPosts,
  getPostsWithTags,
  isPostsLoading,
} from 'path/to/selectors';

const mapStateToProps = state => ({
  posts: getAllPosts(state),
  postsWithTags: getPostsWithTags(state),
  isLoading: isPostsLoading(state),
});

export default connect(
  mapStateToProps,
  null,
)(Posts);`;

export const code4 = `// SelectedPostContainer.js
import { connect } from 'react-redux';
import Post from 'path/to/post';
import { getPostById } from 'path/to/selectors';

const mapStateToProps = (state, props) => ({
  post: getPostById(state, props.id),
});

export default connect(
  mapStateToProps,
  null,
)(Posts);`;

export const code5 = `const memoize = fn => {
  const cache = {};

  return (...args) => {
    const stringifiedArgs = JSON.stringify(args);

    if (cache[stringifiedArgs]) {
      return cache[stringifiedArgs];
    }

    cache[stringifiedArgs] = fn(...args);

    return cache[stringifiedArgs];
  };
};`;

export const code6 = `npm install reselect`;

export const code7 = `import { createSelector } from 'reselect';

export const getAllPosts = state => state.posts.items;

export const isPostsLoading = state => state.posts.loading;

const getSelectedTags = state => state.posts.selectedTags;

export const getPostsWithTags = createSelector(
  [getAllPosts, getSelectedTags],
  (posts, tags) =>
    posts.filter(post => tags.some(tag => post.tags.includes(tag))),
);

export const getPostById = createSelector(
  [(state, id) => id, getAllPosts],
  (id, posts) => posts.find(post => post.id === id),
);

// session-selectors.js
export const getUserName = state => state.session.user.name;
export const isUserAuthenticated = state => state.session.authenticated;`;
