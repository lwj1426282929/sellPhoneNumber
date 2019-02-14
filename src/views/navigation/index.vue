<template>
  <div class="navigation">
    <van-nav-bar title="导航" fixed left-arrow @click-left="onClickLeft" @click-right="onClickRight" />

    <van-row class="row-title">选号大厅</van-row>
    <van-row class="gird">
      <van-col span="6" v-for="(item, index) in numberTypes" :key="index">
        <img class="gird-img" :src=item.imgSrc>
        <p class="gitd-name">{{ item.name }}</p>
      </van-col>
    </van-row>

    <van-row class="row-title">{{ '资讯&工具' }}</van-row>
    <van-row class="gird">
      <van-col span="6" v-for="(item, index) in numberTypes" :key="index">
        <img class="gird-img" :src=item.imgSrc>
        <p class="gitd-name">{{ item.name }}</p>
      </van-col>
    </van-row>

    <van-row class="row-title">{{ '关于&联系' }}</van-row>
    <van-row class="gird">
      <van-col span="6" v-for="(item, index) in numberTypes" :key="index">
        <img class="gird-img" :src=item.imgSrc>
        <p class="gitd-name">{{ item.name }}</p>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  name: 'navigation',

  data () {
    return {
      numberTypes: [ // 号码类型
        {
          imgSrc: '/static/img/t1.jpg',
          name: '移动号码'
        },
        {
          imgSrc: '/static/img/t1.jpg',
          name: '联通号码'
        },
        {
          imgSrc: '/static/img/t1.jpg',
          name: '电信号码'
        },
        {
          imgSrc: '/static/img/t1.jpg',
          name: '虚商号码'
        },
        {
          imgSrc: '/static/img/t1.jpg',
          name: '豹子靓号'
        },
        {
          imgSrc: '/static/img/t1.jpg',
          name: '顺子靓号'
        },
        {
          imgSrc: '/static/img/t1.jpg',
          name: '号码定制'
        },
        {
          imgSrc: '/static/img/t1.jpg',
          name: '靓号回收'
        }
      ]
    }
  },

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
.gird {
  .van-col {
    height: 1.6rem;
    text-align: center;
    border-top: 1px solid #ccc;
    border-right: 1px solid #ccc;

    &:nth-child(1),
    &:nth-child(2),
    &:nth-child(3),
    &:nth-child(4) {
      border-top: 0 none;
    }

    &:nth-child(4n){
      border-right: 0 none;
    }

    .gird-img {
      width: 0.9rem;
      height: 0.9rem;
      margin: 0.1rem 0;
    }

    .gird-name {
      font-size: 0.28rem;
      line-height: 0.28rem;
      color: #666;
      margin: 0 0 0.1rem 0;
    }
  }
}
</style>

