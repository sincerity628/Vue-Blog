<template>
  <div id="nav-bar">
    <nav>
      <ul>
        <li>
          <router-link to="/" exact>Home</router-link>
        </li>
        <li>
          <router-link to="/new-blog" exact>Add Blog</router-link>
        </li>
      </ul>
    </nav>
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

#nav-bar {
  background-color: #be00ff;
  width: 100%;
  height: 60px;
  color: #fff;
  text-align: center;
}

ul {
  padding-top: 10px;
}

li {
  padding-top: 9px;
  display: inline-block;
  margin-right: 20px;
}

a{
  color: #fff;
  text-decoration: none;
  padding: 6px 30px;
  border-radius: 10px;
}

.router-link-active {
  background-color: #fff;
  color: #333;
}

</style>

<script>
export default {
  data: function() {
    return {

    }
  },
  computed: {

  },
  methods: {

  }
}
</script>
