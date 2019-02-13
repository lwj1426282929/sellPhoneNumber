<template>
  <van-tabbar v-model="active" fixed active-color="blue">
  <van-tabbar-item v-for="(item, index) in tabbars" :key="index" :icon="item.icon">{{ item.text }}</van-tabbar-item>
</van-tabbar>
</template>

<script>
export default {
  name: 'tabbar',

  data () {
    return {
      active: '',
      tabbars: [
        { text: '首页' },
        { text: '选号' },
        { text: '客服' },
        { text: '资讯' },
        { text: '导航' }
      ]
    }
  }
}
</script>

