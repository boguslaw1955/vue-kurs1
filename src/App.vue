<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>Witaj w vue.js</h1>
    <ul>
          <li><router-link to="/">Strona główna</router-link></li>
          <li><router-link to="onas">O nas</router-link></li>
          <li><router-link to="kontakt">Kontakt</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>lcome to Your Vue.js App"/>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
