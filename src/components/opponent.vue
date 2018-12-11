<template>
  <div class="opponent container-fluid">
    <div class="col-2 mx-1" v-for="card in opponent.hand" @click="setOpponentCard(card)">
      <div @click="select.cardId=card.id" :class="{'border-danger card-border': card.id == select.cardId}" class="card">
      <div v-if='card.visible'>
        <h4>{{card.name}}</h4>
        <img :src="card.img" height="150">
        <p><i class="fas fa-fist-raised"></i> Attack: {{card.attack}}</p>
        <p><i class="fas fa-heart"></i> Health: {{card.health}}</p>
        <p><i class="fas fa-shield-alt"></i> Defense: {{card.defense}}</p>
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
        select: {
          cardId: ''
        }
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
    max-width: 16rem;
    box-shadow: 0px 0px 2px grey;
    transition: .5s linear;
    background-color: black;
  }

  .card:hover {
    box-shadow: 5px 5px black;
    transform: scale(.95);
  }

  .card-border{
    border-width: 5px;
  }
</style>