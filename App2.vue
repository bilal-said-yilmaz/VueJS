<template>
    <app-header></app-header>
    <app-footer></app-footer>

</template>

<script>
import Header from "./header.vue" // locale component with createApp(App).mount('#app')
export default{
    components:{
        "app-header":Header
    },
    data(){
        return{
            
        }
    },
}
</script>
