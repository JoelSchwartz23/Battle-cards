<template>
  <div class="player container-fluid">
    <div class="col-2 card mx-1" v-for="card in player.hand" @click="setPlayerCard(card)">
      <h2>{{card.name}}</h2>
      <img :src="card.img" height="251">
      <h2>Attack:{{card.attack}}</h2>
      <h2>Health:{{card.health}}</h2>
      <h2>Defense:{{card.defense}}</h2>
    </div>
  </div>
  </div>
</template>

<script>
  export default {
    name: 'player',
    data() {
      return {

      }
    },
    computed: {
      player() {
        return this.$store.state.game.player
      }
    },
    methods: {

      setPlayerCard(cardId) {
        this.$store.dispatch('setPlayerCard', cardId)
      }
    }
  }
</script>

<style scoped>
  .card {
    max-width: 18rem;
    box-shadow: 0px 0px 2px grey;
    transition: .3s linear;
    background-color: rgba(128, 128, 128, 0.918);
  }

  .card:hover {
    box-shadow: 5px 5px black;
    transform: scale(1.05);
  }
</style>