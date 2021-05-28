<template>
  <div class="hsp_header">
    <img class="hsp_header_logo" alt="Huispedia logo" src="../assets/images/huispedia_logo.png" />
  </div>
</template>

<script>
export default {
  name: "HspHeader",
  props: {
  },
};
</script>

<style lang="scss">
.hsp_header {
    background: linear-gradient(270deg, #22398f, #0d1e58);
    background-size: 400% 400%;
    -webkit-animation: animateheader 30s ease infinite;
    -moz-animation: animateheader 30s ease infinite;
    animation: animateheader 30s ease infinite;
  &_logo {
    width: 200px;
    margin: 15px;
  }
}

@-webkit-keyframes animateheader {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
}
@-moz-keyframes animateheader {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
}
@keyframes animateheader {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
}

</style>
