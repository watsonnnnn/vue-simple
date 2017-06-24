<template>
    <div>
        <Top></Top>
        <router-view></router-view>
    </div>
</template>
<script>
import Top from './components/header';
    export default{
        components:{
            Top
        }
    }
</script>
<style scoped>
    body {
        background: #ccc
    }
</style>