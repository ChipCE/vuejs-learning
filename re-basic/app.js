new Vue({
    //elements will be controlled
    el: "#vue-app",
    //data inside vue-app
    data :{
        name:"lol",
        job:"neet",
        website:"http://lol.nah",
        webTag : '<a href="https://google.com">google</a>',
        age : 99,
        x:0,
        y:0,
        enableRed: true
    },
    //function
    methods: {
        greet: function(prefix){
            return "Hello " + prefix + this.name;
        },
        add: function(){
            this.age++;
        },
        sub:function(){
            this.age--;
        },
        addNum: function(num){
            this.age+=num;
        },
        subNum:function(num){
            this.age-=num;
        },
        updatePos:function(event){
            //console.log(event);
            this.x= event.offsetX;
            this.y = event.offsetY;
        },
        click: function(){
            alert("clicked");
        },
        logName:function(){
            console.log("name:" + this.name);
        },
        logAge:function(){
            console.log("age:" + this.age);
        }
    },
    // only run when the data changed
    computed:{
        addTenAge : function(){
            return this.age + 10;
        },
        compClass: function(){
            return {
                red : this.enableRed,
                blue : this.age %2 == 0
            }
        }
    }


});