<template>
  <div id="toast" v-show="isShow">
    {{ message }}
  </div>
</template>

<script>
export default {
  name: "toast",
  data() {
    return {
      message: "",
      isShow: false,
    };
  },
  methods: {
    show(message='请输入内容',duration=1000) {
      this.isShow = true;
      this.message = message;
      //在给定时间后，toast消失
      setTimeout(() => {
        this.isShow = false;
        this.message = "";
      }, duration);
    },
  },
};
</script>

<style scoped>
#toast {
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 9;
  transform: translate(-50%, -50%);
  padding: 8px 10px;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>