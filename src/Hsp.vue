<template>
  <div id="hsp">
    <HspHeader class="hsp_header" />
    <HspMain />
  </div>
</template>

<script>
import HspHeader from "./components/HspHeader.vue";
import HspMain from "./components/HspMain.vue";

export default {
  name: "Hsp",
  components: {
    HspMain,
    HspHeader,
  },
};
</script>

<style lang="scss">
.hsp_header {
  position: fixed;
  width: 100%;
}
#hsp {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100vh;
  // overflow: hidden;
}
</style>
