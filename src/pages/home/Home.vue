<template>
  <div class="container">
    <section class="top-header">
      <img src="https://yanxuan.nosdn.127.net/3137220cc522a8fbb0b7520637a61469.png" />
    </section>
    <section class="mix-search-scroll-wrap">
      <div class="search">
        <div class="logo"></div>
        <div class="ipt-wrap">
          <div class="icon"></div>
          <span class="ipt-words">搜索商品, 共24253款好物</span>
        </div>
        <div class="btn-login">登入</div>
      </div>
      <div class="scroll-wrap"></div>
      <section class="tabWrap" v-if="homeList.kingKongModule">
        <div class="swiper-wrap">
          <ul class="ul-list" ref="ulList">
            <li v-for="(item, index) of homeList.kingKongModule.kingKongList" :key="index">
              <span>{{item.text}}</span>
            </li>
          </ul>
        </div>
        <div class="toggleWrap">
          <div class="space"></div>
          <div class="toggle">
            <div class="icon"></div>
          </div>
        </div>
      </section>
    </section>
    <section class="swiper">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="imgs of homeList.swiperImg" :key="imgs.id">
          <img :src="imgs.url" alt />
        </van-swipe-item>
      </van-swipe>
    </section>
    <!-- m-indexServicePolicy -->
    <section class="w-goodsInfo">
      <ul class="g-grow">
        <li class="g-li" v-for="(item, index) of homeList.policyDescList" :key="index">
          <i class="g-li-icon" :style="{backgroundImage: `url(${item.icon})`}"></i>
          <span class="g-li-words">{{item.desc}}</span>
        </li>
      </ul>
    </section>
    <!-- BigPromotionModule  -->
    <section class="shop-wrap">
      <!-- m-kingKongModule -->
      <div class="f-goodList border-bottom" v-if="homeList.kingKongModule">
        <van-swipe class="my-swipe" indicator-color="white">
          <van-swipe-item>
            <ul class="f-goodList-wrap">
              <li
                class="f-goodList-item"
                v-for="(item, index) of homeList.kingKongModule.kingKongList"
                :key="index"
              >
                <img :src="item.picUrl" alt class="f-img" />
                <div class="f-txt">{{item.text}}</div>
              </li>
            </ul>
          </van-swipe-item>
        </van-swipe>
      </div>
      <!-- BigPromotionModule -->
      <div v-if="homeList.bigPromotionModule">
        <PromotionModule :floorList="homeList.bigPromotionModule.floorList" />
      </div>
    </section>
    <!-- freshmanModule  -->
    <section class="flesh-module">
      <div class="moduleTitle">
        <span class="moduleText">新人专享礼</span>
      </div>
      <div class="flesh-content">
        <div class="flesh-left">
          <div class="new-gift">新人专享礼包</div>
          <div class="gift-wrap">
            <img src alt />
          </div>
        </div>
        <div class="flesh-right">
          <div class="flesh-r-top flesh-common">
            <div class="flesh-common-conent">
              <div class="picWrap">
                <div>
                  <img src alt />
                </div>
                <div class="discount">
                  <div class="line1">$56</div>
                  <div class="line2">$89</div>
                </div>
              </div>
              <div class="txt">
                <div class="title">福利社</div>
                <div class="subTitle">今日特价</div>
              </div>
            </div>
          </div>
          <div class="flesh-r-bottom flesh-common">
            <div class="flesh-common-conent">
              <div class="txt">
                <div class="title">福利社</div>
                <div class="subTitleTab">1元起包邮</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- categoryHotSellModule  -->
    <section class="categoryHotSellModule">
      <div class="moduleTitle">类目热销榜</div>
      <div class="moduleContent">
        <div class="m-line1">
          <div class="m-line-content">
            <div class="line-left line-common">
              <span class="hot-line">热销榜</span>
            </div>
            <div class="line-right"></div>
          </div>
          <div class="m-line-content">
            <div class="line-left line-common">
              <span class="hot-line">热销榜</span>
            </div>
            <div class="line-right"></div>
          </div>
        </div>
        <div class="m-line2">
          <ul class="container-item">
            <li class="item">
              <div class="title">居家生活榜</div>
              <div class="img-wrap">
                <img src alt />
              </div>
            </li>
            <li class="item"></li>
            <li class="item"></li>
            <li class="item"></li>
            <li class="item"></li>
            <li class="item"></li>
            <li class="item"></li>
            <li class="item"></li>
          </ul>
        </div>
      </div>
    </section>
    <section class="flashSaleModule">
      <div class="moduleTtile">
        <div class="left">
          <span class="words">限时购</span>
          <div class="m-countdown"></div>
        </div>
        <div class="right">
          <span>更多</span>
          <i>>></i>
        </div>
      </div>
      <div class="cnt">
        <ul class="cnt-wrap">
          <li class="cnt-item">
            <div class="imgWrap"></div>
            <div class="txt">
              <span class="txt1">
                <span>￥</span>
                <span>123</span>
              </span>
              <span class="txt2">
                <span>￥</span>
                <span>152</span>
              </span>
            </div>
          </li>
          <li class="cnt-item"></li>
          <li class="cnt-item"></li>
          <li class="cnt-item"></li>
        </ul>
      </div>
    </section>
    <section class="newItemModule">
      <TitleHeader title />
      <div class="wrap">
        <ul class="li-wrap">
          <li class="li-item">
            <div class="img">
              <img src alt />
            </div>
            <div class="dec">便携式空气净化器，除去细菌甲醛</div>
            <div class="price">
              <span>
                <span>￥</span>
                <span>98</span>
              </span>
            </div>
            <div class="tagWraper">
              <span>满99减10</span>
            </div>
          </li>
          <li class="li-item"></li>
          <li class="li-item"></li>
          <li class="li-item"></li>
          <li class="li-item"></li>
          <li class="li-item"></li>
        </ul>
      </div>
    </section>
    <section class="sceneLightShoppingGuideModule">
      <div class="item">
        <div class="title1">断货补单王</div>
        <div class="title2">补仓疯抢中</div>
        <div class="img-wrap">
          <div class="img">
            <img src alt />
          </div>
          <div class="img">
            <img src alt />
          </div>
        </div>
      </div>
      <div class="item">
        <div class="title1">断货补单王</div>
        <div class="title2">补仓疯抢中</div>
        <div class="img-wrap">
          <div class="img">
            <img src alt />
          </div>
          <div class="img">
            <img src alt />
          </div>
        </div>
      </div>
    </section>
    <section class="m-ftWrap">
      <div class="m-ft">
        <div class="top">
          <div class="btn1 btn">下载APP</div>
          <div class="btn2 btn">电脑版</div>
        </div>
        <div class="bottom">
          <span>网易公司版权所有 © 1997-2020</span>
          <span>食品经营许可证：JY13301080111719</span>
        </div>
      </div>
    </section>
    <van-tabbar v-model="active" class="tab-van-wrap" active-color="#DD1A21">
      <van-tabbar-item class="tab-van-item">
        <span>首页</span>
        <img
          class="tab-img"
          slot="icon"
          slot-scope="props"
          :src="props.active ? icon[0].active : icon[0].inactive"
        />
      </van-tabbar-item>
      <!-- <van-icon name="orders-o" /> -->
      <van-tabbar-item class="tab-van-item">
        <span>分类</span>
        <img
          class="tab-img"
          slot="icon"
          slot-scope="props"
          :src="props.active ? icon[1].active : icon[1].inactive"
        />
      </van-tabbar-item>
      <van-tabbar-item class="tab-van-item">
        <span>值得买</span>
        <img
          class="tab-img"
          slot="icon"
          slot-scope="props"
          :src="props.active ? icon[2].active : icon[2].inactive"
        />
      </van-tabbar-item>
      <van-tabbar-item class="tab-van-item">
        <span>购物车</span>
        <img
          class="tab-img"
          slot="icon"
          slot-scope="props"
          :src="props.active ? icon[3].active : icon[3].inactive"
        />
      </van-tabbar-item>
      <van-tabbar-item class="tab-van-item">
        <span>个人</span>
        <img
          class="tab-img"
          slot="icon"
          slot-scope="props"
          :src="props.active ? icon[4].active : icon[4].inactive"
        />
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import TitleHeader from '../../components/header/TitleHeader.vue'
import BScroll from 'better-scroll'
import { mapState } from 'vuex'
import PromotionModule from './PromotionModule/PromotionModule'
export default {
  name: 'Home',
  data() {
    return {
      active: 0,
      icon: [
        {
          active: './images/home-active.png',
          inactive: './images/home.png'
        },
        {
          active: './images/catery-active.png',
          inactive: './images/catery.png'
        },
        {
          active: './images/worthBuy-active.png',
          inactive: './images/worthBuy.png'
        },
        {
          active: './images/buy-active.png',
          inactive: './images/buy.png'
        },
        {
          active: './images/my-active.png',
          inactive: './images/my.png'
        }
      ]
    }
  },
  computed: {
    ...mapState({
      homeList: state => state.home.homeList
    })
  },
  components: {
    TitleHeader,
    PromotionModule
  },
  mounted() {
    this.$store.dispatch('getHomeList').then(res => {
      const len = res.swiperImg.length + 1
      this.$refs.ulList.style.width = len * 164 + 'px'
      console.log(res.bigPromotionModule.floorList[0].cells[0].itemList)
      this.$nextTick(() => {
        this.scroll = new BScroll('.swiper-wrap', {
          click: true,
          scrollX: true
        })
      })
    })

    // BScroll
  }
}
</script>
<style lang="stylus" scoped>
@import '../../common/stylus/common.styl'
.container
  background-color #eee
  .top-header
    img
      width 100%
      height 104px
      display block
  .mix-search-scroll-wrap
    width 100%
    // height
    background-color #fff
    .search
      width 690px
      height 56px
      padding 16px 30px
      display flex
      justify-content space-around
      align-items center
      .logo
        width 138px
        height 40px
        background-image url('//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png')
        background-size cover
      .ipt-wrap
        width 442px
        height 56px
        display flex
        align-items center
        justify-content center
        background-color #ededed
        border-radius 8px
        color #666
        .icon
          height 28px
          width 28px
          background-image url('//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png')
          background-size 100% 100%
        .ipt-words
          font-size 28px
      .btn-login
        font-size 26px
        width 72px
        height 38px
        border 1px solid #DD1A21
        color #DD1A21
        text-align center
        border-radius 8px
        line-height 38px
    .tabWrap
      height 60px
      width 100%
      overflow hidden
      display flex
      flex-wrap nowrap
      position relative
      .swiper-wrap
        width 650px
        height 100%
        overflow hidden
        .ul-list
          display flex
          flex-wrap nowrap
          height 100%
          font-size 28px
          li
            width 164px
            height 100%
            line-height 60px
            text-align center
            span
              padding 0 10px
              font-size 28px
              display inline-block
              height 100%
              width 112px
              position relative
              &:after
                content ''
                display block
                position absolute
                left 0
                bottom 2px
                width 100%
                height 4px
                background-color #f00
      .toggleWrap
        width 160px
        height 100%
        position absolute
        z-index 1
        display flex
        // background-color red
        right 0
        .space
          width 60px
          height 100%
        .toggle
          width 100px
          height 100%
          display flex
          justify-content center
          align-items center
          .icon
            height 30px
            width 30px
            background-image url('//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-down-3-9b31adfa37.png')
            background-size 100% 100%
  .swiper
    width 100%
    height 370px
    background-color red
    .my-swipe
      height 100%
      img
        width 100%
        height 100%
  .w-goodsInfo
    width 100%
    height 72px
    .g-grow
      // width 100%
      height 100%
      // background-color pink
      padding 0 30px
      display flex
      align-items center
      .g-li
        // width 230p
        flex 1
        height 36px
        // background-color blue
        display flex
        justify-content space-around
        align-items center
        .g-li-icon
          width 32px
          height 32px
          // background-color red
          display inline-block
          background-size 100% 100%
        .g-li-words
          font-size 26px
  .shop-wrap
    .f-goodList
      width 100%
      height 372px
      // background-color blue
      bottom-border-1px(#DD1A21)
      .my-swipe
        width 100%
        height 340px
        padding-bottom 32px
        // background-color pink
        .f-goodList-wrap
          height 100%
          display flex
          flex-wrap wrap
          .f-goodList-item
            width 110px
            height 156px
            margin 10px 20px 9px 20px
            // background-color blue
            .f-img
              width 110px
              height 110
            .f-txt
              height 36px
              margin-top 10px
              font-size 20px
              line-height 36px
              text-align center
  .flesh-module
    height 528px
    margin 20px 0
    padding 0 0 30px 0
    background-color #fff
    .moduleTitle
      width 690px
      height 90px
      padding 0 30px
      font-size 36px
      text-align center
      .moduleText
        position relative
        display inline-block
        line-height 90px
        &::before
          content ' '
          display block
          position absolute
          top 45px
          left -40px
          width 30px
          height 3px
          background-color #333
        &::after
          content ' '
          display block
          position absolute
          top 45px
          right -40px
          width 30px
          height 3px
          background-color #333
    .flesh-content
      width 690px
      height 438px
      padding 0 30px
      display flex
      justify-content space-between
      .flesh-left
        width 343px
        height 434px
        margin 0 4px 0 0
        background-color blue
      .new-gift
        font-size 40px
        width 313px
        height 48px
        padding 30px 0 0 30px
      .gift-wrap
        height 257px
        width 258px
        padding 37px 42px
        background-color pink
    .flesh-right
      width 343px
      height 438px
      display flex
      flex-direction column
      .flesh-common
        width 100%
        height 215px
        .flesh-common-conent
          width 313px
          height 195px
          padding 20px 0 0 30px
          background-color black
          position relative
          .picWrap
            width 200px
            height 200px
            position absolute
            right 0
            background-color #333
            z-index 2
            .discount
              width 80px
              height 80px
              background-color #F59524
              padding 10px 0 0 0
              box-sizing border-box
              position absolute
              right 30px
              top 0
              border-radius 50%
              font-size 24px
              text-align center
              .line1
                height 36px
                font-size 28px
              .line2
                height 30px
          .txt
            width 313px
            height 84px
            background-color #FF99FF
            position absolute
            z-index 1
            top 0
            .title
              font-size 32px
              height 48px
            .subTitle
              color #7F7F7F
              font-size 28px
              height 36px
            .subTitleTab
              // display inline-block
              height 32px
              width 120px
              padding 0 10px
              background-color #CBB693
              font-size 24px
              text-align center
              line-height 32px
  .categoryHotSellModule
    height 710px
    background-color #fff
    .moduleTitle
      padding 0 30px
      height 100px
      line-height 100px
      font-size 34px
    .moduleContent
      padding 0 20px 20px 30px
      height 590px
      .m-line1
        height 200px
        padding 0 0 10px 0
        display flex
        justify-content space-around
        .m-line-content
          width 340px
          height 100%
          background-color blue
          display flex
          .line-left
            flex 1
            display flex
            justify-content center
            align-items center
            .hot-line
              font-size 30px
              position relative
              &::after
                content ''
                position absolute
                display block
                height 4px
                width 48px
                background-color black
                bottom -20px
          .line-right
            height 200px
            width 200px
      .m-line2
        width 690px
        height 380px
        .container-item
          display flex
          justify-content space-around
          flex-wrap wrap
          .item
            width 165px
            height 180px
            background-color blue
            margin 0 0 10px 0
            text-align center
            display flex
            flex-wrap wrap
            justify-content center
            .title
              width 100%
              font-size 24px
              padding 10px 0 0 0
            .img-wrap
              width 120px
              height 120px
              background-color pink
              margin-top 2px
  .flashSaleModule
    height 699px
    width 100%
    padding 0 0 20px 0
    .moduleTtile
      height 100px
      padding 0 30px
      display flex
      justify-content space-between
      .left
        width 290px
        height 100px
        display flex
        justify-content space-between
        align-items center
        .words
          font-size 30px
          line-height 100px
        .m-countdown
          width 182px
          height 100%
          background-color blue
      .right
        font-size 30px
        line-height 100px
    .cnt
      height 600px
      width 710px
      padding 0 10px 0 30px
      .cnt-wrap
        width 100%
        display flex
        justify-content space-between
        flex-wrap wrap
        .cnt-item
          width 216px
          height 270px
          background-color blue
          margin-bottom 30px
          .imgWrap
            width 216px
            height 216px
          .txt
            font-size 24px
            padding-left 20px
            width 196px
            height 42px
            .txt1
              font-size 28px
              color #DD1A21
              padding-right 20px
            .txt2
              font-size 24px
              color #7F7F7F
              text-decoration line-through
  .newItemModule
    height 896px
    padding-bottom 26px
    margin-bottom 20px
    .wrap
      width 740px
      height 100%
      padding-left 10px
      .li-wrap
        width 100%
        display flex
        flex-wrap wrap
        justify-content space-around
        .li-item
          width 216px
          height 398px
          background blue
          margin-bottom 13px
          .img
            height 216px
            width 216px
          .dec
            font-size 26px
            height 72px
            color #333
          .price
            font-size 28px
            height 48px
            color #DD1A21
          .tagWraper
            font-size 18px
            height 33px
            color #DD1A21
            span
              border-radius 8px
              border 1px solid #DD1A21
  .sceneLightShoppingGuideModule
    height 536px
    width 694px
    padding 10px 30px 30px 26px
    display flex
    flex-wrap wrap
    justify-content space-around
    .item
      width 323px
      height 244px
      padding 20px 0 0 20px
      margin 4px 0 0 4px
      background-color red
      font-size 30px
      .title1
        width 313px
        height 48px
        padding-left 10px
        color #333333
      .title2
        width 313px
        height 36px
        padding-left 10px
        color #7f7f7f
      .img-wrap
        display flex
        flex-wrap wrap
        .img
          width 150px
          height 150px
          margin-left 4px
          background-color blue
  .m-ftWrap
    height 244px
    background #414141
    .m-ft
      width 710px
      height 162px
      padding 54px 20px 28px 20px
      .top
        height 62px
        margin-bottom 36px
        display flex
        justify-content center
        align-items center
        .btn
          width 170px
          height 60px
          border 1px solid #999
          font-size 28px
          color #fff
          border-radio 4px
          text-align center
          line-height 60px
        .btn1
          margin-right 50px
      .bottom
        height 64px
        display flex
        font-size 24px
        justify-content center
        flex-direction column
        align-items center
        line-height 32px
        color #999
  .tab-van-wrap
    height 98px
    .tab-van-item
      .tab-img
        height 40px
</style>