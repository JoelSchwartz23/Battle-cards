<template>
  <div class="opponent container-fluid">
    <div class="row">
      <div class="col-6" v-for="card in opponent.hand">
        <div class="card" @click="setOpponentCard(card.id)">
          <div v-if='card.visible'>
            <h2>{{card.name}}</h2>
            <img :src="card.img">
            <h2>Attack:{{card.attack}}</h2>
            <h2>Health:{{card.health}}</h2>
            <h2>Defense:{{card.defense}}</h2>
          </div>
          <img v-if='!card.visible' src="../assets/Card_back-Ragnaros.png" />
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