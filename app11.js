const { createApp } = Vue;

var one = createApp({
    data() {
    },
});
one.component("element", {
    template: `
        <h1>Element Tag : {{ name }}</h1>
        <button v-on:click="changeName">Change</button>
        <button v-on:click="rechangeName">ReChange</button>
    `,
    data() {
        return {
            name: "Fiyatı gör"
        }
    },
    methods: {
        changeName() {
            this.name = "2.000.000"
        },
        rechangeName(){
            this.name ="Fiyatı gör"
        },
    },
});
one.mount("#app-one");
