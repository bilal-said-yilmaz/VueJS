const{createApp}=Vue
createApp({
    data(){
        return{
            aktiflik: true,
            ekstra: false,
        }
    },
    methods:{

    },
    computed:{
        computed_ile(){
            return{
                aktif:this.aktiflik,
                ekstra: this.ekstra
            }
        }
    }
}).mount("#app");
