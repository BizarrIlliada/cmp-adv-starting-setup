<template>
  <section>
    <header v-if="$slots.header">
      <slot name="header">
        <!-- <h2>The default title</h2> -->
      </slot>
    </header>
    <slot />
  </section>
</template>

<script>
  export default {
    name: 'BaseCard',
  }
</script>

<style scoped>
  section {
    margin: 2rem auto;
    max-width: 30rem;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 1rem;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
