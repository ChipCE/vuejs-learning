<template>
  <div v-theme:column="'narrow'" id="show-blog">
    <h1>all article</h1>
    <input type="text" v-model="search" placeholder="search str" />
    <div class="single-blog" v-for="(blog, index) in filteredBlogs" :key="index">
      <router-link v-bind:to="'/blog/' + blog.id"><h2 v-rainbow>{{ blog.title | to-uppercase }}</h2></router-link>
      <article>{{ blog.body | limitLength }}</article>
    </div>
  </div>
</template>

<script>
// Imports
import searchMixin from "../mixins/searchMixin"

export default {
  data() {
    return {
      blogs: [],
      search : "",
      filterBlogs : []
    };
  },
  methods: {},
//   computed:{
//               filteredBlogs: function(){
//             return this.blogs.filter((blog) => {
//                 return blog.title.match(this.search);
//             });
//         }
//   },
  created() {
    this.$http
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(function (data) {
        this.blogs = data.body.slice(0, 10);
      });
  },
  filters:{
      'to-uppercase':function(value){
          return value.toUpperCase();
      },
      limitLength(value){
          return value.slice(0,100) + "...";
      }

  },
  directives:{
      'rainbow':{
          bind(el,binding,vnode){
              el.style.color = "#" + Math.random().toString().slice(2, 8);
          }
      }
  },
  mixins:[searchMixin]
};
</script>

<style>
#show-blog {
  max-width: 800px;
  margin: auto;
}

.single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}
</style>
