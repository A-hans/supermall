<template>
  <div class='user-assets'>
    <div class='assets-item'>
      <div class='content'>
        <div class='num'>0.00<span>元</span></div>
        <div class="title">我的余额</div>
      </div>
    </div>

    <div class='assets-item center'>
      <div class='content'>
        <div class='num'>0<span>个</span></div>
        <div class="title">我的优惠</div>
      </div>
    </div>

    <div class='assets-item'>
      <div class='content'>
        <div class='num'>0<span>分</span></div>
        <div class="title">我的积分</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name:'UserAssets',
}
</script>

<style scoped>
.user-assets{
  display: flex;
  border-bottom: 20px solid #F2F2F2;
}
.assets-item{
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 80px;
  
}
.center{
border-left: 1px solid #F2F2F2;
border-right: 1px solid #F2F2F2;
}
.content .num{
  font-size: 30px;
  font-weight: bold;
  color: #FF5D34;
}
.content .num span{
  margin-left:5px ;
  font-size: 18px;
  font-weight: 400;
  color: #7B818C;
}
.content .title{
  font-size: 15px;
  color: #7B818C;
  margin-top: 8px ;
}
</style>