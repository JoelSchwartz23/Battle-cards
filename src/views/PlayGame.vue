<template>
  <div class="about">
    <h1>Game</h1>
    <div class="row">
      <div v-if="!game.winner" class="col-12">
        <button v-if="!playerCardId && opponentCardId" @click="attack()">Attack</button>
        <h1>Player: {{playerCardId.name}}</h1>
        <h1>Opponent: {{opponentCardId.name}}</h1>
      </div>
    </div>
    <div class="row">
      <player class="col-6"></player>
      <opponent class="col-6"></opponent>
    </div>
  </div>
</template>

<script>
  import player from "@/components/player.vue"
  import opponent from "@/components/opponent.vue"

  export default {
    name: 'PlayGame',
    components: {
      player,
      opponent
    },
    data() {
      return {}
    },
    mounted() {
      this.$store.dispatch("getGame", this.$route.params.gameId)
    },
    computed: {
      game() {
        return this.$store.state.game
      },
      playerCardId() {
        return this.$store.state.playerCardId
      },
      opponentCardId() {
        return this.$store.state.opponentCardId
      },
      // attack() {
      //   return this.$store.state.attack
      // }
    },
    methods: {
      attack() {
        debugger
        let data = {
          gameId: this.game.id,
          playerCardId: this.playerCardId,
          opponentCardId: this.opponentCardId

        }
        this.$store.dispatch('attack', data)
      }

    }
  }


</script>

<style>
</style>