<template>
    <div id="list">
      <ul class='list'>
        <li class='list-item'>
          <div class='icon'>
          <img src="~assets/img/profile/bear.png" alt="">
          </div>
          <div class='title'>我的消息</div>
        </li>

        <li class='list-item'>
          <div class='icon'>
          <img src="~assets/img/profile/bee.png" alt="">
          </div>
          <div class='title'>积分商城</div>
        </li>

        <li class='list-item last'>
          <div class='icon'>
          <img src="~assets/img/profile/horse.png" alt="">
          </div>
          <div class='title'>会员卡</div>
        </li>
      </ul>
      <ul class='list'>
        <li class='list-item '>
          <div class='icon'>
          <img src="~assets/img/profile/butterflies.png" alt="">
          </div>
          <div class='title'>下载APP</div>
        </li>
         <li class='list-item last'>
          <div class='icon'>
          <img src="~assets/img/profile/royal.png" alt="">
          </div>
          <div class='title'>我的购物车</div>
        </li>
      </ul>
    </div>
</template>

<script>
	export default {
		name: "ListView",
 
	}
</script>

<style scoped>
ul{
  list-style: none;
}
.list{
   border-bottom: 20px solid #F2F2F2;
   padding: 0 15px;
}
.list-item .icon img{
   width: 30px;
   height: 30px;
   vertical-align: middle;
}
.list-item {
 
  height: 50px;
  display: flex;
}
.list-item .icon{
  flex: 1;
  align-self: center;
}
.list-item .title{
  flex: 7;
  width: 100%;
  font-size: 18px;
  line-height: 50px;
  border-bottom: 1px solid  #F2F2F2;
}
.last .title{
  border: none;
}
</style>
