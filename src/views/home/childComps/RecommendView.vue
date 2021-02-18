<template>
  <div class="recommend">
    <div
      class="recommend-item"
      v-for="(item, index) in recommends"
      :key="index"
    >
      <a :href="item.link"></a><img :src="item.image" alt="" />
      <div>
        {{item.title}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
.recommend{
  display: flex;
  padding: 10px 0 20px;
  border-bottom: 8px solid #eee;
  text-align: center;
  font-size: 12px;
}
.recommend-item{
  flex: 1;
}
.recommend-item a{
  display: block;
}
.recommend-item img{
  width: 90%;
  margin-bottom: 4px;
}
</style>