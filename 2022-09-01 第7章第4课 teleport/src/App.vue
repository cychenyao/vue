
<template>
<!-- sagment -->
  <section id="events">
    <button @click="setPage('my-goals')">所有待做</button>
    <button  @click="setPage('add-goal')">添加待做</button>
    <!-- dynamic component -->
    <keep-alive>
        <component :goals="goals" @add-goal="addToGoals" :is="currentPage">
        </component>
      </keep-alive>
      <teleport to="body">
        <error-alert v-if="inputInvalid">
          <h1>输入不能为空</h1>
          <p>请输入目标名称和内容！</p>
        </error-alert>
      </teleport>
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
      inputInvalid: false,
      currentPage: "my-goals",
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
    setPage(p){
      this.currentPage = p;
    },
    removeGoal(goalId){
      console.log('remove...'+ goalId)
      this.goals = this.goals.filter(goal =>goal.id !== goalId)
      console.log(this.goals)
    },
    addToGoals(title, description){
      console.log('add to goals')
      if(!title || title == ''){
        // alert('目标不能为空！')
        this.inputInvalid = true;
      }
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
