
<template>
  <section>
    <router-view></router-view>
    <li v-for="goal in goals" :key="goal">
        <my-card>
          <template #header="slotProps">
            <h1>{{slotProps.title}}</h1>
            <h2 @click="changeDetail(goal.id)">{{goal.title}}</h2>
          </template>
           <template #default>
            <p v-if="goal.showDetail" style="background:peru">{{goal.description}}</p>
            <button @click.prevent="removeGoal(goal.id)">删除</button>
            <router-link :to="'/addForm/'+goal.id">编辑</router-link>
          </template>
        </my-card>
    </li>
  </section>
</template>

<script>
//emit
export default {
inject: ['goals', 'changeDetail', 'removeGoal'],
emits: ['change-detail', 'delete-goal'],
methods:{
    changeShow(goalId){
        console.log('aaa')
        this.$emit('change-detail', goalId)
    },
    deleteGoal(goalId){
      this.$emit('delete-goal', goalId)
    }
},
mounted(){
    console.log(this.h)
}
}
</script>

<style scoped>
p {
  font-size: 1.25rem;
  font-weight: bold;
  border: 1px solid #846181;
  background-color: #846181;
  color: white;
  padding: 0.5rem;
  border-radius: 25px;
}

</style>
