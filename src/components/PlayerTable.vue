<template>
  <div id="player-table">
    <!-- Search Bar -->
    <b-field>
      <b-input
        v-model="nameFilter"
        rounded
        placeholder="Chercher joueur"
        autofocus
      ></b-input>
    </b-field>

    <hr />

    <!-- Some options to toggle -->
    <div class="control is-flex">
      <b-switch v-model="showPoints">CPPH</b-switch>
      <b-switch v-model="showGender">Genre</b-switch>
    </div>

    <hr />

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
      detailed
    >
      <template slot-scope="props">
        <b-table-column field="first_name" label="Nom" centered>
          {{ props.row.first_name }} {{ props.row.last_name }}
        </b-table-column>

        <!-- <b-table-column field="last_name" label="Nom" centered sortable>
          {{ props.row.last_name }}
        </b-table-column> -->

        <b-table-column label="Sexe" centered sortable :visible="showGender">
          <b-icon
            pack="fas"
            :icon="props.row.gender === 'H' ? 'mars' : 'venus'"
          >
          </b-icon>
          {{ props.row.gender }}
        </b-table-column>

        <b-table-column label="Licence" class="licence">
          <b-tooltip
            label="clique pour copier"
            type="is-dark"
            position="is-bottom"
          >
            <b-icon pack="fas" :icon="'copy'"> </b-icon>
          </b-tooltip>
          {{ props.row.licence_number }}
        </b-table-column>

        <b-table-column
          field="simple_points"
          label="Simple"
          sortable
          numeric
          centered
        >
          <b-tag :type="getRankColor(props.row.mixed_rank)">{{
            props.row.simple_rank
          }}</b-tag>
          <p v-if="showPoints">{{ props.row.simple_points }}</p>
        </b-table-column>

        <b-table-column
          field="double_points"
          label="Double"
          sortable
          numeric
          centered
        >
          <b-tag :type="getRankColor(props.row.mixed_rank)">{{
            props.row.double_rank
          }}</b-tag>
          <p v-if="showPoints">{{ props.row.double_points }}</p>
        </b-table-column>

        <b-table-column
          field="double_points"
          label="Mixte"
          sortable
          numeric
          centered
        >
          <b-tag :type="getRankColor(props.row.mixed_rank)">{{
            props.row.mixed_rank
          }}</b-tag>
          <p v-if="showPoints">{{ props.row.mixed_points }}</p>
        </b-table-column>
      </template>

      <template slot="empty">
        <section class="section">
          <div class="content has-text-grey has-text-centered">
            <p>
              <b-icon icon="emoticon-sad" size="is-large"> </b-icon>
            </p>
            <p>Aucun résultats</p>
          </div>
        </section>
      </template>

      <template slot="detail" slot-scope="props">
        <b-button type="is-info" @click="attachProfile(props.row)">
          Je suis {{ props.row.first_name }}
        </b-button>
        <b-taglist>
          <b-tag type="is-danger">Equipe 4</b-tag>
          <b-tag type="is-info">Second</b-tag>
          <b-tag type="is-info">Third</b-tag>
          <b-tag type="is-info">Fourth</b-tag>
          <b-tag type="is-info">Fifth</b-tag>
        </b-taglist>
      </template>
    </b-table>
  </div>
</template>

<script>
/* eslint-disable */
import players from "../assets/joueurs.json";
import { log } from 'util';

export default {
  name: "playerList",
  data() {
    return {
      players,
      nameFilter: "",
      showPoints: false,
      showGender: true,
      rankToColor: {
        'NC': 'is-light',
        'P12': 'is-warning',
        'P11': 'is-warning',
        'P10': 'is-warning',
        'D9': 'is-success',
        'D8': 'is-success',
        'D7': 'is-success',
        'R6': 'is-info',
        'R5': 'is-info',
        'R4': 'is-info',
        'N3': 'is-danger',
        'N2': 'is-danger',
        'N1': 'is-danger',
      }
    };
  },
  computed: {
    players_cleaned() {
      return this.players.map(player => {
        player.simple_points = parseFloat(player.simple_points);
        player.double_points = parseFloat(player.double_points);
        player.mixed_points = parseFloat(player.mixed_points);
      });
    },
    filteredPlayers() {
      return this.players.filter(player => {
        return (
          player.first_name.toUpperCase().startsWith(this.nameFilter.toUpperCase()) ||
          player.last_name.toUpperCase().startsWith(this.nameFilter.toUpperCase())
        );
      });
    }
  },
  methods: {
    copyLicence(selectedPlayer) {      
      navigator.clipboard.writeText(selectedPlayer.licence_number);
      this.$toast.open({
        message: "Copié dans le presse papier",
        queue: true
      });
    },
    attachProfile(selectedPlayer) {
      this.$store.commit('setCurrentUser', selectedPlayer)
    },
    getRankColor(rank) {
      return this.rankToColor[rank]
    }
  }
};
</script>
