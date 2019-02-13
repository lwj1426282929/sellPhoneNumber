<template>
  <div class="information">
    <van-nav-bar title="本站动态" right-text=">" left-arrow @click-left="onClickLeft" @click-right="onClickRight" />
  </div>
</template>

<script>
export default {
  name: 'information',

  methods: {
    onClickLeft () {
      this.$router.go(-1)
    },

    onClickRight () {
      this.$router.push({ name: 'navigation' })
    }
  }
}
</script>

<style lang="less" scoped>

</style>
