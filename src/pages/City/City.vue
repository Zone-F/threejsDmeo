<template>
  <canvas id="webgl">浏览器不支持canvas，请切换浏览器重试</canvas>
</template>

<script setup>
import { onMounted } from "vue";
import { initCity } from "./entry/index";
onMounted(() => {
  // 初始化三维场景
  initCity();
});
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}

html, body{
  overflow: hidden;
}

#webgl{
  position: fixed;
  top: 0;
  left: 0;
  outline: none;
}
</style>