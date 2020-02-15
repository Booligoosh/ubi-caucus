<template>
  <div class="person-card">
    <div class="card-header">
      <img :src="imageUrl" :alt="person.name" loading="lazy" />
      <div class="card-header-text">
        <h3 class="name">{{ person.name }}</h3>
        <h4 class="area">{{ runningIn }}</h4>
      </div>
    </div>
    <div class="buttons">
      <a
        class="website"
        v-if="websiteLink"
        :href="websiteLink"
        target="_blank"
        rel="noopener"
        >Website</a
      >
      <a
        class="twitter"
        v-if="twitterLink"
        :href="twitterLink"
        target="_blank"
        rel="noopener"
        >Twitter</a
      >
      <a
        class="donate"
        v-if="person.donationLink"
        :href="person.donationLink"
        target="_blank"
        rel="noopener"
        >Donate</a
      >
    </div>
  </div>
</template>

<script>
import { padWithZeroes, stateNameFromAbbreviation } from "@/helperFunctions";

export default {
  props: {
    person: Object
  },
  computed: {
    imageUrl() {
      return `https://avatars.io/twitter/${this.person.twitterHandle}/medium`;
    },
    runningIn() {
      if (this.person.runningForPresident) {
        return `Running for president`;
      } else {
        if (this.person.district) {
          return `Running in ${this.person.state}-${padWithZeroes(
            this.person.district,
            2
          )}`;
        } else {
          return `Running in ${stateNameFromAbbreviation(this.person.state)}`;
        }
      }
    },
    websiteLink() {
      if (this.person.websiteLink) {
        if (
          this.person.websiteLink.startsWith(`http://`) ||
          this.person.websiteLink.startsWith(`https://`)
        ) {
          return this.person.websiteLink;
        } else {
          return `http://${this.person.websiteLink}`;
        }
      } else {
        return null;
      }
    },
    twitterLink() {
      if (this.person.twitterHandle) {
        return `https://twitter.com/${this.person.twitterHandle}`;
      } else {
        return null;
      }
    }
  }
};
</script>

<style scoped>
.person-card {
  padding: 1rem;
  border: 1px solid hsl(210, 29%, 90%);
  border-radius: 10px;
}
img {
  width: 80px;
  height: 80px;
  border-radius: 9px;
  object-fit: cover;
  object-position: center center;
  margin-right: 1rem;
}
.card-header {
  display: flex;
  align-items: center;
  cursor: default;
}
.name {
  margin: 0;
}
.area {
  font-weight: normal;
  margin: 0;
}
.buttons {
  display: flex;
  margin-top: 1rem;
}
.buttons a {
  border-radius: 5px;
  background: #eee;
  color: inherit;
  text-decoration: none;
  flex-grow: 1;
  text-align: center;
  padding: 0.5rem;
}
.buttons a:not(:last-child) {
  margin-right: 0.5rem;
}
a.donate {
  background: hsl(0, 100%, 69%);
  color: white;
}
a.twitter {
  background: hsl(203, 89%, 53%);
  color: white;
}
a.website {
  background: hsl(210, 29%, 24%);
  color: white;
}
</style>
