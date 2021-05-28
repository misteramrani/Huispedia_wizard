<template>
  <div class="hsp_main">
    <div class="hsp_main_taglinecontainer">
      <h1 class="hsp_main_taglinecontainer_tagline">{{ title }}</h1>
    </div>
    <HspWizard class="hsp_main_wizardcontainer" />
  </div>
</template>

<script>
import HspWizard from "./HspWizard.vue";

export default {
  name: "HspMain",
  data() {
    return {
      title: "Vind met onze hulp jouw best passende makelaar of woning",
    };
  },
  components: { HspWizard },
};
</script>

<style lang="scss">
.hsp_main {
  display: flex;
  background: linear-gradient(rgba(255, 255, 255, 0.37), rgba(255, 255, 255, 0.37)), url("../assets/images/huispedia_background.jpg") no-repeat;
  background-size: cover;
  min-height: 100%;
  &_taglinecontainer {
    width: 50%;
    &_tagline {
      padding: 7rem;
      text-align: center;
    }
  }
  &_wizardcontainer {
    width: 50%;
  }
}

// Lage resoluties

@media screen and (max-width: 768px) {
  .hsp_main {
    flex-direction: column;
    &_taglinecontainer {
      width: 100%;
      &_tagline{
        padding-bottom: 1rem;
      }
    }
      &_wizardcontainer {
    width: 100%;
  }
  }
}
</style>
