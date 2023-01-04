<script setup>
import { ref } from "vue";
import { onMounted } from "vue";
import axios from "axios";
const content = ref("");

const emit = defineEmits(["createPost"]);

async function submitComment(event) {
  event.preventDefault();
  emit("createComment", content.value);
  content.value = "";
}
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
  <div></div>
</template>
