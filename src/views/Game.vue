<template>
  <div class="home container fluid">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <form @submit.prevent="startGame">
      <input type="text" placeholder="Enter Name" v-model="gameConfig.playerName">
      <button class="btn btn-success" type="submit">Start</button>
    </form>
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