<template>
  <div id="profile">
    <span v-if="!savedLicence">
      Je ne sais pas qui tu es... Indique le sur la page contenant la liste des
      joueurs.
      <button class=".button" @click="getPlayerDetails">XHR request</button>
    </span>

    <div v-else>
      <span>Salut {{ userName }} ça va ?</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "playerProfile",
  computed: {
    savedLicence() {
      return this.$store.getters.currentUser.licence_number || 0;
    },
    userName() {
      return this.$store.getters.currentUser.first_name;
    }
  },
  methods: {
    getPlayerDetails() {
      this.$store.dispatch('getPlayerDetails');
    }
  }
};
</script>

<style scoped></style>
