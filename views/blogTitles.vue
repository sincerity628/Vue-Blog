<template>
<div id="show-blogs" v-theme="'narrow'">
  <h1>Some Blog Titles</h1>
  <input type="text" v-model="search" placeholder="Search Blogs Here" />
  <div id="single-blog" v-for="(blog, index) in filteredBlogs" :key="index">
    <h3 v-rainbow>{{ blog.title | to-uppercase }}</h3>
  </div>
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

#show-blogs {
  /* width: 60%;  */
  margin: 5% auto;
}

#single-blog {
  background-color: #eee;
  margin: 20px 0;
  padding: 20px;
}

input {
  width: 100%;
  height: 30px;
  margin-top: 20px;
  padding-left: 20px;
}
</style>

<script>
import filterMixin from '../mixins/filterMixin';

export default {
  data: function() {
    return {
      blogs: [],
      search: ""

    }
  },
  created: function() {
    let that = this;
    this.$http.get('https://jsonplaceholder.typicode.com/posts')
      .then(function(res) {
        // console.log(res.body);
        that.blogs = res.body.slice(0, 10);
        // console.log(that.blogs);

      })
      .catch(function(error) {
        console.log(error);
      });
  },
  methods: {

  },
  computed: {

  },
  filters: {
    'to-uppercase': function(data) {
      return data.toUpperCase();
    },
    'snippet': function(data) {
      return data.slice(0, 100) + '...';
    }
  },
  directives: {
    'rainbow': {
      bind: function(el, binding, vnode) {
        el.style.color = "#" + Math.random().toString().slice(2, 8);
      }
    }
  },
  mixins: [filterMixin]
}
</script>
