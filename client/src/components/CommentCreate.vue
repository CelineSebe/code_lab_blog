<script setup>
import { ref } from "vue";
import axios from "axios";
const props = defineProps({
  postId: String,
});
const newComment = ref("");
async function sendComment(event) {
  event.preventDefault();
  console.log(newComment.value);

  await axios.post(`http://localhost:4001/posts/${props.postId}/comments`, {
    content: newComment.value,
  });
  newComment.value = "";
}
</script>

<template>
  <div class="CommentCreate">
    <div>
      <form @submit="sendComment">
        <div className="form-group">
          <label>New Comment</label>
          <input v-model="newComment" className="form-control" required />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>

<style scoped></style>
