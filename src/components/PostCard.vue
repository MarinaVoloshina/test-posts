<template>
  <div class="col-lg-4 col-md-6 col-sm-12 my-2">
    <div class="card text-start">
      <div class="card-body">
        <h5 class="card-title text-primary">{{ post.title }}</h5>
        <p class="card-text">{{ post.body }}</p>
        <p class="card-text text-secondary">{{ post.userId }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostCard",
  props: ["post"],
};
</script>

<style scoped>
.card,
.card-body,
.card-title,
.card-text {
  background-color: white;
}
.card-title::first-letter {
  text-transform: uppercase;
}
.card-text::first-letter {
  text-transform: uppercase;
}
</style>
