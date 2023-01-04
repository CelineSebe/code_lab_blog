<script setup>
import axios from "axios";
import PostCreate from "./components/PostCreate.vue";
import PostList from "./components/PostList.vue";

async function sendPost(title) {
  await axios.post("http://localhost:4001/posts/", {
    title: title,
  });
  await fetchPosts();
}
</script>

<template>
  <div class="container">
    <PostCreate @sendPost="sendPost"></PostCreate>
    <hr />
    <h1>Publications</h1>
    <PostList></PostList>
  </div>
</template>

<style scoped></style>
