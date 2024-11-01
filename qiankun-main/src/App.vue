<template>
  <div id="app">
    <router-view></router-view>

    <router-link to="/" class="link">Home</router-link>

    <router-link to="/micro-vue/news" class="link">News</router-link>

    <router-link to="/micro-vue/newsDetail" class="link">NewsDetail</router-link>

    <router-link to="/micro-vue/sub-login" class="link">sub-login</router-link>

    <router-link to="/micro-vue/sub-news" class="link">sub-news</router-link>
    <!-- <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" /> -->

    <div id="micro-app-container"></div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',
  components: {
    // HelloWorld,
  },
};
</script>

<style>
#app {
  width: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.link {
  display: inline-block;
  margin: 0 18px;
}
</style>
