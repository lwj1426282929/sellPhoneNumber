<template>
  <div id="app">
    <router-view class="page-container" />
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
 @import 'vant/lib/index.css';
 .page-container{
   margin: 1rem 0 1rem 0;
 }
</style>
