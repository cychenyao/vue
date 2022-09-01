<template>
    <form >
        <div>
            <label>名称</label>
            <input type="text" v-model="title"/>
        </div>
         <div>
            <label>详情</label>
            <input type="text"  v-model="description"/>
        </div>
        <button @click.prevent="addGoal">添加</button>
    </form>
</template>

<script>
export default {
   name: 'AddGoal',
   emits: ['change-detail', 'add-goal'],
   data(){
    return{
        title: '',
        description: ''
    }
   },
   methods:{
    addGoal(){
        console.log('add goal!')
        this.$emit('add-goal', this.title, this.description)
    }
   }
}
</script>

<style scoped>

</style>
