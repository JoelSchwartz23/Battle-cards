import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router';

let battlecardsapi = axios.create({
  baseURL: "//battlecardz.herokuapp.com/api/games"
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    game: {},
    attack: {
      opponentCardId: "",
      playerCardId: ""
    }
  },
  mutations: {
    setGame(state, game) {
      state.game = game

    },
    setOpponentCard(state, cardId) {
      state.attack.opponentCardId = cardId
      console.log(state.attack.opponentCardId)
    },
    setPlayerCard(state, cardId) {
      state.attack.playerCardId = cardId
      console.log(state.attack.playerCardId)
    }
  },
  actions: {
    getGame({ commit }, gameId) {
      battlecardsapi.get('/' + gameId)
        .then(res => {
          commit('setGame', res.data.data)
        })
        .catch(err => console.error(err.message))
    },
    startGame({ commit }, gameConfig) {
      battlecardsapi.post("", gameConfig)
        .then(res => {
          console.log('gamedata', res.data.game)
          commit('setGame', res.data.game)
          router.push({ name: 'playGame', params: { gameId: res.data.game.id } })
        })
        .catch(err => console.error(err.message))
    },
    setOpponentCard({ commit }, cardId) {
      commit('setOpponentCard', cardId)
    },
    setPlayerCard({ commit }, cardId) {
      commit('setPlayerCard', cardId)
    },
    attack({ commit }, data) {
      battlecardsapi.put("/" + data.gameId, data)
        .then(res => {
          commit('setGame', res.data.game)
        })
    }
  }
})
