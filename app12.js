const{createApp}=Vue

createApp({
    data(){
        return{
        }  
    },
    methods:{
        readRefs(){
            console.log(this.$refs);
            console.log(this.$refs.content.value);
            console.log(this.$refs.content2.innerText);
        }
    },
}).mount("#app");
