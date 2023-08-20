import { useStore } from "vuex";
import axios from "axios";

export async function getPosts() {
  const store = useStore();
  try {
    let posts = await axios.get("https://jsonplaceholder.typicode.com/posts");

    const authors = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );

    posts.data.forEach(
      (post) =>
        (post.userId = authors.data.find(
          (author) => author.id === post.userId
        ).name)
    );

    if (posts.data.length !== 0) {
      posts.data.forEach((post) => store.commit("setPosts", post));
    }
  } catch (e) {
    console.log(e.message);
  }
}
