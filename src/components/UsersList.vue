<template>
  <div class="wrapper">
    <md-card v-for="usuario in Users" :key="usuario.id">
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">{{ usuario.name }}</div>
          <div class="md-subhead">{{ usuario.email }}</div>
        </md-card-header-text>
        <md-card-media>
          <img
            :src="avatars[randomNumber()].image"
            alt="People"
            class="rounded"
          />
        </md-card-media>
      </md-card-header>
      <md-card-actions>
        <router-link :to="`/posts/${usuario.id}`">
          <md-button class="md-success">Ver Posts</md-button>
        </router-link>
      </md-card-actions>
    </md-card>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "UsersList",
  data() {
    return {
      avatars: [
        { image: require("@/assets/img/faces/fem-01.jpg") },
        { image: require("@/assets/img/faces/fem-02.jpg") },
        { image: require("@/assets/img/faces/fem-03.jpg") },
        { image: require("@/assets/img/faces/fem-04.jpg") },
        { image: require("@/assets/img/faces/fem-05.jpg") },
        { image: require("@/assets/img/faces/mas-01.jpg") },
        { image: require("@/assets/img/faces/mas-02.jpg") },
        { image: require("@/assets/img/faces/mas-03.jpg") },
        { image: require("@/assets/img/faces/fem-06.jpg") },
        { image: require("@/assets/img/faces/fem-07.jpg") }
      ]
    };
  },
  computed: {
    ...mapGetters(["Users"])
  },
  async created() {
    this.fetchUsers();
  },
  methods: {
    ...mapActions(["fetchUsers"]),
    randomNumber: function() {
      return Math.floor(Math.random() * 10);
    }
  }
};
</script>
<style></style>
