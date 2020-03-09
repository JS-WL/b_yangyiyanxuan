<template>
  <div class="moduleTtile">
    <div class="left">
      <span class="words">限时购</span>
      <!-- <div class="m-countdown"></div> -->
    </div>
    <div class="right">
      <span>更多</span>
      <i>>></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TitleHeader'
}
</script>

<style lang="stylus" scoped>
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
</style>