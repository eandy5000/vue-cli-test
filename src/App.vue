<template>
  <div id="app">
    <header-tag></header-tag>
    <router-view></router-view>
    <footer-tag></footer-tag>
  </div>
</template>

<script>
import HeaderTag from './components/Header.vue'
import FooterTag from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    HeaderTag,
    FooterTag
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
