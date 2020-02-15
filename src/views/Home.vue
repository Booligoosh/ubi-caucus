<template>
  <div class="home">
    <h1>Candidates supporting Universal Basic Income</h1>
    <input
      type="text"
      class="search"
      v-model="search"
      placeholder="Search by name or district code"
    />
    <div class="people">
      <PersonCard
        v-for="person of peopleToShow"
        :key="person.id"
        :person="person"
      />
    </div>
  </div>
</template>

<script>
import PersonCard from "@/components/PersonCard.vue";

export default {
  name: "Home",
  components: {
    PersonCard
  },
  data() {
    return {
      search: ``
    };
  },
  computed: {
    peopleToShow() {
      const people = this.$store.state.people;
      if (this.search) {
        return people.filter(person =>
          this.transformForSearch(`${person.name} ${person.area}`).includes(
            this.transformForSearch(this.search)
          )
        );
      } else {
        return people;
      }
    }
  },
  methods: {
    transformForSearch(string) {
      return string
        .toLowerCase()
        .replace(/-/g, ``) // So CA05 = CA-05
        .replace(/ /g, ``) // So CA 05 = CA-05
        .replace(/0/g, ``); // So CA-5 = CA-05
    }
  }
};
</script>

<style scoped>
.people {
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 1fr 1fr 1fr;
}

@media screen and (max-width: 930px) {
  .people {
    grid-template-columns: 1fr 1fr;
  }
}

@media screen and (max-width: 630px) {
  .people {
    grid-template-columns: 1fr;
  }
}

.search {
  margin-bottom: 2rem;
  padding: 1rem;
  border: none;
  font-size: 1em;
  border-radius: 5px;
  width: 100%;
  background: hsl(210, 29%, 90%);
}

.search::placeholder {
  color: inherit;
  opacity: 0.5;
}

.search:focus {
  outline: none;
  box-shadow: inset 0 0 0 1px hsl(210, 29%, 85%);
}
</style>
