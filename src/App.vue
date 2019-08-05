<template>
  <div id="app">
    <template>
      <b-tabs type="is-toggle" expanded>
        <b-tab-item label="Joueurs" icon="format-list-bulleted">
          <player-table />
        </b-tab-item>

        <b-tab-item label="Mon profil" icon="account">
          <player-profile />
        </b-tab-item>

        <b-tab-item label="Stats" icon="chart-pie">
          <img alt="Vue logo" src="./assets/logo.png" @click="vibrate" />
          <span>Click on image plz</span>
        </b-tab-item>
      </b-tabs>
    </template>
  </div>
</template>

<script>
import PlayerTable from "./components/PlayerTable.vue";
import PlayerProfile from "./components/PlayerProfile.vue";

export default {
  name: "app",
  methods: {
    vibrate() {
      navigator.vibrate(200);
    }
  },
  components: {
    PlayerTable,
    PlayerProfile
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

img:hover {
  cursor: pointer;
}

nav.tabs {
  margin: 20px;
}
</style>
