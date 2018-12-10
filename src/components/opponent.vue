<template>
  <div class="opponent container-fluid">
    <div class="row justify-content-center">
      <div class="col-2 card mx-1" v-for="card in opponent.hand" @click="setOpponentCard(card)">
        <div v-if='card.visible'>
          <h2>{{card.name}}</h2>
          <img :src="card.img" height="254">
          <h2>Attack:{{card.attack}}</h2>
          <h2>Health:{{card.health}}</h2>
          <h2>Defense:{{card.defense}}</h2>
        </div>
        <img v-if='!card.visible' src="../assets/Card_back-Ragnaros.png" height="490" />
      </div>
    </div>
  </div>
  </div>
</template>

<script>
  export default {
    name: 'opponent',
    data() {
      return {

      }
    },
    computed: {
      opponent() {
        return this.$store.state.game.opponent
      }
    },
    methods: {
      setOpponentCard(cardId) {
        this.$store.dispatch('setOpponentCard', cardId)
      }
    }
  }
</script>

<style scoped>
  .card {
    max-width: 18rem;
    box-shadow: 0px 0px 2px grey;
    transition: .5s linear;
    background-color: rgba(128, 128, 128, 0.918);
  }

  .card:hover {
    box-shadow: 5px 5px black;
    transform: scale(1.05);
  }
</style>