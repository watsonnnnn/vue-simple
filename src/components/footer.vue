<template>
    <div>
        <hr/>
        <p>this is footer!</p>
        <p>{{this.$store.state.count}}</p>
        <input type="button" value="increment" @click="add({count:2})"/>
        <input type="button" value="incrementAsync" @click="incrementAsync({count:3})"/>
    </div>
</template>
<script>
    import {mapMutations,mapActions} from 'vuex';
    export default {
        methods:{
            // ...mapMutations(['increment'])  this.$store.commit('increment',{count:2})
            ...mapMutations({
                add:'increment',
            }),
            ...mapActions(['incrementAsync'])
        },
        created(){
        }
    }
</script>
<style scoped>

</style>