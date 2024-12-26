<template>
    {{ title }}
    <button v-on:click="changeTitle">Click here for change</button>
    <button v-on:click="reverseTitle">Click here for reverse</button>
</template>

<script>
export default{
    data(){
        return{
            title: 'Welcome!'
        }
    },
    methods:{
        changeTitle(){
            this.title= 'Good Bye!'
        },
        reverseTitle(){
            this.title= 'Welcome!'
        }
    }
}
</script>
