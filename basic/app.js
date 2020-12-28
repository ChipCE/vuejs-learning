new Vue({
    el : "#vue-app",
    data:{
        name: "John Smith",
        age: 0,
        job : "snakeoil maker",
        website:"https://snakeoildev.com",
        websiteTag:'<a href="https://snakeoildev.com">hp tag</a>',
        count: 0,
        x:0,
        y:0,
        available:false,
        nearby:false,
        error: false,
        success: false,
        characters: ["Mario","Luigi","Yoshi","Bowser"],
        ninjas: [
            { name: 'Ryu', age: 25 },
            { name: 'Yoshi', age: 35 },
            { name: 'Ken', age: 55 }
        ]
    },
    methods : {
        greet:function(arg){
            return "Hello " + this.name + " " + arg;
        },
        add:function(evt){
            evt.preventDefault();
            if (evt.type === 'dbclick') {
                this.count += 10;
            } else {
                this.count++;
            }            
        },
        sub:function(arg){
            this.count -= arg;       
        },
        updateXY:function(event){
            // console.log(event);
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        overdriveClick:function(event){
            //event.preventDefault();
            alert("link clicked");
        },
        logName:function(){
            console.log("name");
        },
        logAge:function(){
            console.log("age");
        },
        
    },
    computed:{
        tenTimes:function(){
            return this.count * 10;
        },
        compClasses:function(){
            return {
                available : this.available,
                nearby : this.nearby
            }
        }
    }

});