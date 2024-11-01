<template>
  <div>sub-login......</div>

  <!-- <div @click="toHome">toHome</div> -->
  <div @click="changeWin">修改window里面的值</div>
</template>

<script setup lang="ts">
// console.log('sub-login......', window?.share);

// const toHome = () => {
//   window?.share?.router.push('/');
// };

const changeWin = () => {
  //todo
  window.abb = {
    type: 'sub',
  };
  console.log('sub-login......', window?.abb);
};
</script>

<style></style>
