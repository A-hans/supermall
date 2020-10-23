<template>
  <div id="user-info">
   <div class="content">
     <!-- 左边-->
     <div class='info-left'>
       <div class='user-avatar'>
         <slot name='userAvatar'>
           <img src="~assets/img/profile/avatar.svg" alt="">
           </slot>
       </div>
       <div class='user-login'>
         <div class='title'>
           <slot name='userTitle'>
             登录/注册
             </slot>
         </div>
         <div class='phone'>
           <img src="~assets/img/profile/phone.svg" alt="">
           <slot name='phoneNumber'>
             <span>暂不绑定手机号</span>
             </slot>
         </div>
       </div>
     </div>
     <!-- 右边 -->
     <div class='info-right'>
       <div class='info-more'>
         <img src="~assets/img/profile/arrow-right.svg" alt="">
       </div>
     </div>
   </div>
    </div>
</template>

<script>
export default {
  name: "UserInfo",
};
</script>

<style scoped>
#user-info{
  height: 100px;
  margin-top:-1px ;
  background-color:var(--color-tint) ;
}
#user-info .content{
  display: flex;
  padding:0 15px;
}
.user-avatar{
  width: 90px;
  height: 90px;
  border: 1px solid transparent;
  background-color:#0063B1;
  border-radius: 50%;
  position: relative;
}
.user-avatar img{
  width: 90px;
  height: 90px;
  padding: 10px;
  position: absolute;
  bottom: 7px;
  left: 0;
  right: 0;
}
.user-login{
  flex: 1;
  color:#0C0000;
}
.user-login .title{
  text-indent: 9px;
  font-size: 20px;
  margin-top: 20px;
  margin-bottom:5px;
 
}

.user-login img{
  width: 30px;
  height: 20px;
  vertical-align: middle;
}
.info-left{
  flex: 3;
  display: flex;
}
.info-right{
  text-align:right;
  flex: 1;
  align-self: center;
  
}
.info-more img{
  width: 20px;
  height: 20px;
}
</style>