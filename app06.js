const{createApp}=Vue

createApp({
    data(){
        return {
            a:0,
            b:0,
            c:0,
        }
    },
    methods:{
        ab_(){
            console.log("A+B method ile yazdırıldı TÜM değerler kontrol edildi")
            return this.a+this.b;
        },
        ac_(){
            console.log("A+C method ile yazdırıldı TÜM değerler kontrol edildi")
            return this.a+this.c;
        },
        bc_(){
            console.log("B+C method ile yazdırıldı TÜM değerler kontrol edildi")
            return this.b+this.c;
        },
        } ,
        computed: {
            ab(){
                console.log("A+B computed ile yazdırıldı C kontrol edilmedi")
                return this.a+this.b;
            },
            ac(){
                console.log("A+C computed ile yazdırıldı B kontrol edilmedi")
                return this.a+this.c;
            },
            bc(){
                console.log("B+C computed ile yazdırıldı A kontrol edilmedi")
                return this.b+this.c;
            },
         }
}).mount("#app");
