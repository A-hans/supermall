<template>
<!-- 判断对象是否为空 -->
  <div class='goods-params' v-if="Object.keys(goodsParams).length !==0">
    <!-- 尺码 -->
      <table v-for="(table,index) in goodsParams.sizes" 
      :key='index'
      class="info-size">
        <tr v-for='(tr,indey) in table' :key='indey'>
          <td v-for='(td,indez) in tr' :key='indez'>{{td}}</td>
        </tr>
      </table>
      <!-- 参数 -->
      <table class='info-param'>
        <tr v-for='(tr,index) in goodsParams.infos' :key="index">
          <!-- 两个td的颜色不同，分别取出，不用在一次遍历一次 -->
          <td class='info-param-key'>{{tr.key}}</td>
          <td class='info-param-value'>{{tr.value}}</td>
        </tr>
      </table>
      <!-- 图片 -->
      <!-- 判断字符串长度是否为0 -->
      <div class='info-img' v-if='goodsParams.image.length !==0'>
        <img :src="goodsParams.image" alt="">
      </div>
    </div>
</template>

<script>
export default {
name:'detailGoodsParams',
props:{
  goodsParams:{
    type:Object,
    default(){
      return {}
    }
  }
},
}
</script>

<style scoped>
.goods-params {
    padding: 20px 15px;
    font-size: 14px;
    border-bottom: 5px solid #f2f5f8;
  }
.goods-params table {
  border-collapse: collapse;
  width: 100%;
  
 
}

.goods-params table tr {
    height: 42px;
  }

.goods-params table tr td {
 border-bottom: 1px solid rgba(100,100,100,.1);
  
  }

.info-param{
  border-top: 1px solid rgba(0,0,0,.1);
}

.info-param .info-param-key {
    /*当value的数据量比较大的时候, 会挤到key,所以给一个固定的宽度*/
    width: 95px;
  }

.info-param .info-param-value{
    color: #eb4868
  }

.goods-params .info-img img{
  width: 100%;
}

</style>