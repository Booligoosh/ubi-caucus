<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view class="page" />
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch(`loadSpreadsheetData`);
  }
};
</script>

<style>
@import url("https://rsms.me/inter/inter.css");
html {
  font-family: "Inter", sans-serif;
}
@supports (font-variation-settings: normal) {
  html {
    font-family: "Inter var", sans-serif;
  }
}

#app {
  color: hsl(210, 29%, 24%);
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.page {
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
}
</style>
