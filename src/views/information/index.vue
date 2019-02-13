<template>
  <div class="information">
    <van-nav-bar title="本站动态" right-text=">" left-arrow @click-left="onClickLeft" @click-right="onClickRight" />
    <van-list v-model="loading" :finished="finished" :error.sync="error" error-text="请求失败，点击重新加载" finished-text="没有更多了" @load="loadNews">
      <van-cell v-for="(item, index) in news" :key="index" :title="item" />
    </van-list>
  </div>
</template>

<script>
export default {
  name: 'information',

  data () {
    return {
      loading: false,
      error: false,
      finished: false,
      count: 0,
      news: []
    }
  },

  methods: {
    // 返回上一页
    onClickLeft () {
      this.$router.go(-1)
    },

    // 导航页面
    onClickRight () {
      this.$router.push({ name: 'navigation' })
    },

    // 下拉加载
    loadNews () {
      setTimeout(() => {
        this.loading = false // 加载状态结束
        if (this.news.length > 30) { // 判断是否加载完毕
          this.finished = true
        }
        for (let i = 0; i < 10; i++) { // 将加载的数据追加进去
          this.news.push(this.news.length + 1)
        }
      }, 3000)
    }
  }
}
</script>

<style lang="less" scoped>
</style>
