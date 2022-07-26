<template>
  <div class="wrapper">
    <ul>
      <li v-for="post in Posts" :key="post.id">
        <span>
          <b>{{ post.id }} : </b>
          {{ post.title }} - {{ post.body }} -
        </span>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "PostsList",
  props: ["id"],
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["Posts"])
  },
  async created() {
    this.fetchPosts(this.id);
  },
  methods: {
    ...mapActions(["fetchPosts"])
  }
};
</script>
<style></style>
