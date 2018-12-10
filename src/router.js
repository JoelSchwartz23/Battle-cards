import Vue from 'vue'
import Router from 'vue-router'
import Game from './views/Game.vue'
import PlayGame from './views/PlayGame.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'game',
      component: Game
    },
    {
      path: '/playgame/:gameId',
      name: 'playGame',
      component: PlayGame
    }
  ]
})
