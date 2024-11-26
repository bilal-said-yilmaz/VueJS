const{createApp}=Vue

var one = createApp({
    data(){
        return{
            title: "1. Instance title",
            copyFirstTitle: "1. Instance title"
        }
    },
    computed:{
        greet: function(){
            return "Hi first Instance"
        }
    },
}).mount("#app-one");

var two = createApp({
        data(){
            return{
                title: "2. Instance title"
            }
        },
        methods:{
            rechange(){
                return one.title=one.copyFirstTitle
            }
        },
        computed:{
            greet: function(){
                return "Hi second Instance"
            },
            changeTitle: function(){
                return one.title = "Changed"
            }
        },
}).mount("#app-two");
