<template>
  <div class="hsp_wizard">
    <HspWizardProgress class="hsp_wizard_progresscontainer" ref="progressBar" />
    <HspWizardStap1 v-on:goToStap2="gaNaarStap2" v-if="stap1" class="hsp_wizard_inputcontainer" />
    <HspWizardStap2
      v-on:goToStap3="updateStap2(false), updateStap3(true), toggleProgress3()"
      v-if="stap2"
      :typeOfTransaction="buyOrSell"
      class="hsp_wizard_inputcontainer"
    />
    <HspWizardStap3 v-on:goToStap2="updateStap2(true), updateStap3(false)" v-if="stap3" class="hsp_wizard_inputcontainer" />
  </div>
</template>

<script>
import HspWizardProgress from "./HspWizardProgress.vue";
import HspWizardStap1 from "./HspWizardStap1.vue";
import HspWizardStap2 from "./HspWizardStap2.vue";
import HspWizardStap3 from "./HspWizardStap3.vue";

export default {
  name: "HspWizard",
  data() {
    return {
      buyOrSell: "",
      stap1: true,
      stap2: false,
      stap3: false,
    };
  },
  components: { HspWizardProgress, HspWizardStap1, HspWizardStap2, HspWizardStap3 },
  methods: {
    gaNaarStap2(p) {
      (this.stap2 = true), (this.stap1 = false), (this.buyOrSell = p), this.toggleProgress2();
    },
    updateStap1(v) {
      this.stap1 = v;
    },
    updateStap2(v) {
      this.stap2 = v;
    },
    updateStap3(v) {
      this.stap3 = v;
    },
    toggleProgress2() {
      this.$refs.progressBar.progress2();
    },
    toggleProgress3() {
      this.$refs.progressBar.progress3();
    },
  },
};
</script>

<style lang="scss">
.hsp_wizard {
  display: flex;
  flex-direction: column;
  margin-top: 7rem;
  align-items: center;
  &_progresscontainer {
    height: 100px;
    width: 400px;
  }
  &_inputcontainer {
    width: 90%;
    min-height: 40%;
    min-width: 30rem;
    background-color: rgba(255, 255, 255, 0.6);
    margin-top: 4rem;
  }
}

// Algemene stijlen

button {
  font-size: 1.5rem;
  text-transform: uppercase;
  font-weight: 700;
  color: white;
  min-width: 300px;
  min-height: 60px;
  border: none;
  background-color: #25315a;
  &:nth-child(1) {
    background-color: #ff385c;
  }
}

input {
  padding: 1rem;
  margin: 0 2rem;
  font-size: 1.5rem;
  border: none;
  max-width: 500px;
  &::placeholder {
    color: #ff385d46;
  }
}

// Lage resoluties

@media screen and (max-width: 768px) {
.hsp_wizard {
  margin-top:1rem;
}
}
</style>
