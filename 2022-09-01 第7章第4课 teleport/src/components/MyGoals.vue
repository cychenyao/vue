<template>
    <ul>
        <my-goal></my-goal>
      </ul>
</template>
<script>
import MyGoal from './MyGoal.vue'
export default {
    name: 'MyGoals',
    props: [],
    components: {MyGoal}
}
</script>