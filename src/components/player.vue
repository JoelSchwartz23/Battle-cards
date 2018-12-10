<template>
  <div class="player container-fluid">
    <div class="row">
      <div class="col-6 card" v-for="card in player.hand" @click="setPlayerCard(card)">
        <h2>{{card.name}}</h2>
        <img :src="card.img">
        <h2>Attack:{{card.attack}}</h2>
        <h2>Health:{{card.health}}</h2>
        <h2>Defense:{{card.defense}}</h2>
      </div>
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