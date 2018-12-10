<template>
  <div class="opponent container-fluid">
    <div class="col-2 card mx-1" v-for="card in opponent.hand" @click="setOpponentCard(card)">
      <div v-if='card.visible'>
        <h4>{{card.name}}</h4>
        <img :src="card.img" height="150">
        <p><i class="fas fa-fist-raised"></i> Attack:{{card.attack}}</p>
        <p><i class="fas fa-heart"></i> Health:{{card.health}}</p>
        <p><i class="fas fa-shield-alt"></i> Defense:{{card.defense}}</p>
      </div>
      <img v-if='!card.visible' src="../assets/Card_back-Ragnaros.png" height="325" />
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
    transform: scale(.95);
  }
</style>