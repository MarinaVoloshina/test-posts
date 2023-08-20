<template>
  <div class="container">
    <post-map />
  </div>
</template>

<script>
import PostMap from "@/components/PostMap";
import { getPosts } from "@/use/getPosts";

export default {
  name: "App",
  setup() {
    getPosts();
  },
  components: { PostMap },
};
</script>

<style lang="scss"></style>
