<script setup>
import axios from "axios";
import { onMounted } from "vue";
import { reactive } from "vue";
import { computed } from "vue";
import CommentCreate from "./CommentCreate.vue";
import CommentList from "./CommentList.vue";

const sortedPosts = computed(() => {
  let transformPosts = [];
  for (const post of Object.values(state.posts)) {
    transformPosts.push(post);
  }
  return transformPosts;
});

const state = reactive({
  posts: {},
});
// const fruits = reactive([
//     "pommes", "poires", "bananes", "ananas"
// ])

async function fetchPosts() {
  // await axios.get('http://localhost:4001/posts')
  //         .then(function(response){
  //             console.log(response.data);

  //         })
  //         .catch(function(error){
  //             console.log(error);
  //         })
  // const { data } = await axios.get('http://localhost:4001/posts');
  // posts.value = data;
  const response = await axios.get("http://localhost:4001/posts");
  state.posts = response.data;
}

onMounted(() => {
  fetchPosts();
});
</script>

<template>
  <div class="form-group" @submit="fetchPosts">
    <!-- <span> {{ state.posts }} </span> -->
    <!-- <ul>
            <li v-for="(fruit, index) in fruits" :key="index">{{ fruit  }}</li>
        </ul> -->
    <div class="d-flex-column flex-grow flex-wrap justify-content-around">
      <div class="card" v-for="post of sortedPosts" :key="post.id">
        <div class="card-body">
          <h4>{{ post.title }}</h4>
          <CommentList :postId="post.id" />
          <CommentCreate :postId="post.id" />
        </div>
      </div>
    </div>
  </div>
</template>
