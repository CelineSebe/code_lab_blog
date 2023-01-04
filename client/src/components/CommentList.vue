<script setup>
import axios from "axios";
import { onMounted } from "vue";
import { reactive } from "vue";
import { defineProps } from "vue";

const props = defineProps({
  postId: String,
});

const state = reactive({
  comments: {},
});

// const sortedComment = computed(() => {
//   let transformComments = [];
//   for (const comment of Object.values(state.comments)) {
//     transformComments.push(comment);
//   }
//   return transformComments;
// });

async function fetchComments() {
  const { data } = await axios.get(
    `http://localhost:4001/posts/${props.postId}/comments`
  );
  state.comments = data;
}

onMounted(() => {
  fetchComments();
});
</script>

<template>
  <div class="form-group">
    <div class="d-flex-column flex-grow flex-wrap justify-content-around">
      <div class="card">
        <h3>Comments</h3>
        <ul>
          <li v-for="comments of state.comments" :key="comments.id">
            <h4>{{ comments.content }}</h4>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
