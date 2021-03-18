<template>
<div>
    <h1> list of machines</h1>
    <ul>
        <li v-for="(machine,index) in machines" v-bind:key="index">{{machine}}</li>
    </ul>
</div>
</template>

<script>
export default {

  data () {
    return {
      machines : ["bear","hevort","voron"]
    }
  }
}
</script>

<style scoped>
    h1{
        color:blue;
    }
</style>
