const{createApp}=Vue

createApp({
    data(){
        return {
     age:20,
     x:0,
     y:0,
     LinkedIN:"https://www.linkedin.com/in/bilal-said-y%C4%B1lmaz-a93a212a5/"
    }
    },
    methods:{
        ekle:function(deger){
            return this.age++;
        },
        cikar:function(deger){
            return this.age--;
        },
        ekle10:function(deger2){
            return this.age+=deger2;
        },
        cikar10:function(deger2){
            return this.age-=deger2;
        }, //methodlar arasına virgül konur
        updateXY(event){
            console.log(event);
            this.x=event.offsetX
            this.y=event.offsetY
        },
        tikla(){
            alert("TIKLAMA DEMİŞTİM ^_^")
        }
    }
   
}).mount("#app");
