<template>
  <div>
    <form-helper>
      <div slot="form-header">
        <h3>this is slot header</h3>
      </div>
      <div slot="form-field">
        <input type="text" placeholder="name" required />
        <input type="password" placeholder="passwd" />
      </div>
      <div slot="form-controls">
        <button v-on:click="handleSubmit">submit</button>
      </div>
    </form-helper>
  </div>
</template>

<script>
// Imports
import formHelper from "./components/formHelper.vue";

export default {
  components: {
    "form-helper": formHelper,
  },
  data() {
    return {};
  },
  methods: {
    handleSubmit: function () {
      alert("clicked");
    },
  },
};
</script>

<style>
body {
  margin: 0;
  font-family: "Nunito SemiBold";
}
</style>
