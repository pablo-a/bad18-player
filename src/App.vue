<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />

    <!-- Search Bar -->
    <b-field label="Filtrer par nom">
        <b-input v-model="nameFilter" rounded placeholder="Chercher joueur"></b-input>
    </b-field>

    <!-- Some options to toggle -->
    <div class="control is-flex">
        <b-switch v-model="showPoints">Montrer CPPH</b-switch>
    </div>
   
    <b-table
          :data="filteredPlayers"
          :bordered="true"
          :striped="true"
          :narrowed="false"
          :hoverable="true"
          :loading="false"
          :focusable="false"
          :mobile-cards="true"
          @click="copyLicence"
    >

          <template slot-scope="props">

              <b-table-column field="first_name" label="Prénom" centered>
                  {{ props.row.first_name }}
              </b-table-column>

              <b-table-column field="last_name" label="Nom" centered sortable>
                  {{ props.row.last_name }}
              </b-table-column>

              <b-table-column label="Sexe" centered sortable>
                  <b-icon pack="fas"
                      :icon="props.row.gender === 'H' ? 'mars' : 'venus'">
                  </b-icon>
                  {{ props.row.gender }}
              </b-table-column>

              <b-table-column label="Licence" class="licence">
                  <b-icon pack="fas"
                      :icon="'id-badge'">
                  </b-icon>
                  {{ props.row.licence_number }}
              </b-table-column>

              <b-table-column field="simple_points" label="Simple" sortable numeric centered>
                <b-tag type="is-danger" v-if="props.row.simple_rank.startsWith('N')">{{props.row.simple_rank}}</b-tag>
                <b-tag type="is-info" v-if="props.row.simple_rank.startsWith('R')">{{props.row.simple_rank}}</b-tag>
                <b-tag type="is-success" v-if="props.row.simple_rank.startsWith('D')">{{props.row.simple_rank}}</b-tag>
                <b-tag type="is-warning" v-if="props.row.simple_rank.startsWith('P')">{{props.row.simple_rank}}</b-tag>
                <p v-if="showPoints"> {{props.row.simple_points}}</p>
              </b-table-column>

              <b-table-column field="double_points" label="Double" sortable numeric centered>
                <b-tag type="is-danger" v-if="props.row.double_rank.startsWith('N')">{{props.row.double_rank}}</b-tag>
                <b-tag type="is-info" v-if="props.row.double_rank.startsWith('R')">{{props.row.double_rank}}</b-tag>
                <b-tag type="is-success" v-if="props.row.double_rank.startsWith('D')">{{props.row.double_rank}}</b-tag>
                <b-tag type="is-warning" v-if="props.row.double_rank.startsWith('P')">{{props.row.double_rank}}</b-tag>
                <p v-if="showPoints"> {{props.row.double_points}}</p>
              </b-table-column>

              <b-table-column field="double_points" label="Mixte" sortable numeric centered>
                <b-tag type="is-danger" v-if="props.row.mixed_rank.startsWith('N')">{{props.row.mixed_rank}}</b-tag>
                <b-tag type="is-info" v-if="props.row.mixed_rank.startsWith('R')">{{props.row.mixed_rank}}</b-tag>
                <b-tag type="is-success" v-if="props.row.mixed_rank.startsWith('D')">{{props.row.mixed_rank}}</b-tag>
                <b-tag type="is-warning" v-if="props.row.mixed_rank.startsWith('P')">{{props.row.mixed_rank}}</b-tag>
                <p v-if="showPoints"> {{props.row.double_points}}</p>
              </b-table-column>

          </template>

          <template slot="empty">
                <section class="section">
                    <div class="content has-text-grey has-text-centered">
                        <p>
                            <b-icon
                                icon="emoticon-sad"
                                size="is-large">
                            </b-icon>
                        </p>
                        <p>Aucun résultat</p>
                    </div>
                </section>
            </template>

      </b-table>

  </div>
</template>

<script>
import players from "./assets/joueurs.json";

export default {
  name: "app",
  data() {
    return {
      players,
      nameFilter: '',
      showPoints: false
    }
  },
  computed: {
    players_cleaned() {
      return this.players.map(player => {
        player.simple_points = parseFloat(player.simple_points)
        player.double_points = parseFloat(player.double_points)
        player.mixed_points = parseFloat(player.mixed_points)
        return player
      })
    },
    filteredPlayers() {
      return this.players.filter(player => {
        return player.first_name.toUpperCase().startsWith(this.nameFilter.toUpperCase()) ||
                player.last_name.toUpperCase().startsWith(this.nameFilter.toUpperCase())
      })
    },
  },
  methods: {
    copyLicence(selectedPlayer) {
      console.log('OKOK MY MEN');
      navigator.clipboard.writeText(selectedPlayer.licence_number)
      this.$toast.open({
          message: 'Copié dans le presse papier',
          queue: true,
      })
    }
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

.licence:hover {
  cursor: pointer;
}
</style>
