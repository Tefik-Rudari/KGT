<template>
<div id="contact">
  <v-container class="main">
    <h2 class="head-title">Contact us</h2>
    <v-row>
      <v-flex xs12 md6>
        <form>
          <v-text-field
            v-model="name"
            :error-messages="nameErrors"
            :counter="30"
            label="Name"
            required
            @input="$v.name.$touch()"
            @blur="$v.name.$touch()"
          ></v-text-field>
          <v-text-field
            v-model="email"
            :error-messages="emailErrors"
            label="E-mail"
            required
            @input="$v.email.$touch()"
            @blur="$v.email.$touch()"
          ></v-text-field>
          <v-text-field
            v-model="description"
            :error-messages="textErrors"
            :counter="1000"
            label="Description"
            required
            @input="$v.description.$touch()"
            @blur="$v.description.$touch()"
          ></v-text-field>

          <v-btn class="mr-4" @click="submit"> submit </v-btn>
          <v-btn @click="clear"> reset </v-btn>
        </form>
      </v-flex>
      <v-flex xs12 md6>
        <div class="ml-md-16"></div>
        <Location class="location" />
      </v-flex>
    </v-row>
  </v-container>
</div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, maxLength, email } from "vuelidate/lib/validators";
import Location from "./Location.vue";

export default {
  components: {
    Location,
  },
  mixins: [validationMixin],

  validations: {
    name: { required, maxLength: maxLength(30) },
    email: { required, email },
    description: { required, maxLength: maxLength(1000) },
  },

  data: () => ({
    name: "",
    email: "",
    description: "",
    select: null,
  }),

  computed: {
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.maxLength &&
        errors.push("Name must be at most 10 characters long");
      !this.$v.name.required && errors.push("Name is required.");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    },
    textErrors() {
      const errors = [];
      if (!this.$v.description.$dirty) return errors;
      !this.$v.description.maxLength &&
        errors.push("description must be at most 10 characters long");
      !this.$v.description.required && errors.push("Description is required.");
      return errors;
    },
  },

  methods: {
    submit() {
      this.$v.$touch();
    },
    clear() {
      this.$v.$reset();
      this.name = "";
      this.email = "";
      this.select = null;
    },
  },
};
</script>

<style scoped>
@import "./ContactForm.css";
</style>