<template>
  <div class="player container-fluid">
    <div class="col-2 card mx-1" v-for="card in player.hand" @click="setPlayerCard(card)">
      <h4 class="mb-5">{{card.name}}</h4>
      <img :src="card.img" height="170">
      <p><i class="fas fa-fist-raised"></i> Attack:{{card.attack}}</p>
      <p><i class="fas fa-heart"></i> Health:{{card.health}}</p>
      <p> <i class="fas fa-shield-alt"></i> Defense:{{card.defense}}</p>
    </div>
  </div>
  </div>
</template>

<script>
  export default {
    name: 'player',
    data() {
      return {}
    },
    computed: {
      player() {
        return this.$store.state.game.player
      }
    },
    methods: {

      setPlayerCard(cardId) {
        this.$store.dispatch("setPlayerCard", cardId)
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
    transform: scale(.95);
  }
</style>