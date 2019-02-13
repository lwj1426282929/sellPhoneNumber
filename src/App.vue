<template>
  <div id="app">
    <router-view />
    <tabbar />
  </div>
</template>

<script>
import { tabbar } from '@/components'

export default {
  name: 'App',

  components: {
    tabbar
  }
}
</script>

<style lang="less">
 @import './style/reset.less';
 @import './style/index.less';
</style>

