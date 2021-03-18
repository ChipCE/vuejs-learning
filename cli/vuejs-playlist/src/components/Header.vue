<template>
  <header>
    <h1 v-on:click="changeTitle">{{ title }}</h1>
  </header>
</template>

<script>
import { bus } from "../main";
export default {
  props: {
    title: {
      type: String,
    },
  },
  data: function () {
    return {};
  },
  methods: {
    changeTitle: function () {
      //this.$emit("changeTitle", "new title here");
      // emit in bus
      this.title = "new title here";
      bus.$emit("changeTitle", this.title);
    },
  },
};
</script>

<style scoped>
header {
  background: lightblue;
  padding: 10px;
}

h1 {
  color: red;
  text-align: center;
}
</style>
