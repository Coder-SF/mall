<template>
  <div id="home">
    <nav-bar class="nav-center">
      <template v-slot:center> 购物车 </template>
    </nav-bar>
    <home-swiper :banners="banners" />
    <recommend-view :recommends="recommends" />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";

import { getHomeMultiData } from "network/home";

export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: [],
    };
  },
  created() {
    getHomeMultiData().then((res) => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });
  },
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
  },
};
</script>

<style>
.nav-center {
  background: var(--color-tint);
  color: #fff;
  box-shadow: inset 1px 0 3px rgba(0, 0, 0, 1);
}
</style>