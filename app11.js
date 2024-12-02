const{createApp}=Vue


var one = createApp({
    data(){
        return{

        }
    },
});
one.component("element",{
    template:"<p>Element Tag : {{name}}</p><button v-on:click=\"changeName()\">Change</button>",
    data(){
        return{
            name:"Fiyatı gör"
        }
    },
    method:{
        changeName(){
            this.name="2.000.000"
        }
    },
});
one.mount("#app-one");
var two = createApp({
    data(){
        return{

        }
    },
}).mount("#app-two");
