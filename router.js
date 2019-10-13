import Vue from 'vue';
import VueRouter from "vue-router";

import newBlog from './views/newBlog.vue';
import showBlogs from './views/showBlogs.vue';
import singleBlog from './views/singleBlog.vue';

Vue.use(VueRouter);

export default new VueRouter({
  // the dafault mode is hash
  // mode: 'hash',
  mode: 'history',
  routes: [
    {
      path: '/',
      name: "show-blogs",
      component: showBlogs
    },
    {
      path: '/new-blog',
      name: "new-blog",
      component: newBlog
    },
    {
      path: '/blog/:id',
      name: "blog",
      component: singleBlog
    }
  ]
})
