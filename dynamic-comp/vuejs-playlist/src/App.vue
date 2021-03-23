<template>
  <div>
    <!-- keep-alive will keep the data when switch component -->
    <keep-alive>
      <component v-bind:is="setComponentName"></component>
    </keep-alive>
    <button v-on:click="setComponentName = 'form-one'">Show form one</button>
    <button v-on:click="setComponentName = 'form-two'">Show form two</button>
  </div>
</template>

<script>
// Imports
import formOne from "./components/formOne.vue";
import formTwo from "./components/formTwo.vue";

export default {
  components: {
    "form-one": formOne,
    "form-two": formTwo,
  },
  data() {
    return {
      setComponentName: "form-one",
    };
  },
  methods: {
    handleSubmit: function () {
      alert("thanks for submitting");
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
