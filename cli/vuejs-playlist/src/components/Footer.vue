<template>
  <footer>
    <p>{{ title }}@{{ copyright }}</p>
  </footer>
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
    return {
      copyright: "Copyright 2021 snakeoil",
    };
  },
  created: function () {
    bus.$on("changeTitle", (data) => {
      this.title = data;
    });
  },
};
</script>

<style scoped>
footer {
  background: darkred;
  padding: 10px;
}

p {
  color: white;
  text-align: center;
}
</style>
