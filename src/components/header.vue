<template>
    <div>
        <h2>welcome to vue.x.com</h2>
        <p><router-link to="/login">login</router-link>&nbsp;<router-link to="/register">register</router-link></p>
        <p><a @click="click">click</a></p>
    </div>
</template>
<script>
    export default {
        methods:{
            click(){
                this.$router.push('/login')
            }
        }
    }
</script>
<style>
    a:hover{
        cursor: pointer;
    }
</style>