<template>
  <div id="add-blog">
    <h2>Add a New Blog Post</h2>
    <form v-if="!submitted">
      <!-- lazy will update the deta when user use TAB or enter -->
      <label>Blog Title:</label>
      <input type="text" v-model.lazy="blog.title" required />
      <label>Blog Content:</label>
      <textarea v-model.lazy.trim="blog.content"></textarea>
      <div id="checkboxes">
        <label>A</label>
        <input type="checkbox" value="a" v-model="blog.categories" />
        <label>B</label>
        <input type="checkbox" value="b" v-model="blog.categories" />
        <label>C</label>
        <input type="checkbox" value="c" v-model="blog.categories" />
        <label>D</label>
        <input type="checkbox" value="d" v-model="blog.categories" />
      </div>
      <label>Author</label>
      <select v-model="blog.author">
        <option v-for="author in authors" :key="author">
          {{ author }}
        </option>
      </select>
      <button v-on:click.prevent="post">Submit</button>
    </form>

    <div v-if="submitted">
      <p>submit success</p>
    </div>

    <div id="preview">
      <h3>Preview blog</h3>
      <p>Blog title: {{ blog.title }}</p>
      <p>Blog content:</p>
      <p style="white-space: pre">{{ blog.content }}</p>
      <p>categories : {{ blog.categories }}</p>
      <p>Author : {{ blog.author }}</p>
    </div>
  </div>
</template>

<script>
// Imports

export default {
  data() {
    return {
      blog: {
        title: "",
        content: "",
        categories: [],
        author: "me",
      },
      authors: ["me", "notme", "bot"],
      submitted: false,
    };
  },
  methods: {
    post: function () {
      this.$http
        .post("https://jsonplaceholder.typicode.com/posts", {
          title: this.blog.title,
          body: this.blog.content,
          userId: 1,
        })
        .then(function (data) {
          console.log(data);
          this.submitted = true;
        });
    },
  },
};
</script>

<style>
#add-blog * {
  box-sizing: border-box;
}
#add-blog {
  margin: 20px auto;
  max-width: 500px;
}
label {
  display: block;
  margin: 20px 0 10px;
}
input[type="text"],
textarea {
  display: block;
  width: 100%;
  padding: 8px;
}
#preview {
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}
h3 {
  margin-top: 10px;
}

#checkboxes input {
  display: inline-block;
  margin-right: 10px;
}

#checkboxes label {
  display: inline-block;
  margin-right: 10px;
}
</style>
