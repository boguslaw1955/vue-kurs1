<template>
  <div id="app">
  <h1>witaj w vue</h1>
    <ul>
    <li><router-link to="/">Strona główna </router-link></li>
    <li><router-link to="/onas">O nas       </router-link></li>
    <li><router-link to="/kontakt">Kontakt</router-link></li>
  </ul>
    <router-view></router-view>
  </div>
</template>

<script>

  export default {
    name: 'App'}
</script>


