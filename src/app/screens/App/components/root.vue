<template>
  <div id="root" class="u-flex u-flex-column u-justify-center u-items-center u-height-100vh ">
    <img src="~@/assets/images/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'Root'
  }
</script>
