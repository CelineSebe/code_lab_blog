<script setup>
import axios from "axios";
import { ref } from "vue";
const title = ref("");

async function sendPost(event) {
  event.preventDefault();

  console.log("titre: ", title.value);
  axios
    .post("http://localhost:4001/posts", {
      title: title.value,
    })
    .then(function (response) {
      console.log(response);
      title.value = "";
    })
    .catch(function (error) {
      console.log(error);
    });
  // const response = await axios.post('http://localhost:4001/posts', {
  //     title : title,
  // });
  //     console.log("response", response)
}
</script>
<template>
  <div class="PostCreate">
    <h1>Create Post</h1>
    <div>
      <form @submit="sendPost">
        <div class="form-group">
          <label> {{ title || "title" }}</label>
          <input class="form-control" v-model="title" />
        </div>
        <button class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>
