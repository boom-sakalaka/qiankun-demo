<template>
  <div>home-page</div>
</template>

<script>
export default {
  name: 'home-page',
  data() {
    return {};
  },
  mounted() {
    setTimeout(() => {
      console.warn('main-login-window......', window?.abb);
    }, 2000);
  },
  methods: {},
};
</script>
<style lang="scss" scoped></style>
