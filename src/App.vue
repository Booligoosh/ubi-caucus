<template>
  <div id="app">
    <div class="nav-wrapper">
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
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

* {
  box-sizing: border-box;
}

body {
  margin: 0;
}

#app {
  color: hsl(210, 29%, 24%);
}

#nav a {
  font-weight: bold;
  opacity: 0.5;
  color: inherit;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  opacity: 1;
}

.page,
#nav {
  margin-left: auto;
  margin-right: auto;
  max-width: 1264px;
  padding: 2rem;
}

.nav-wrapper {
  background: white;
  margin-bottom: -3rem;
}

p a {
  text-decoration: none;
  font-weight: bold;
  color: hsl(203, 89%, 53%);
}
</style>
