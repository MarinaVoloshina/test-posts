import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      posts: [],
    };
  },
  getters: {
    getPost(state) {
      return state.posts;
    },
  },
  mutations: {
    setPosts(state, post) {
      state.posts.push(post);
    },
  },
});
