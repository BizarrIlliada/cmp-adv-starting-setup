<template>
  <dialog open>
    <slot></slot>
  </dialog>
</template>

<script>
  export default {
    name: 'ErrorAlert',

    data() {
      return {}
    },
  }
</script>

<style scoped>
  dialog {
    --dialog-width: 300px;

    width: var(--dialog-width);
    height: min-content;
    position: fixed;
    left: calc(50vw - (var(--dialog-width) / 2));
    top: 30vh;
    padding: 10px;
    margin: 0;
    background-color: #ebebeb;
    box-shadow: 0 2px 8px #cbcbcb;
    border: 1px solid gray;
    border-radius: 20px;
    text-align: center;
  }
</style>
