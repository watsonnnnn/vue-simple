<template>
    <ul>
        <li  v-for="(item,index) in todo">
            {{item.value}}
            {{item.completed?'已完成':'未完成'}}
            <a v-show="!item.completed" @click="complete(index)" style="color:#3da741;margin-left: 60px">完成</a>
        </li>
    </ul>
</template>
<script>
    export default{
        props:['todo'],
        methods:{
            complete(v){
                this.$emit('complete',v)
            }
        }
    }
</script>
<style scoped>
    a:hover{
        cursor: pointer;
    }
</style>