<template>
    <div>
        <Top></Top>
        <router-view></router-view>
        <Bottom></Bottom>
    </div>
</template>
<script>
    import Top from './components/header';
    import Bottom from './components/footer';
    export default {
        components: {
            Top,Bottom
        }
    }
</script>
<style scoped>
    body {
        background: #ccc
    }
</style>