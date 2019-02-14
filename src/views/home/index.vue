<template>
  <div class="home">
    <van-nav-bar left-text="城市" fixed @click-left="onClickLeft" @click-right="onClickRight">
      <span slot="left">城市&nbsp;
        <van-icon name="arrow-down" />
      </span>
      <div slot="title" class="nav-search">
        <div class="nav-search-container">
          <van-icon class="nav-search-icon" name="search" />
          <input type="text" class="nav-search-input" v-model="searchText" placeholder="输入关键字">
        </div>
      </div>
    </van-nav-bar>

    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(swiper, index) in swipers" :key="index">
        <img class="swipe-img" v-lazy="swiper" />
      </van-swipe-item>
    </van-swipe>

    <van-row class="number-types">
      <van-col span="6" v-for="(item, index) in numberTypes" :key="index">
        <img class="number-types-img" :src=item.imgSrc>
        <p class="number-types-name">{{ item.name }}</p>
      </van-col>
    </van-row>

    <van-row class="row-title">今日推荐</van-row>
    <van-row class="hot-numbers">
      <van-col v-for="(item, index) in hotNumbers" :key="index" span="12">
        <van-row class="hot-numbers-numbber">{{ item.number }}</van-row>
        <van-row class="hot-numbers-region">{{ item.region }}</van-row>
        <van-row>
          <van-col span="12" class="align-right">
            <span class="hot-numbers-price-unit">&yen;</span>
            <span class="hot-numbers-price">{{ item.price }}</span>
          </van-col>
          <van-col span="12" class="hot-numbers-info align-left">{{ item.info }}</van-col>
        </van-row>
      </van-col>
    </van-row>

    <van-row class="row-title">平价号码</van-row>
    <van-row class="hot-numbers">
      <van-col v-for="(item, index) in fairPriceNumbers" :key="index" span="12">
        <van-row class="hot-numbers-numbber">{{ item.number }}</van-row>
        <van-row class="hot-numbers-region">{{ item.region }}</van-row>
        <van-row>
          <van-col span="12" class="align-right">
            <span class="hot-numbers-price-unit">&yen;</span>
            <span class="hot-numbers-price">{{ item.price }}</span>
          </van-col>
          <van-col span="12" class="hot-numbers-info align-left">{{ item.info }}</van-col>
        </van-row>
      </van-col>
    </van-row>

    <van-row class="row-title">豹子靓号</van-row>
    <van-row class="hot-numbers">
      <van-col v-for="(item, index) in leopardNumbers" :key="index" span="12">
        <van-row class="hot-numbers-numbber">{{ item.number }}</van-row>
        <van-row class="hot-numbers-region">{{ item.region }}</van-row>
        <van-row>
          <van-col span="12" class="align-right">
            <span class="hot-numbers-price-unit">&yen;</span>
            <span class="hot-numbers-price">{{ item.price }}</span>
          </van-col>
          <van-col span="12" class="hot-numbers-info align-left">{{ item.info }}</van-col>
        </van-row>
      </van-col>
    </van-row>

    <van-row class="row-title">顺子靓号</van-row>
    <van-row class="hot-numbers">
      <van-col v-for="(item, index) in straightNumbers" :key="index" span="12">
        <van-row class="hot-numbers-numbber">{{ item.number }}</van-row>
        <van-row class="hot-numbers-region">{{ item.region }}</van-row>
        <van-row>
          <van-col span="12" class="align-right">
            <span class="hot-numbers-price-unit">&yen;</span>
            <span class="hot-numbers-price">{{ item.price }}</span>
          </van-col>
          <van-col span="12" class="hot-numbers-info align-left">{{ item.info }}</van-col>
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
      searchText: '',
      swipers: [ // 轮播图
        'https://img.yzcdn.cn/public_files/2017/09/05/c0dab461920687911536621b345a0bc9.jpg',
        'https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg',
        'https://img.yzcdn.cn/public_files/2017/09/05/fd08f07665ed67d50e11b32a21ce0682.jpg',
        'https://img.yzcdn.cn/public_files/2017/09/05/3bd347e44233a868c99cf0fe560232be.jpg'
      ],
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
      ],
      hotNumbers: [ // 推荐
        { number: '111111', region: '上海青浦', price: '900', info: '话费100' },
        { number: '111111', region: '上海青浦', price: '900', info: '话费100' },
        { number: '111111', region: '上海青浦', price: '900', info: '话费100' },
        { number: '111111', region: '上海青浦', price: '900', info: '话费100' },
        { number: '111111', region: '上海青浦', price: '900', info: '话费100' },
        { number: '111111', region: '上海青浦', price: '900', info: '话费100' }
      ],
      fairPriceNumbers: [ // 平价号码
        { number: '111111', region: '上海青浦', price: '900', info: '话费100' },
        { number: '111111', region: '上海青浦', price: '900', info: '话费100' },
        { number: '111111', region: '上海青浦', price: '900', info: '话费100' },
        { number: '111111', region: '上海青浦', price: '900', info: '话费100' },
        { number: '111111', region: '上海青浦', price: '900', info: '话费100' },
        { number: '111111', region: '上海青浦', price: '900', info: '话费100' },
        { number: '111111', region: '上海青浦', price: '900', info: '话费100' },
        { number: '111111', region: '上海青浦', price: '900', info: '话费100' }
      ],
      leopardNumbers: [ // 豹子靓号
        { number: '111111', region: '上海青浦', price: '900', info: '话费100' },
        { number: '111111', region: '上海青浦', price: '900', info: '话费100' },
        { number: '111111', region: '上海青浦', price: '900', info: '话费100' },
        { number: '111111', region: '上海青浦', price: '900', info: '话费100' },
        { number: '111111', region: '上海青浦', price: '900', info: '话费100' },
        { number: '111111', region: '上海青浦', price: '900', info: '话费100' }
      ],
      straightNumbers: [ // 顺子靓号
        { number: '111111', region: '上海青浦', price: '900', info: '话费100' },
        { number: '111111', region: '上海青浦', price: '900', info: '话费100' },
        { number: '111111', region: '上海青浦', price: '900', info: '话费100' },
        { number: '111111', region: '上海青浦', price: '900', info: '话费100' },
        { number: '111111', region: '上海青浦', price: '900', info: '话费100' },
        { number: '111111', region: '上海青浦', price: '900', info: '话费100' }
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
    height: 3rem;
  }

  .van-swipe-item .swipe-img {
    width: 100%;
    height: 100%;
  }

  .number-types {
    margin-top: 0.1rem;

    .van-col {
      height: 1.6rem;
      text-align: center;

      .number-types-img {
        width: 0.9rem;
        height: 0.9rem;
        margin: 0.1rem 0;
      }

      .number-types-name {
        font-size: 0.28rem;
        line-height: 0.28rem;
        color: #666;
        margin: 0 0 0.1rem 0;
      }
    }
  }

  .hot-numbers {
    background: #ececec;

    & > .van-col--12 {
      text-align: center;
      background: #fff;
      border-bottom: 1px solid #ececec;
      padding: 0.1rem 0;

      &:nth-child(2n-1) {
        border-right: 1px solid #ececec;
      }

      .hot-numbers-numbber {
        color: #333;
        font-size: 0.44rem;
      }

      .hot-numbers-region {
        color: #999;
        font-size: 0.2rem;
        margin: 0.1rem 0;
      }

      .hot-numbers-price-unit {
        color: #999;
        font-size: 0.2rem;
        line-height: 0.44rem;
      }

      .hot-numbers-price {
        color: #f60;
        font-size: 0.36rem;
        padding-right: 0.1rem;
        line-height: 0.44rem;
      }

      .hot-numbers-info {
        color: #999;
        font-size: 0.2rem;
        padding-left: 0.1rem;
        line-height: 0.44rem;
      }
    }
  }

  .search-bar {
    height: 0.64rem;
    border: 1px solid #d3d3d3;
    border-radius: 0.3rem;
    position: relative;
    top: 0.1rem;
  }
}
</style>
