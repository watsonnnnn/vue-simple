<template>
    <div>
        <h1>welcome</h1>
        <h2 @click="change">{{msg}}</h2>
        <my-menu></my-menu>
        <a-button type="primary">Primary</a-button>
    </div>
</template>
<script>
    import Menu from '../components/Menu'

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
        components: {
            'my-menu': Menu
        }
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