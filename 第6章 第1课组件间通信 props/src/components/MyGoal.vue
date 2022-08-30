
<template>
  <section>
     <p @click="changeShow(goal.id)">{{goal.title}}</p>
    <p v-if="goal.showDetail" style="background:peru">{{goal.description}}</p>
</section>
</template>

<script>
//emit
export default {
  props: 
//   ['goal', 'showDetail'],
{
    goal:{
        type: Object,
        required: true,
    },
    showDetail: {
        type: Boolean,
        required: true,
        default: false,
    },
    h:{
      type: String,  
    }
},
methods:{
    changeShow(goalId){
        console.log('aaa')
        this.$emit('change-detail', goalId)
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
