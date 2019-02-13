<template>
  <div class="customer-service">
    <van-nav-bar title="联系我们" right-text=">" left-arrow @click-left="onClickLeft" @click-right="onClickRight" />
  </div>
</template>

<script>
export default {
  name: 'customerService',

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
