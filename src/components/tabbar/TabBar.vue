<template>
  <div id="TabBar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name:"TabBar"
  }
</script>

<style>
  #TabBar{
    display: flex;
    background: #f5f5f5;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 -1px 1px rgba(0,0,0,.1);
  }
</style>
