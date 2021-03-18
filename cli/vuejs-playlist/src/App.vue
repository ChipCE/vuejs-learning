<template>
  <div>
    <app-header
      v-bind:title="title"
      v-on:changeTitle="updateTitle($event)"
    ></app-header>
    <app-lol v-bind:machines="machines"></app-lol>
    <app-footer v-bind:title="title"></app-footer>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import Lol from "./components/Lol";

export default {
  components: {
    "app-header": Header,
    "app-lol": Lol,
    "app-footer": Footer,
  },
  data() {
    return {
      machines: [
        {
          name: "hevort",
          type: "corexy",
          show: false,
          speciality: "conponent",
        },
        {
          name: "bear",
          type: "bed-slinger",
          show: false,
          speciality: "html wizard",
        },
        { name: "voron0", type: "corexy", show: false, speciality: "click" },
        {
          name: "voron2",
          type: "corexy",
          show: false,
          speciality: "condition",
        },
        {
          name: "voron2-l",
          type: "corexy",
          show: false,
          speciality: "webpack",
        },
        {
          name: "hevort-l",
          type: "corexy",
          show: false,
          speciality: "data diggin",
        },
      ],
      title: "sample title",
    };
  },
  methods: {
    updateTitle: function (newTitle) {
      this.title = newTitle;
    },
  },
};
</script>




<style scoped>
</style>
