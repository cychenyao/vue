const app = Vue.createApp({
    data(){
        return{
            counter: 0,
            name: ''
        }
    },
    methods:{
        add(index){
            this.counter = this.counter+index
        },
        reduce(index){
            this.counter = this.counter - index
        },
        setName(event){
            this.name= event.target.value
        },
        submitForm(){
            alert("提交表单！")
        }
    }
})
app.mount('body')