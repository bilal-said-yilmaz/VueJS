const{createApp}=Vue

createApp({
    data(){
        return {
     age:20
        }
    },
    methods:{
        ekle:function(deger){
            return this.age++;
        },
        cikar:function(deger){
            return this.age--;
        },
        ekle10:function(deger){
            return this.age+=deger;
        },
        cikar10:function(deger){
            return this.age-=deger;
        },
        updateXY(event){
console.log(event);
        }
    }
   
}).mount("#app");
