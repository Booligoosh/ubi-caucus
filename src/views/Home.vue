<template>
  <div class="home">
    <h1>Candidates supporting Universal Basic Income</h1>
    <div class="people">
      <PersonCard
        v-for="person of $store.state.people"
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
  }
};
</script>

<style scoped>
.people {
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(3, 1fr);
}
</style>
