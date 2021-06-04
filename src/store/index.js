import vuex from 'vuex'
import Vue from 'vue'
import axios from "axios"

Vue.use(vuex)

export default new vuex.Store({
  state: {
    name: 'tom',
    skills: ['抖音', '小破站', '美团'],
    age: 18,
    url: 'https://img10.360buyimg.com/img/jfs/t1/179086/40/4900/81664/60a47d6bE2bf6455e/208f5820c156d4ab.gif'
  },
  mutations: {
    setAge: (state, newAge) => {
      state.age = newAge
    },
    setUrl: (state, newUrl) => {
      state.url = newUrl
    },
    setData: (state, newData) => {
      state.data = newData
    }
  },
  getters: {
    getAge: function (state) {
      return state.age < 18 ? "小老弟" : '老大哥'

    },
    getPrice: (state) => {
      // let sum = 0
      // state.data.forEach(item => sum += item.price)
      return state.data.reduce((sum, item) => sum += item.price, 0)

    }
  },
  actions: {
    getBook: function (context) {
      console.log('context', context)
      axios({
        url: 'https://www.fastmock.site/mock/37d3b9f13a48d528a9339fbed1b81bd5/book/api/books'
      }).then(res => {
        console.log(res)
        context.commit('setData', res.data.data)
      })
    }

  },
  modules: {
    books: {
      namespaced: true,//
      state: { data: [] }
    }
  }
})