<template>
  <div class="hsp_wizard_stap2">
    <h1 class="hsp_wizard_stap2_title">{{ typeOfTransaction }}</h1>

    <input
      class="hsp_wizard_stap2_input"
      v-model="price"
      type="text"
      onkeypress="return event.charCode >= 48 && event.charCode <= 57"
      :placeholder="[[placeholder]]"
      required
    />
    <span v-if="msg">{{ msg }}</span>
    <button v-on:click="goToStap3" class="hsp_wizard_stap2_button">Ga door</button>
  </div>
</template>

<script>
export default {
  name: "HspWizardStap2",
  props: {
    typeOfTransaction: String,
  },
  data() {
    return {
      msg: "",
      price: "",
      heading: "Jouw vraagprijs is...",
      placeholder: "€",
    };
  },
  methods: {
    goToStap3() {
      if (this.price.length > 4) {
        this.$emit("goToStap3");
        console.log(this.typeOfTransaction);
      } else {
        this.msg = "Heeft u het juiste bedrag ingevuld?";
      }
    },
  },
};
</script>

<style lang="scss">
.hsp_wizard {
  &_stap2 {
    margin-top: 7rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    &_title {
      text-align: center;
    }
    &_button {
      margin: 2rem;
    }
  }
}
</style>
