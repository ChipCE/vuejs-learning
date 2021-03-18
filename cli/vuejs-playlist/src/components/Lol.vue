<template>
  <div id="machine">
    <ul>
      <li
        v-for="(machine, index) in machines"
        v-on:click="machine.show = !machine.show"
        v-bind:key="index"
      >
        <h2>{{ machine.name }}</h2>
        <h3 v-show="machine.show">{{ machine.speciality }}</h3>
      </li>
    </ul>
    <button v-on:click="deleteMachine">Delete machine</button>
  </div>
</template>

<script>
export default {
  props: {
    machines: {
      type: Array,
    },
  },
  data: function () {
    return {};
  },
  methods: {
    deleteMachine: function () {
      this.machines.pop();
    },
  },
};
</script>

<style scoped>
#machine {
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
  box-sizing: border-box;
}
ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}
li {
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 30px;
  border: 1px solid #222;
  margin: 10px;
}
</style>
