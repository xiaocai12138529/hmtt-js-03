<template>
  <div id="app">
    <SideBar />
    <div style="display: flex; height: 100%">
      <NavBar />
      <div style="flex: 1 1 auto; border: 1px solid #ccc; text-align: center">
        主体
        <button @click="btnImg">改变图片</button>
        <p>
          <input type="number" min="1" v-model="$store.state.age" />
          {{ $store.getters.getAge }}
        </p>
        <div v-for="(item, i) in $store.state.data" :key="i">
          书本:{{ item.name }} 
          价格:{{ item.price }}
        </div>
        和:{{$store.getters.getPrice}}
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from './views/SideBar'
import NavBar from './views/NavBar'
// import axios from 'axios'
export default {
  components: {
    NavBar, SideBar
  },
  methods: {
    btnImg () {
      const newUrl = 'http://s02.mifile.cn/assets/static/image/logo-mi2.png'
      this.$store.commit('setUrl', newUrl)
    }
  },
  // 发送ajax请求存入vuex
  created () {
    // axios({
    //   url: 'https://www.fastmock.site/mock/37d3b9f13a48d528a9339fbed1b81bd5/book/api/books'
    // }).then(res => {
    //   console.log(res),
    //     this.$store.commit('setData', res.data.data)
    // })
    // this.$storestore.dispatch('action', payload)
    this.$store.dispatch('getBook')
  }

}
</script>

<style>
body,
html,
#app {
  height: 100%;
}
</style>
