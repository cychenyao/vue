import { createApp } from 'vue'
import App from './App.vue'
import MyGoal from './components/MyGoal.vue'
import MyCard from './components/MyCard.vue'
import ErrorAlert from './components/ErrorAlert.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Notfound from './components/NotFound.vue'

const app = createApp(App)

app.component('my-goal', MyGoal)
app.component('my-card', MyCard)
app.component('error-alert', ErrorAlert)
import MyGoals from './components/MyGoals.vue'
import AddGoal from './components/AddGoal.vue'
import FooterPage1 from './components/FooterPage1.vue'
import FooterPage2 from './components/FooterPage2.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/toDoList',
        },
        {
            path: '/toDoList',
            name: 'toDoList',
            components: {default: MyGoals, footer: FooterPage1},
        }, {
            name: 'AddForm',
            path: '/addForm/:id',
            components: {default: AddGoal, footer: FooterPage2},
            beforeEnter: (to, from, next)=>{
                console.log('AddForm befor each')
                next()
            },
            props: true
        }, {
            path: '/:notFound(.*)',
            component: Notfound,
        }
    ],
    linkActiveClass: 'active',
    scrollBehavior(to, from, savedPostion){
        if(savedPostion){
            return savedPostion
        }else
        {return {
            left: 0,
            top: 0
        }
    }
    }
})
router.beforeEach(function(to, from, next){
    console.log('全局befor each')
    next();
    // if(to.name === 'AddForm'){
    //     next()
    // }else{
    //     next({
    //         name: 'AddForm',
    //         params: {id : '1'}
    //     });
    // }
   
})
app.use(router)
app.mount('#app')
