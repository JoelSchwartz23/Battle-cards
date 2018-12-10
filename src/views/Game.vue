<template>
  <div class="home container fluid">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <div class="row">
      <h1><b>Battle Bots</b>...and sometimes cats</h1>
      <form @submit.prevent="startGame">
        <input type="text" placeholder="Enter Name" v-model="gameConfig.playerName">
        <button class="btn btn-success" type="submit">Start</button>
      </form>
    </div>
  </div>
</template>

<script>

  // @ is an alias to /src


  export default {
    name: 'game',
    data() {
      return {
        gameConfig: {
          "playerName": "",
          "set": 1
        }
      }
    },
    methods: {
      startGame() {
        this.$store.dispatch("startGame", this.gameConfig)
      }
    },

    computed: {}
  }
</script>

<style scoped>
  .home {
    background-color: black;
    height: 100vh;
    color: orange;
    font-family: 'Bungee', cursive;
  }

  .home {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
</style>