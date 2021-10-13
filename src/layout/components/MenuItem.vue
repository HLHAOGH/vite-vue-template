<template>
  <el-menu-item
    :index="`${route.path}/${subRoute.path}`"
    v-if="subRoute.meta.menu && route.path !== '/'">
    <Icon :name="subRoute.meta.icon" class="menu-icon"></Icon>
    <span>{{ subRoute.meta.title }}</span>
  </el-menu-item>
    <el-menu-item
    :index="route.path"
    v-else-if="route.path === '/'">
    <Icon :name="subRoute.meta.icon" class="menu-icon"></Icon>
    <span>{{ subRoute.meta.title }}</span>
  </el-menu-item>
</template>

<script setup>

defineProps({
  route: {
    type: Object,
    default: () => ({})
  },
  subRoute: {
    type: Object,
    default: () => ({})
  }
})
</script>

<style lang="scss" scoped>
.menu-icon{
  font-size:20px;
  margin-right:15px;
  flex: none;
}
</style>