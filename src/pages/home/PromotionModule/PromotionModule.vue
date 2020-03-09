<template>
  <div class="m-indexBigPromotionModule">
    <div class="floorTop">
      <div class="top-img-wrap">
        <img :src="interObj.url" alt class="t-img" />
        <div class="counterPrice">
          <span class="price1">￥{{interObj.counterPrice}}</span>
          <span class="price2">￥{{interObj.retailPrice}}</span>
        </div>
      </div>
    </div>
    <div class="floorMiddle">
      <div class="floor-m-left">
        <img :src="floorList[1].cells[0].picUrl" alt />
      </div>
      <div class="floor-m-right">
        <img :src="floorList[1].cells[1].picUrl" alt />
      </div>
    </div>
    <div class="floorBottom">
      <div class="f-common" v-for="item of floorList[2].cells" :key="item.itemList[0].id">
        <div class="title">
          <div class="title_1">{{item.title}}</div>
          <div class="title_2">{{item.subTitle}}</div>
        </div>
        <div class="img-wrap">
          <img src alt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PromotionModule',
  data() {
    return {
      interObj: {
        url: '',
        counterPrice: 0,
        retailPrice: 0
      }
    }
  },
  props: {
    floorList: Array
  },
  mounted() {
    const { floorList } = this
    const itemList = floorList[0].cells[0].itemList
    this.interObj.url = itemList[0].picUrl
    let i = 0
    this.timer = setInterval(() => {
      if (i > itemList.length - 1) {
        i = 0
      } else {
        this.interObj.counterPrice = itemList[i].counterPrice
        this.interObj.url = itemList[i].picUrl
        this.interObj.retailPrice = itemList[i].retailPrice
      }
      i++
    }, 2000)
  }
}
</script>

<style lang="stylus" scoped>
.m-indexBigPromotionModule
  height 694px
  width 100%
  // background-color #cc3256
  .floorTop
    position relative
    width 100%
    height 240px
    background url('https://yanxuan.nosdn.127.net/481a123e40483888a1dc13db0280611f.gif') // yanxuan.nosdn.127.net/481a123e40483888a1dc13db0280611f.gif)
    background-size 100% 100% // yanxuan.nosdn.127.net/481a123e40483888a1dc13db0280611f.gif) no-repeat
    .top-img-wrap
      position absolute
      top 14%
      left 10%
      width 168px
      height 168px
      // background-color blue
      .t-img
        width 100%
        height 100%
      .counterPrice
        width 138px
        height 32px
        background-color #F48F18
        border-radius 16px 16px
        padding 0 7px
        position absolute
        top 128px
        left 8px
        display flex
        justify-content center
        align-items center
        color #fff
        .price1
          font-size 20px
        .price2
          font-size 16px
          text-decoration line-through
  .floorMiddle
    width 710px
    height 186px
    margin 20px 20px 8px 20px
    display flex
    justify-content space-between
    .floor-m-left
      width 351px
      height 186px
      // background-color blue
      img
        height 100%
        width 100%
    .floor-m-right
      width 351px
      // flex 1
      height 186px
      // background-color yellow
      img
        height 100%
        width 100%
  .floorBottom
    width 710px
    height 220px
    margin 0 20px 20px 20px
    display flex
    justify-content space-between
    .f-common
      display flex
      flex-direction column
      align-items center
      justify-content center
      width 230px
      height 220px
      .title
        // width 131px
        height 65px
        padding 0 10px
        text-align center
        .title_1
          width 100%
          font-size 24px
          font-weight bold
          height 36px
          line-height 36px
          color rgb(171, 9, 51)
        .title_2
          font-size 18px
          height 30px
          line-height 30px
          color rgb(171, 9, 51)
      .img-wrap
        width 140px
        height 140px
        background-color #fff
</style>