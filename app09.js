const{createApp}=Vue

createApp({
    data(){
        return{
            ilanlar:[
                {name:"Hastahane Kavşağı Civarı",fiyat:2000000}, {name:"Yeni Adliye Arkası",fiyat:3000000},{name:"Hoşkadem Camii Doğusu",fiyat:1500000},{name:"Andıl Mahallesi Arsa",fiyat:1700000}
            ],
        }
    },
}).mount("#app");
