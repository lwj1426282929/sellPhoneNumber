<template>
  <div class="news">
    <van-nav-bar fixed title="本站动态" right-text="..." left-arrow @click-left="onClickLeft" @click-right="onClickRight" />
    <van-list v-model="loading" :finished="finished" :error.sync="error" error-text="请求失败，点击重新加载" finished-text="没有更多了" @load="loadNews">
      <van-cell v-for="(item, index) in news" class="new-item" :key="index" :title="item" is-link :to="computeNewUrl(item)" />
    </van-list>
  </div>
</template>

<script>
import http from '@/http'
export default {
  name: 'news',

  data () {
    return {
      loading: false,
      error: false,
      finished: false,
      count: 0,
      news: []
    }
  },

  created () {
    http.post('omsfront/orgReceive/queryReceiveTaking', { time: '123' }, { params: { asd: '123123' } }, { headers: { token: '123' } }).then(res => {
      console.log(res)
    }).catch(error => {
      console.log('返回错误', error)
    })
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

    // 下拉加载更多
    loadNews () {
      setTimeout(() => {
        this.loading = false // 加载状态结束
        if (this.news.length > 30) { // 判断是否加载完毕
          this.finished = true
        }
        for (let i = 0; i < 10; i++) { // 将加载的数据追加进去
          this.news.push(this.news.length + 1)
        }
      }, 100)
    },

    // 返回资讯地址
    computeNewUrl (item) {
      return { name: 'newsItem', query: { id: item } }
    }
  }
}
</script>

<style lang="less">
.news {
  .new-item {
    .van-cell__right-icon {
      display: none;
    }
  }
}
</style>
