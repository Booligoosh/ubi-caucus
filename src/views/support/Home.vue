<template>
  <div class="home">
    <h1>Candidates supporting Universal Basic Income</h1>
    <p class="explainer">
      Everyone on this list has agreed to the
      <a href="https://us.openubiproject.org/pledge"
        >UBI Caucus member pledge</a
      >
    </p>
    <input
      id="search"
      type="text"
      class="search"
      v-model="search"
      placeholder="Search by name, state or district"
      autocomplete="off"
    />
    <label for="search" class="search-label"
      >Search by name, state or district</label
    >
    <div class="loading-candidates" v-if="people.length === 0">
      Loading candidates &hellip;
    </div>
    <div class="people" v-else>
      <PersonCard
        v-for="person of peopleToShow"
        :key="person.id"
        :person="person"
      />
    </div>
  </div>
</template>

<script>
import { stateNameFromAbbreviation, shuffleArray } from "@/helperFunctions";
import PersonCard from "@/components/PersonCard.vue";
import yaml from "js-yaml";

export default {
  components: {
    PersonCard
  },
  data() {
    return {
      search: ``,
      people: []
    };
  },
  created() {
    this.loadCandidates();
  },
  computed: {
    peopleToShow() {
      const people = this.people;
      if (this.search) {
        return people.filter(person =>
          this.transformForSearch(
            [
              person.name,
              person.state,
              stateNameFromAbbreviation(person.state),
              person.district,
              person.state + person.district,
              stateNameFromAbbreviation(person.state) + person.district
            ].join(` `)
          ).includes(this.transformForSearch(this.search))
        );
      } else {
        return people;
      }
    }
  },
  methods: {
    async loadCandidates() {
      const yamlText = await fetch(
        "https://data.us.openubiproject.org/candidates.yaml"
      ).then(r => r.text());
      const candidatesArray = yaml.safeLoad(yamlText);
      this.people = shuffleArray(candidatesArray);
    },
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
h1 {
  margin-top: 0;
}

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

.explainer {
  margin-top: 0;
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

.search-label {
  display: none;
}

.loading-candidates {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
}
</style>
