import Vue from "vue";
import Vuex from "vuex";
import http from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
    posts: []
  },
  getters: {
    Users(state) {
      return state.users;
    },
    Posts(state) {
      return state.posts;
    }
  },
  mutations: {
    setUsers(state, value) {
      state.users = value;
    },
    setPosts(state, value) {
      state.posts = value;
    }
  },
  actions: {
    async fetchUsers({ commit }, params = {}) {
      try {
        const response = await http.get(
          "https://jsonplaceholder.typicode.com/users",
          { params: params }
        );
        commit("setUsers", response.data);
      } catch (error) {
        console.log(error);
      }
    },
    async fetchPosts({ commit }, id, params = {}) {
      try {
        const response = await http.get(
          "https://jsonplaceholder.typicode.com/users/" + id + "/posts",
          { params: params }
        );
        commit("setPosts", response.data);
      } catch (error) {
        console.log(error);
      }
    },
    async fetch1User({ commit }, id, params = {}) {
      try {
        const response = await http.get(
          "https://jsonplaceholder.typicode.com/users/" + id,
          { params: params }
        );
        commit("setUsers", response.data);
      } catch (error) {
        console.log(error);
      }
    }
  },
  modules: {}
});
