<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" @click="vibrate" />
    <br />
    <player-table />
  </div>
</template>

<script>
import PlayerTable from "./components/PlayerTable.vue";

export default {
  name: "app",
  methods: {
    vibrate() {
      navigator.vibrate(200);
    }
  },
  components: {
    PlayerTable
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
</style>
