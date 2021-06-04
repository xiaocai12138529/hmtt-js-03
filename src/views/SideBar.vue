<template>
  <div>
    侧边栏
    <img :src="$store.state.url" />
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
div {
  text-align: center;
  border: 1px solid #ccc;
}
img{
  width: 100px;
}
</style>