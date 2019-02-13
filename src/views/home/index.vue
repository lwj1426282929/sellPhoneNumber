<template>
  <div class="home">
    <van-nav-bar left-text="城市" @click-left="onClickLeft" @click-right="onClickRight">
      <span slot="left">城市&nbsp;<van-icon name="arrow-down" /></span>
    </van-nav-bar>

    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(swiper, index) in swipers" :key="index">
        <img v-lazy="swiper" />
      </van-swipe-item>
    </van-swipe>

    <van-row class="number-types">
      <van-col span="6">1</van-col>
      <van-col span="6">2</van-col>
      <van-col span="6">3</van-col>
      <van-col span="6">4</van-col>
      <van-col span="6">5</van-col>
      <van-col span="6">6</van-col>
      <van-col span="6">7</van-col>
      <van-col span="6">8</van-col>
    </van-row>

    <van-row class="row-title">今日推荐</van-row>
    <van-row class="hotNumbers">
      <van-col v-for="(hotNumber, index) in hotNumbers" :key="index" span="12">
        <van-row>{{ hotNumber.number }}</van-row>
        <van-row>{{ hotNumber.region }}</van-row>
        <van-row>
          <van-col span="12">
            <span>&yen;</span>
            <span>{{ hotNumber.price }}</span>
            </van-col>
          <van-col span="12">{{ hotNumber.hint }}</van-col>
        </van-row>
      </van-col>
    </van-row>
  </div>
</template>

<script>
import Vue from 'vue'
import { Lazyload } from 'vant'
Vue.use(Lazyload, {})

export default {
  name: 'home',

  data () {
    return {
      swipers: [ // 轮播图
        'https://img.yzcdn.cn/public_files/2017/09/05/c0dab461920687911536621b345a0bc9.jpg',
        'https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg',
        'https://img.yzcdn.cn/public_files/2017/09/05/fd08f07665ed67d50e11b32a21ce0682.jpg',
        'https://img.yzcdn.cn/public_files/2017/09/05/3bd347e44233a868c99cf0fe560232be.jpg'
      ],
      hotNumbers: [ // 推荐
        { number: '111111', region: '上海青浦', price: '900', hint: '话费100' },
        { number: '111111', region: '上海青浦', price: '900', hint: '话费100' },
        { number: '111111', region: '上海青浦', price: '900', hint: '话费100' },
        { number: '111111', region: '上海青浦', price: '900', hint: '话费100' },
        { number: '111111', region: '上海青浦', price: '900', hint: '话费100' },
        { number: '111111', region: '上海青浦', price: '900', hint: '话费100' },
        { number: '111111', region: '上海青浦', price: '900', hint: '话费100' },
        { number: '111111', region: '上海青浦', price: '900', hint: '话费100' },
        { number: '111111', region: '上海青浦', price: '900', hint: '话费100' },
        { number: '111111', region: '上海青浦', price: '900', hint: '话费100' },
        { number: '111111', region: '上海青浦', price: '900', hint: '话费100' },
        { number: '111111', region: '上海青浦', price: '900', hint: '话费100' },
        { number: '111111', region: '上海青浦', price: '900', hint: '话费100' },
        { number: '111111', region: '上海青浦', price: '900', hint: '话费100' },
        { number: '111111', region: '上海青浦', price: '900', hint: '话费100' },
        { number: '111111', region: '上海青浦', price: '900', hint: '话费100' },
        { number: '111111', region: '上海青浦', price: '900', hint: '话费100' },
        { number: '111111', region: '上海青浦', price: '900', hint: '话费100' },
        { number: '111111', region: '上海青浦', price: '900', hint: '话费100' }
      ]
    }
  },

  methods: {
    // 选择城市
    onClickLeft () {
      // this.$router.push({ name: 'cities' })
    },

    // 进入导航
    onClickRight () {
      this.$router.push({ name: 'navigation' })
    }
  }
}
</script>

<style lang="less" scoped>
.home {
  .van-swipe {
    height: 200px;
  }
  .van-swipe-item img {
    width: 100%;
    height: 100%;
  }

  .number-types {
    margin-top: 5px;
    .van-col {
      height: 80px;
      border: 1px solid #ccc;
      box-sizing: border-box;
    }
  }
}
</style>
