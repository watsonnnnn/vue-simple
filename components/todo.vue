<template>
    <div class="container">
        <div style="text-align: center">
            <input type="text" :value="inputvalue" @keyup.enter="add">
        </div>
        <div style="padding-left: 38%;min-height: 200px">
            <!--<todo-list @complete="complete" :todo="todos | todoFilters"></todo-list>-->
            <todo-list @complete="complete" :todo="todoComputed"></todo-list>
        </div>
        <div>
            <footerc :controlTabs="controlTabs" @setActive="setActive"></footerc>
        </div>
    </div>
</template>
<script>
    import todoList from './todoList';
    import footerc from './footer';
    let _this = null;
const todo = {
    data(){
        return {
            message:'msss',
            todos:[{value:'task1',completed:false},{value:'task2',completed:true}],
            inputvalue:'',
            controlTabs:['全部','已完成','未完成'],
            checkedTab:'全部'
        }
    },
    methods:{
        add(e){
            this.todos.push({value:e.target.value,completed:false});
            this.inputvalue = '';
        },
        complete(index){
//            console.log(index);
            this.todos[index].completed = true;
        },
        setActive(tab){
            this.checkedTab = tab;
        }
    },
    components:{
        todoList,footerc
    },
    created(){
        _this = this;
    },
    watch:{
      checkedTab(v){
          console.log(v,'watch checkedTab')
      }
    },
    computed:{
      todoComputed(){
        console.log('computed this',this);
        let items = this.todos;
          switch (this.checkedTab){
              case '全部':
                  return items;
              case '已完成':
                  return items.filter((item)=>(item.completed));
              case '未完成':
                  return items.filter((item)=>(!item.completed));
              default:
                  return items;
          }
      }
    },
    filters:{
        todoFilters(items){
            switch (_this.checkedTab){
                case '全部':
                    return items;
                case '已完成':
                    return items.filter((item)=>(item.completed));
                case '未完成':
                    return items.filter((item)=>(!item.completed));
                default:
                    return items;
            }
        }
    }
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