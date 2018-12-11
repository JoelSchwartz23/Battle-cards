<template>
  <div class="player container-fluid">
    <div class="col-2 mx-1" v-for="card in player.hand" @click="setPlayerCard(card)">
      <div @click="select.cardId=card.id" :class="{'border-success card-border': card.id == select.cardId}" class="card">
        <h4 class="mb-5">{{card.name}}</h4>
        <img :src="card.img" height="170">
        <p><i class="fas fa-fist-raised"></i> Attack: {{card.attack}}</p>
        <p><i class="fas fa-heart"></i> Health: {{card.health}}</p>
        <p> <i class="fas fa-shield-alt"></i> Defense: {{card.defense}}</p>
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
        select: {
          cardId: ''
        }
      }
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