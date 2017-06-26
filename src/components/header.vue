<template>
    <div>
        <h2>welcome to vuejs.com</h2>
        <p><router-link to="/login">login</router-link>&nbsp;<router-link to="/register">register</router-link>&nbsp;
        <a style="text-decoration:underline" @click="click">click to detail</a></p>
        <hr/>
    </div>
</template>
<script>
    export default {
        methods:{
            click(){
                this.$router.push({name:'humandetail',query:{id:2}})
            }
        }
    }
</script>
<style>
    a:hover{
        cursor: pointer;
    }
</style>