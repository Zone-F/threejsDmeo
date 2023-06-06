<template>
  <canvas id="webgl">浏览器不支持canvas，请切换浏览器重试</canvas>
</template>

<script setup>
import { onMounted } from 'vue'
import { init } from './index'
onMounted(() => {
  // 初始化三维场景
  init();
})
</script>

<style scoped>
#webgl{
  width: 100%;
  height: 100%;
  /* position: absolute;
  top: 0;
  left: 0; */
  outline: none;
}

</style>