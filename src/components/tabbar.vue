<template>
  <van-tabbar v-model="active" fixed active-color="blue">
    <van-tabbar-item v-for="(item, index) in tabbars" :key="index" :icon="item.meta.icon" :to="item">{{ item.meta.title }}</van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  name: 'tabbar',

  data () {
    return {
      active: 0,
      tabbars: []
    }
  },

  created () {
    this.tabbars = this.$router.options.routes.slice(1, 6)
  },

  watch: {
    '$route' (val) {
      if (val) {
        this.tabbars.forEach((item, index) => {
          if (val.path.indexOf(item.name) > -1) {
            return (this.active = index)
          }
        })
      }
    }
  }
}
</script>

