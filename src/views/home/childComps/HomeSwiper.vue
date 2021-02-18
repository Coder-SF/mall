<template>
  <swiper>
    <swiper-item v-for="(item, index) in banners" :key="index">
      <template v-slot>
        <a :href="item.link"><img :src="item.image" alt="" /></a>
      </template>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  name: "HomeSwiper",
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    Swiper,
    SwiperItem,
  },
};
</script>

<style>
</style>