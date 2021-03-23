<template>
    <div id="single-blog">
        <h1>{{blog.title}}</h1>
        <article>{{blog.body}}</article>
    </div>
</template>

<script>
// Imports

export default {
    data : function(){
        return {
            id:this.$route.params.id,
            blog:{

            }
        }
    },
    created: function(){
        this.$http.get("https://jsonplaceholder.typicode.com/posts/" + this.id).then(function(data){
            console.log(data.body);
            this.blog = data.body;

        })
    }
 
};
</script>

<style scoped>
#single-blog{
    max-width:800px;
}

</style>
