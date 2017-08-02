export const GET_IMAGES_START = 'GET_IMAGES_START';
export const GET_IMAGES_FINISH = 'GET_IMAGES_FINISH';
export const GET_IMAGES_ERROR = 'SELECT_REDDIT';

// export const selectReddit = reddit => ({
//   type: SELECT_REDDIT,
//   reddit
// })
//
// export const invalidateReddit = reddit => ({
//   type: INVALIDATE_REDDIT,
//   reddit
// })
//
// export const requestPosts = reddit => ({
//   type: REQUEST_POSTS,
//   reddit
// })
//
// export const receivePosts = (reddit, json) => ({
//   type: RECEIVE_POSTS,
//   reddit,
//   posts: json.data.children.map(child => child.data),
//   receivedAt: Date.now()
// })
//
// const fetchPosts = reddit => dispatch => {
//   dispatch(requestPosts(reddit))
//   return fetch(`https://www.reddit.com/r/${reddit}.json`)
//     .then(response => response.json())
//     .then(json => dispatch(receivePosts(reddit, json)))
// }
//
// const shouldFetchPosts = (state, reddit) => {
//   const posts = state.postsByReddit[reddit]
//   if (!posts) {
//     return true
//   }
//   if (posts.isFetching) {
//     return false
//   }
//   return posts.didInvalidate
// }

export const fetchImages = () => async (dispatch, getState) => {
  dispatch({ type: GET_IMAGES_START });
    return Promise.resolve();
};
