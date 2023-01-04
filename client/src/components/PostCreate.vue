<script setup>
import { ref } from "vue";
const title = ref("");

const emit = defineEmits(["createPost"]);

async function submitPost(event) {
  console.log(1);
  event.preventDefault();
  emit("createPost", title.value);
  title.value = "";
}
</script>
<template>
  <div class="PostCreate">
    <h1>Create Post</h1>
    <div>
      <form @submit="submitPost">
        <div class="form-group">
          <label> {{ title || "title" }}</label>
          <input class="form-control" v-model="title" />
        </div>
        <button class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>
