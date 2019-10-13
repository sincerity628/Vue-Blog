<template>
  <div id="vue-blog">
    <app-header></app-header>
    <router-view></router-view>
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
</style>

<script>
import newBlog from './views/newBlog.vue';
import showBlogs from './views/showBlogs.vue';
import appHeader from './components/appHeader.vue'
// import blogTitles from './components/blogTitles.vue';

export default {
  components: {
    'new-blog': newBlog,
    'show-blogs': showBlogs,
    'app-header': appHeader
  },
  data: function () {
    return {

    }
  },
  methods: {

  },
  computed: {

  }
}

</script>
