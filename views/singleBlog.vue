<template>
<div id="single-blog">
  <h1>{{ blog.title }}</h1>
  <article>{{ blog.content }}</article>
  <p>Author: {{ blog.author }}</p>
  <ul>
    <li v-for="(category, index) in blog.categories" :key="index">{{ category }}</li>
  </ul>
</div>
</template>

<style scoped>
*,
*:before,
*:after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

#single-blog {
  width: 60%;
  margin: 5% auto;
}

article {
  margin-top: 30px;
}

p {
  margin-top: 30px;
}

ul {
  margin-top: 20px;
}

li {
  list-style-position: inside;
}
</style>

<script>
export default {
  data: function() {
    return {
      id: this.$route.params.id,
      blog: {}
    }
  },
  computed: {

  },
  methods: {

  },
  created: function() {
    let that = this;
    this.$http.get('your-firebase-url' + that.id + '.json')
      .then(function(res) {
        // console.log(res);
        that.blog = res.body;
        console.log(that.blog);
      })
      .catch(function(error) {
        console.log(error);
      })
  }
}
</script>
