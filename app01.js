 const{createApp}=Vue

    createApp({
        data(){
            return {
           name:"Bilal Said",
           a:11,
           b:5
            }
        },
        methods:{
            welcome: function(nm,durum,gayrimenkul){
                return "Hoşgeldin " +nm /*ya da this.name */+"! İşte "+durum+" "+gayrimenkul+":";
            },
            sum: function(){
                return this.a + this.b ;
            }
        }
       
    }).mount("#ilk-uygulama");
