<template>
  <ul>
    <li v-for="goal in goals" :key="goal">
      <slot :goal="goal" secondProp="!!!"></slot>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'CourseGoals',

    data() {
      return {
        goals: ['Finish the course', 'Become a Vue master'],
      }
    },
  }
</script>
