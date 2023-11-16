<script lang="ts" setup>
const props = defineProps(["list", "style", "interval", "arrow"]);
</script>
<template>
  <section id="slideWrap" :style="props.style">
    <el-carousel
      :initial-index="props.index"
      :trigger="props.trigger"
      :interval="props.interval"
      :arrow="props.arrow"
      :autoplay="props.autoplay"
      :loop="props.loop"
      :direction="props.direction"
      :pause-on-hover="props.pause"
      @change="props.change"
      :id="props.id"
    >
      <el-carousel-item v-for="item in props.list" :key="item.key">
        <a :href="item.href">
          <img :src="item.url" alt="img" :style="props.style" />
        </a>
      </el-carousel-item>
    </el-carousel>
  </section>
</template>
<style lang="less" setup>
/* 轮播图css */
#slideWrap {
  width: 1138px;
  height: 485px;
  position: relative;
}
#slideWrap .el-carousel,
#slideWrap .el-carousel .el-carousel__container {
  width: 100%;
  height: 100%;
}
#slideWrap .el-carousel .el-carousel__container {
  display: flex;

  // 禁止div自成一行
  div {
    display: none;
  }

  // 修改左右按钮样式
  .el-carousel__arrow {
    width: 40px;
    height: 62px;
    top: calc(50% - 31px);
    cursor: pointer;
    z-index: 9;
    position: absolute;
    font-size: 20px;
    font-weight: 600;
    border: none;
    border-radius: 0;
  }

  .el-carousel__arrow--left {
    left: 10px;
    background-image: url(//eresource.ecvv.com/PC_Ecvv/images/banner-left.png);
  }

  .el-carousel__arrow--right {
    right: 10px;
    background-image: url(//eresource.ecvv.com/PC_Ecvv/images/banner-right.png);
  }

  .el-icon svg {
    display: none;
  }

  .is-active {
    display: block;
  }

  img {
    width: 100%;
    height: 100%;
  }
}

// 修改指示器样式
#slideWrap .el-carousel__indicators--horizontal {
  display: flex;
  position: absolute;
  z-index: 999;
  bottom: 25px;
  left: calc(50% - 10px);

  .el-carousel__indicator .el-carousel__button {
    width: 60px;
    height: 10px;
    background: rgba(233, 233, 233, 0.5);
    color: #ffffff;
    margin-right: 20px;
    border: none;
  }

  .is-active .el-carousel__button {
    background: #fff;
  }
}
</style>
