const app = Vue.createApp({
    data(){
        return{
            header: 'Vue 课程目标',
            goals: ['a1', 'a2'],
            docLink: 'https://cn.vuejs.org'
        }
    },
    methods:{
        getGoal(){
            const num = Math.random() //[0-1)
            if(num<0.5){
                return this.goals[0]
            }else{
                return this.goals[1]
            }
        }
    }
})
app.mount('#app')