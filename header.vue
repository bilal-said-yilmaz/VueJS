<template>
    <ul>
        <li v-for="eleman in liste">
            {{ eleman }}
        </li>
    </ul>
</template>

<script>
export default{
    data(){
        return{
             liste : ["Homepage","About Us","Blog","Contact"]
        }
    },
}
</script>
