Vue.createApp(
    {
        data(){
            return{
                inputValue: '',
                goals: ['测试']
            }
        },
        methods:{
            addTarget(){
                this.goals.push(this.inputValue);
                this.inputValue = ''
            }
        }
    }
).mount('#app')


// const btn = document.querySelector('button')

// const ipt = document.querySelector('input')

// const list = document.querySelector('ul')

// function addTarget(){
//     const v = ipt.value
//     const newLi = document.createElement('li')
//     newLi.textContent = v
//     list.append(newLi)
// }

// btn.addEventListener('click', addTarget)