<template>
  <div id="app">
    <div class="nav-wrapper">
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <a
          href="https://github.com/Booligoosh/ubi-caucus/tree/store-data-in-repo#adding--editing-candidate-data"
          target="_blank"
          rel="noopener"
          >Add candidate</a
        >
      </div>
    </div>
    <router-view class="page" />
  </div>
</template>

<script>
export default {};
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

#nav {
  color: #9da4ac;
  cursor: default;
}

#nav a {
  font-weight: bold;
  text-decoration: none;
  color: inherit;
}

#nav a.router-link-exact-active {
  color: hsl(210, 29%, 24%);
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
