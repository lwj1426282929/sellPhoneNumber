<template>
  <div class="navigation">
    <van-nav-bar title="导航" right-text=">" left-arrow @click-left="onClickLeft" @click-right="onClickRight" />
  </div>
</template>

<script>
export default {
  name: 'navigation',

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

