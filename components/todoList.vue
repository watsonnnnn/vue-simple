<template>
    <ul>
        <li style="list-style: none" v-for="(value,index) in todo">
            {{index+'-----------'+value}}
        </li>
    </ul>
</template>
<script>
    export default{
        props:['todo']
    }
</script>
<style>

</style>