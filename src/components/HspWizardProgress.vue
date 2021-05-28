<template>
  <div class="hsp_wizardprogress">
    <img class="hsp_wizardprogress_icon active" alt="Huispedia icon" src="../assets/images/huispedia_progress_icon.png" />
    <img v-bind:class="{ active: isActive2 }" class="hsp_wizardprogress_icon" alt="Huispedia icon" src="../assets/images/huispedia_progress_icon.png" />
    <img v-bind:class="{ active: isActive3 }" class="hsp_wizardprogress_icon" alt="Huispedia icon" src="../assets/images/huispedia_progress_icon.png" />
  </div>
</template>

<script>
export default {
  name: "HspWizardProgress",
  data() {
    return {
      isActive2: false,
      isActive3: false,
    };
  },
  methods: {
    progress2() {
      this.isActive2 = !this.isActive2;
    },
    progress3() {
      this.isActive3 = !this.isActive3;
    },
  },
};
</script>

<style lang="scss" scoped>
.hsp_wizardprogress {
  text-align: center;
  &_icon {
    max-width: 60px;
    margin: 15px;
    opacity: 0.7;
    filter: brightness(20);
  }
}
.active {
  filter: unset;
  opacity: unset;
}
</style>
