
<template>
  <section>
     <p @click="showDetail = !showDetail">{{goal.title}} -- {{index}}</p>
    <p v-if="showDetail" style="background:peru">{{goal.description}}</p>
</section>
</template>

<script>

export default {
  props: ['goal'],
  data(){
    return {
        showDetail:false
    }
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
