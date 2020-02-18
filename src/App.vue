<template>
  <div id="app">
    <a
      class="open-ubi-banner"
      href="https://us.openubiproject.org"
      target="_blank"
      v-if="host !== `us.openubiproject.org`"
    >
      <div class="open-ubi-banner-inner">
        <img src="img/>=.svg" />
        <span class="open-ubi-banner-text">
          Site made by the Open UBI Project ↗</span
        >
      </div>
    </a>
    <div class="nav-wrapper" v-if="host !== `us.openubiproject.org`">
      <div id="nav" v-if="host === `support.us.openubiproject.org`">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <a
          href="https://github.com/Booligoosh/ubi-caucus#adding--editing-candidate-data"
          target="_blank"
          rel="noopener"
          >Add candidate</a
        >
      </div>
      <!-- <div id="nav" v-if="host === `us.openubiproject.org`">
        <router-link to="/">Home</router-link> |
        <a href="https://discordapp.com" target="_blank" rel="noopener"
          >Discord</a
        >
      </div> -->
    </div>
    <router-view class="page" />
  </div>
</template>

<script>
import { getHost } from "@/helperFunctions";

export default {
  computed: {
    host: getHost
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
#nav,
.open-ubi-banner-inner {
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

.open-ubi-banner {
  background: #243665;
  color: white;
  font-weight: 400;
  display: block;
  text-decoration: none;
}

.open-ubi-banner-inner {
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  opacity: 0.8;
  transition: opacity 200ms ease-in-out;
}

.open-ubi-banner img {
  height: 1rem;
  margin-right: 0.5rem;
}

.open-ubi-banner:hover .open-ubi-banner-inner {
  opacity: 1;
}
</style>
