
<template>
  <section id="events">
     <h2>所有待做</h2>
     <add-goal @add-goal="addToGoals"></add-goal>
    <my-goals :goals="goals"></my-goals>
  </section>
</template>
<script>
import MyGoals from './components/MyGoals.vue'
import AddGoal from './components/AddGoal.vue'
export default {
  provide(){
    return{
      goals: this.goals,
      changeDetail: this.changeDetail,
      removeGoal: this.removeGoal,
    }
  },
  data(){
    return {
      hello: "heelo",
      goals: [
                {
                    id:1,
                    title: '完成vue课程',
                    description: '每天学一点，争取一个月完成vue课程',
                    showDetail: false
                },
                {
                    id:2,
                    title: '每天运动1个小时',
                    description: '每天运动1个小时，5公里',
                    showDetail: false
                },
                {
                    id:3,
                    title: '早睡早起',
                    description: '晚上11点睡觉，早上7点起床',
                    showDetail: false
                }
            ],
          
    }
  },
  methods:{
    removeGoal(goalId){
      console.log('remove...'+ goalId)
      this.goals = this.goals.filter(goal =>goal.id !== goalId)
      console.log(this.goals)
    },
    addToGoals(title, description){
      this.goals.push({
        id: new Date().toISOString(),
        title: title,
        description: description,
        showDetail: false
      })
    },
  changeDetail(goalId){
        console.log('bbbb')
   let findGoal = this.goals.find(goal=>{
      return goal.id === goalId
    })
    findGoal.showDetail = !findGoal.showDetail
  }
  },
  components: {
    'add-goal':AddGoal, 
    MyGoals:MyGoals
  }
}
</script>

<style scoped>
#events {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#events h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #846181;
  margin: 0 0 1rem 0;
}

</style>
