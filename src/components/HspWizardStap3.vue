<template>
  <div>
    <div class="hsp_wizard_finished" v-if="filledOutAndsubmitted">
      <h1 class="hsp_wizard_finished_header">
        Bedankt <span>{{ firstname }}</span> voor het invullen van je gegevens
      </h1>
      <img alt="Huispedia logo" src="../assets/images/huispedia_logo_v2.png" />
    </div>
    <div class="hsp_wizard_stap3" v-if="!filledOutAndsubmitted">
      <h1 class="hsp_wizard_stap3_title">{{ stap3 }}</h1>
      <input class="hsp_wizard_stap3_inputfield" v-model="firstname" :placeholder="[[placeholder.firstname]]" type="text" required />
      <input class="hsp_wizard_stap3_inputfield" v-model="lastname" :placeholder="[[placeholder.lastname]]" type="text" required />
      <input class="hsp_wizard_stap3_inputfield" v-model="email" @blur="validateEmail" :placeholder="[[placeholder.email]]" type="email" required />
      <span v-if="msg.email">{{ msg.email }}</span>
      <input
        class="hsp_wizard_stap3_inputfield"
        v-model="phone"
        :placeholder="[[placeholder.phone]]"
        onkeypress="return event.charCode >= 48 && event.charCode <= 57"
        type="text"
        required
      />
      <div class="hsp_wizard_stap3_buttons">
        <button v-on:click="back">
          Terug
        </button>
        <button type="submit" v-on:click="submit">
          Verstuur
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HspWizardStap3",
  props: {},
  data() {
    return {
      stap3: "Laat uw gegevens achter en wij nemen zo snel contact met je op",
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      msg: [],
      filledOutAndsubmitted: false,
      placeholder: {
        firstname: "Naam",
        lastname: "Achternaam",
        email: "Email",
        phone: "Telefoonnummer",
      },
    };
  },
  methods: {
    back() {
      this.$emit("goToStap2");
    },
    submit() {
      if (
        this.firstname !== "" &&
        this.email !== "" &&
        /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(this.email) &&
        this.lastname !== "" &&
        this.phone !== undefined
      ) {
        this.filledOutAndsubmitted = true;
      }
    },
    validateEmail() {
      if (/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {
        this.msg["email"] = "";
      } else {
        this.msg["email"] = "Belangrijk: vul uw juiste emailadres in";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.hsp_wizard {
  &_stap3 {
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    &_title {
      margin: 2rem;
      text-align: center;
    }
    &_inputfield {
      text-align: center;
      margin: 1rem;
    }
    &_buttons {
      margin: 1rem 0;
      text-align: center;
    }
  }
  &_finished {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2rem;
    text-align: center;
    &_header > span {
      color: #ff385c;
    }
  }
}
</style>
