<script setup>
import { computed } from "vue";
import { defineProps } from "vue";
import CommentCreate from "./CommentCreate.vue";
import CommentList from "./CommentList.vue";

const sortedPosts = computed(() => {
  let transformPosts = [];
  for (const post of Object.values(props.posts)) {
    transformPosts.push(post);
  }
  return transformPosts;
});

const props = defineProps({ posts: Object });
</script>

<template>
  <div class="form-group" @submit="fetchPosts">
    <div class="d-flex flex-grow flex-wrap justify-content-around">
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
