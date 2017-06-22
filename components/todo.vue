<template>
    <div class="container">
        <div style="text-align: center">
            <input type="text" :value="inputvalue" @keyup.enter="add">
        </div>
        <div style="padding-left: 38%;min-height: 200px">
            <todo-list :todo="todos"></todo-list>
        </div>
        <div>
            <footerc :controlTabs="controlTabs"></footerc>
        </div>
    </div>
</template>
<script>
    import todoList from './todoList';
    import footerc from './footer';
const todo = {
    data(){
        return {
            message:'msss',
            todos:[],
            inputvalue:'',
            controlTabs:['全部','已完成','未完成']
        }
    },
    methods:{
        add(e){
            this.todos.push(e.target.value);
            this.inputvalue = '';
        }
    },
    components:{
        todoList,footerc
    },
}
export default todo;
</script>
<style>
    .container{
        background: #ccc;
        min-height: 300px;
        width: 600px;
        margin: 300px auto 0;
    }
</style>