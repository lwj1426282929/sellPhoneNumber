<template>
  <div class="selection">
    <van-nav-bar @click-left="onClickLeft" @click-right="onClickRight" />
  </div>
</template>

<script>
export default {
  name: 'selection',

  methods: {
    // 选择城市
    onClickLeft () {
      this.$router.push({ name: 'cities' })
    },

    // 进入导航
    onClickRight () {
      this.$router.push({ name: 'navigation' })
    }
  }
}
</script>

<style lang="less" scoped>

</style>

