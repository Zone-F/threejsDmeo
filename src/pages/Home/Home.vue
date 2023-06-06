<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <el-menu default-active="/" class="el-menu-vertical-demo">
          <el-menu-item
            :index="menu.path"
            v-for="(menu, index) in router"
            :key="index"
          >
            <router-link :to="menu.path">{{ menu.name }}</router-link>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>  </el-main>
    </el-container>
  </div>
</template>

<script setup>
const router = [
  { path: "/", name: "Home" },
  { path: "/RfidChip", name: "RfidChip" },
  { path: "/Beats", name: "Beats" },
  { path: "/City", name: "City" },
];
</script>

<style lang="scss" scoped>

</style>