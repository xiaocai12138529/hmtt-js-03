<template>
  <div>
    顶部导航栏
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
  height: 100%;
  border: 1px solid #ccc;
}
img {
  width: 100px;
}
</style>