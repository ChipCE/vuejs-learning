// data must be a funtion return its data obj, or the data will be shared 
Vue.component("greeting",{
    template : '<p>this is component {{name}}. <button v-on:click="changeName">change name</button></p>',
    data : function(){
        return {
            name: "compo-name"
        }
    },
    methods:{
        changeName: function(){
            this.name = "changed";
        }
    }
});


var one = new Vue({
    el : "#vue-app-one",
    data:{
        name : "oneone"
    },
    methods : {
    
    },
    computed:{

    }

});


var two = new Vue({
    el : "#vue-app-two",
    data:{
        name :"twotwo"
    },
    methods : {

    },
    computed:{

    }

});