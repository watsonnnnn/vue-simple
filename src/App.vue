<template>
    <div>
        <h1>welcome Vue</h1>
        <h2 @click="change">{{msg}}</h2>
        <my-menu></my-menu>
    </div>
</template>
<script>
    import Menu from '../components/Menu'

    export default{
        data(){
            return {
                msg: 'welcome Vue ^_^'
            }
        },
        methods: {
            change(){
                this.msg = 'wahaha'
            }
        },
        components: {
            'my-menu': Menu
        }
    }
</script>
<style>
    body {
        background: #ccc
    }
    h2:hover{
        cursor: pointer;
    }
</style>