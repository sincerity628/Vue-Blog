export default {
  computed: {
    filteredBlogs: function() {
      let that = this;
      return this.blogs.filter(function(blog) {
        return blog.title.match(that.search);
      });
    }
  }
}
