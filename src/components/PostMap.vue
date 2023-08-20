<template>
  <div class="container mt-5">
    <div class="row d-flex justify-content-center">
      <div class="col-lg-4 col-md-6 col-sm-12 d-flex">
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">
            <img
              :src="require('../assets/images/search_black_24dp.svg')"
              alt=""
              style="opacity: 0.2"
            />
          </span>
          <input
            type="text"
            class="form-control"
            v-model="author"
            placeholder="Filter by author"
          />
        </div>
      </div>
    </div>

    <div class="row" ref="masonry">
      <div
        style="background-color: white; margin: auto; text-align: center"
        v-if="posts.length === 0"
      >
        <p style="background-color: white">
          There are no post authors with this name in the database
        </p>
      </div>

      <post-card v-else v-for="post of posts" :key="post" :post="post" />
    </div>
  </div>
</template>

<script>
import PostCard from "@/components/PostCard";
import { useStore } from "vuex";
import { ref, computed } from "vue";

import Masonry from "masonry-layout";

export default {
  name: "PostMap",
  components: { PostCard },
  setup() {
    const store = useStore();
    const author = ref("");

    const posts = computed(() => {
      if (author.value === "") {
        return store.getters.getPost;
      } else {
        return store.getters.getPost.filter((post) =>
          post.userId.includes(author.value)
        );
      }
    });

    return {
      posts,
      author,
    };
  },
  mounted() {
    const masonry = this.$refs.masonry;
    new Masonry(masonry, {
      percentPosition: true,
    });
  },
  updated() {
    const masonry = this.$refs.masonry;
    new Masonry(masonry, {
      percentPosition: true,
    });
  },
};
</script>

<style scoped></style>
