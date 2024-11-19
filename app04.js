const{createApp}=Vue

createApp({
    data(){
        return {

        }
    },
    methods:{
     entersonrasi: function(){
        console.log("Enter'a bastıktan sonra yazdıklarını yakaladım")
     },
     enteroncesi(){
        console.log("Enter'a basmasan da yazdıklarını yakaladım")
     }
    }
}).mount("#app");
