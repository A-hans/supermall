<template>
<!-- 此模块还未开发，为静态界面 -->
  <div id="profile">
      <nav-bar class='profile-nav'>
        <template v-slot:center>
         <h3>我的</h3> 
        </template>
      </nav-bar>
      <user-info />
      <user-assets />
      <list-view />
     
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar';
import UserInfo from 'views/profile/ChildComps/UserInfo'
import UserAssets from 'views/profile/ChildComps/UserAssets'
import ListView from 'views/profile/ChildComps/ListView'
export default {
name:'Profile',
components:{
NavBar,
UserInfo,
UserAssets,
ListView
}
}
</script>

<style>
.profile-nav{
  background-color:var(--color-tint);
  color: white;
  border: none;
}
</style>