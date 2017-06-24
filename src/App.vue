<template>
    <div>
        <h1>welcome</h1>
        <h2 @click="change">{{msg}}</h2>
        <my-menu></my-menu>
    </div>
</template>
<script>

    export default{
        data(){
            return {
                msg: 'welcome ^_^'
            }
        },
        methods: {
            change(){
                this.msg = 'wahaha'
            }
        },
    }
</script>
<style scoped>
    body {
        background: #ccc
    }
    h2:hover{
        cursor: pointer;
    }
</style>