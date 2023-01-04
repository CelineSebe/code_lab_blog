<script setup>
import axios from "axios";
import { reactive } from "vue";
import { onMounted } from "vue";
import PostCreate from "./components/PostCreate.vue";
import PostList from "./components/PostList.vue";

async function createPosts(title) {
  console.log(2);
  await axios.post("http://localhost:4001/posts/", {
    title: title,
  });
  await fetchPosts();
}

const state = reactive({
  posts: {},
});

async function fetchPosts() {
  const response = await axios.get("http://localhost:4001/posts");
  state.posts = response.data;
}

onMounted(() => {
  fetchPosts();
});

// async function sendPost(event) {
//   event.preventDefault();

//   console.log("titre: ", title.value);
//   axios
//     .post("http://localhost:4001/posts", {
//       title: title.value,
//     })
//     .then(function (response) {
//       console.log(response);
//       title.value = "";
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
//   // const response = await axios.post('http://localhost:4001/posts', {
//   //     title : title,
//   // });
//   //     console.log("response", response)
// }
</script>

<template>
  <div class="container">
    <PostCreate @createPost="createPosts"></PostCreate>
    <hr />
    <h1>Publications</h1>
    <PostList :posts="state.posts"></PostList>
  </div>
</template>

<style scoped></style>
