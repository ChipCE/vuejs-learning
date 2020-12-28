var one = new Vue({
    el : "#vue-app-one",
    data:{
       title : "Vua app one"
    },
    methods : {
    
    },
    computed:{
        greet:function(){
            return "Hello app one.";
        }
    }

});


var two = new Vue({
    el : "#vue-app-two",
    data:{
        title : "Vue app two"
    },
    methods : {
        changeTitle : function(){
            one.title = "changed by app 2";
        }
    },
    computed:{
        greet:function(){
            return "Hello app two.";
        }
    }

});