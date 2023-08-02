<template>
  <div>
    <TheHeader />
    <button @click="setSelectedComponent('ActiveGoals')">Active goals</button>
    <button @click="setSelectedComponent('ManageGoals')">Manage goals</button>
    <KeepAlive>
      <component :is="selectedComponent"></component>
    </KeepAlive>
  </div>
</template>

<script>
  import TheHeader from './components/layout/TheHeader.vue';
  // import UserInfo from './components/UserInfo.vue';
  // import BadgeList from './components/BadgeList.vue';
  // import CourseGoals from './components/CourseGoals.vue';
  import ActiveGoals from './components/ActiveGoals.vue';
  import ManageGoals from './components/ManageGoals.vue';

  export default {
    components: {
      TheHeader,
      // UserInfo,
      // BadgeList,
      // CourseGoals,
      ActiveGoals,
      ManageGoals,
  },
    data() {
      return {
        selectedComponent: 'ActiveGoals',
        activeUser: {
          name: 'Maximilian Schwarzmüller',
          description: 'Site owner and admin',
          role: 'admin',
        },
      };
    },

    methods: {
      setSelectedComponent(component) {
        this.selectedComponent = component;
      }
    },
  };
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>