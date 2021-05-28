<template>
  <div class="hsp_wizard_stap1">
    <h1 class="hsp_wizard_stap1_title">{{ heading }}</h1>
    <div class="hsp_wizard_stap1_buttoncontainer">
      <button v-on:click="$emit('goToStap2', 'Mijn zoekbudget is...')" class="hsp_wizard_stap1_buttoncontainer_button">Kopen</button>
      <button v-on:click="$emit('goToStap2', 'Mijn beoogde vraagprijs is...')" class="hsp_wizard_stap1_buttoncontainer_button">Verkopen</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HspWizardStap1",
  data() {
    return {
      heading: "U wilt uw huis...",
    };
  },
};
</script>

<style lang="scss" scoped>
.hsp_wizard {
  &_stap1 {
    margin-top: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    &_title {
      text-align: center;
      margin-bottom: 10%;
    }
    &_buttoncontainer {
      text-align: center;
      margin: 0 2rem 2rem 2rem;
    }
  }
}

// Algemene scoped stijlen

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
</style>
