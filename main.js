import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueResource from 'vue-resource'

Vue.use(VueResource);

Vue.config.productionTip = false;

// Custom Directives
// Vue.directive('rainbow', {
//   bind: function(el, binding, vnode) {
//     el.style.color = "#" + Math.random().toString().slice(2,8);
//   }
// });

Vue.directive('theme', {
  bind: function(el, binding, vnode) {
    if(binding.value === "wide") {
      el.style.maxWidth = "90%";
    } else if(binding.value === "narrow") {
      el.style.maxWidth = "60%";
    }
    if(binding.arg === "column") {
      el.style.backgroundColor = "#e9e5e5";
      el.style.padding = "20px";
    }
  }
});

// Global Filters
// Vue.filter('to-uppercase', function(data) {
//   return data.toUpperCase();
// });

// Vue.filter('snippet', function(data) {
//   return data.slice(0, 100) + "...";
// })

new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')
