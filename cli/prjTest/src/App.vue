<template>
  <div>
    <h1>{{ tittle }}</h1>
    <p>{{ greeting() }}</p>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      title : "hello world"
    }
  },
  methods:{
    greeting : function(){
      return "yoyoyoyo";
    }
  }
}
</script>

<style>

</style>
