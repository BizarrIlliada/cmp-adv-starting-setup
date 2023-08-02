<template>

  <div>
    <h2>Manage goals</h2>
    <input type="text" ref="goal">
    <button @click="setGoal">
      Set goal
    </button>
    <ErrorAlert v-if="isDialogVisible">
      <h2>Input is invalid!</h2>
      <p>Input can't be empty!</p>
      <button @click="closeDialog">Close</button>
    </ErrorAlert>
  </div>
</template>

<script>
  import ErrorAlert from './ErrorAlert.vue';

  export default {
    name: "ManageGoals",
    components: {
      ErrorAlert,
    },
    
    data() {
      return {
        isDialogVisible: false,
      };
    },

    methods: {
      setGoal() {
        const enteredGoal = this.$refs.goal.value;
        if (!enteredGoal) {
          this.isDialogVisible = true;
        }
      },

      closeDialog() {
        this.isDialogVisible = false;
      }
    },
}
</script>
