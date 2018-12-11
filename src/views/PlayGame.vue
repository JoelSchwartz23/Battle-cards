<template>
  <div v-if="game.id" class="about container-fluid">
    <h3><u><b>Battle Bots</b>... and sometimes Cats..</u></u></h3>
    <div class="row restart">
      <button @click="playAgain()">
        <h6>Restart Game</h6>
      </button>
    </div>
    <div class="row opponent">
      <h3> <u>{{game.opponent.name}}</u>: {{opponentCardId.name}}</h3>
      <h3 class="mt-1"> <u>Remaining Cards:{{game.player.remainingCards}}</u></h3>
    </div>
    <div class="row">
      <opponent class="col-12 opponent"></opponent>
    </div>
    <div class="row justify-content-center">
      <button class="btn mt-4" :disabled="!play()" @click="attack()">Attack</button>
    </div>
    <div v-if="!game.player.dead && game.opponent.dead">
      <h3><i class="fas fa-trophy"></i> <u>You win!</u></h3>
    </div>
    <div v-if="game.player.dead && game.opponent.dead">
      <h3><u>Tie Game!</u></h3>
    </div>
    <div v-if="game.player.dead && !game.opponent.dead">
      <h3><i class="fas fa-skull"></i><u>You Lose!</u></h3>
    </div>
    <div class="row player">
      <h1><u>{{game.player.name}}</u>: {{playerCardId.name}}</h1>
      <div class="cardsleft">
        <h3> <u>Remaining Cards:{{game.player.remainingCards}}</u></h3>
      </div>
    </div>

    <div class="row">
      <player class="col-12 player"></player>
    </div>

  </div>
</template>

<script>
  import player from "@/components/player.vue"
  import opponent from "@/components/opponent.vue"

  export default {
    name: '',
    components: {
      player,
      opponent
    },
    data() {
      return {}
    },
    mounted() {
      if (!this.game.id)
        this.$store.dispatch("getGame", this.$route.params.gameId)
    },
    computed: {
      game() {
        return this.$store.state.game
      },
      playerCardId() {
        return this.$store.state.attack.playerCardId
      },
      opponentCardId() {
        return this.$store.state.attack.opponentCardId
      }
    },
    methods: {
      attack() {
        let data = {
          gameId: this.game.id,
          playerCardId: this.playerCardId.id,
          opponentCardId: this.opponentCardId.id

        }
        this.$store.dispatch('attack', data)
      },
      play() {
        return this.playerCardId.id && this.opponentCardId.id
      },
      playAgain() {
        this.$store.dispatch('startGame')
      }

    }
  }


</script>

<style scoped>
  .btn {
    font-size: 25px;
    background: red;
    color: black;
  }

  .about {
    background-size: cover;
    background-position: center;
    height: 100%;
    color: orange;
    font-family: 'Bungee', cursive;
  }

  .restart {
    position: absolute;
    top: 5px;
    right: 20px;
  }

  .player {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    justify-content: space-between
  }

  .opponent {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    justify-content: space-between
  }
</style>