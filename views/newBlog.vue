<template>
<div id="new-blog">
  <h1>Adding A New Blog...</h1>
  <form v-if="!submitted">
    <label>New Blog Title : </label>
    <br />
    <input type="text" class="title-input input" v-model.lazy="blog.title" />
    <br />
    <label>New Blog Content : </label>
    <br />
    <textarea class="content-input input" v-model.lazy="blog.content"></textarea>
    <label>New Blog Categories : </label>
    <div class="checkboxes">
      <label>Technique</label>
      <input type="checkbox" value="tech" v-model="blog.categories" />
      <label>Daily Talk</label>
      <input type="checkbox" value="daily" v-model="blog.categories" />
      <label>Food</label>
      <input type="checkbox" value="food" v-model="blog.categories" />
      <label>Life Sketch</label>
      <input type="checkbox" value="life" v-model="blog.categories" />
      <label>Dear Diary</label>
      <input type="checkbox" value="diary" v-model="blog.categories" />
    </div>
    <label>Author : </label>
    <select v-model="blog.author">
      <option v-for="author in authors">{{ author }}</option>
    </select>
    <button @click.prevent="post">Add Blog!</button>
  </form>
  <h3 v-if="submitted">🎉Thanks for adding your blog! :)</h3>
  <div id="preview">
    <div class="preview-box">
      <h3>Blog Preview</h3>
      <h4>Blog Title: {{ blog.title }}</h4>
      <h4>Blog Content: </h4>
      <p>{{ blog.content }}</p>
      <h4>Blog Category:</h4>
      <ul>
        <li v-for="category in blog.categories">{{ category }}</li>
      </ul>
      <h4>Author: {{ blog.author }}</h4>
    </div>
  </div>
</div>
</template>

<style scoped>
*,
*:before,
*:after {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

button {
  margin-left: 20px;
}

#new-blog {
  width: 60%;
  margin: 5% auto;
}

.input {
  width: 100%;
  margin: 10px 0;
  padding: 10px 20px;
  border: 1px solid #9f9d9d;
  font-size: 1.1rem;
}

.title-input {
  height: 40px;
}

.content-input {
  height: 80px;
}

#preview {
  border: 0.5px solid #cfcccc;
  width: 100%;
  margin: 20px auto;
  color: #4b4a4a;
}

.preview-box {
  margin-left: 20px;
}

.checkboxes {
  margin: 10px auto;
}

.checkboxes input {
  margin: 0 20px 10px 5px;
}
</style>

<script>
export default {
  data: function() {
    return {
      blog: {
        title: "",
        content: "",
        categories: [],
        author: ""
      },
      authors: ["", "Xu", "Fei", "Becca"],
      submitted: false,
    }
  },
  methods: {
    post: function () {
      let that = this;
      this.$http.post('your-firebase-url', that.blog).then(function(res) {
        console.log(res);
        that.submitted = true;
      }).catch(function(error) {
        console.log(error);
      });
    }

  },
  computed: {

  }
}
</script>
