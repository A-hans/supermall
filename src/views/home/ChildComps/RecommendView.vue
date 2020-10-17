<template>
  <div class="recommend">
    <ul v-for="item in recommends" :key='item.idnex'>
      <li class='recommend-item'>
       <a :href="item.link">
         <img :src="item.image" alt="" >
        <p>{{item.title}}</p>
       </a>
      </li>
    </ul>
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

<style scoped>
.recommend{
  display: flex;
  justify-content: space-around;
  text-align: center;
  padding: 10px 0 30px 0;
  border-bottom:8px solid #eee ;
}
.recommend-item{
  flex: 1;
}
.recommend ul li{
  list-style: none;
}
.recommend li{
  padding: 5px;
}
.recommend-item img{
  width: 80px;
  height: 80px;
  margin-bottom: 5px;
}
</style>