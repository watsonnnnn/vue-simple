<template>
    <ul>
        <li style="list-style: none;margin-right: 12px;display:inline-block" v-for="(v,i) in controlTabs">
            <a @click="clicktab(v,i)" :class="{activea:activeindex === i}">{{v}}</a>
        </li>
    </ul>
</template>
<script>
    export default {
        data(){
          return {
              active:false,
              activeindex:0
          }
        },
        methods:{
          clicktab(v,i){
              console.log(v);
              this.activeindex = i;
          }
        },
        props:['controlTabs'],
        created(){
            console.log('created')
        }
    }
</script>
<style scoped>
    a:hover{
        cursor: pointer;
    }
    a:active{
        text-decoration: underline;
    }
    .activea{
        color:#00cec9
    }
</style>