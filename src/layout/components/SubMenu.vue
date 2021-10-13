<template>
  <el-sub-menu
    :index="`${route.path}/${route.children[0].path}`">
    <template #title>
      <Icon :name="route.meta.icon" class="menu-icon"></Icon>
      <span>{{ route.meta.title }}</span>
    </template>
    <el-menu-item
      v-for="subRoute in route.children"
      :key="`${route.path}/${subRoute.path}`"
      :index="`${route.path}/${subRoute.path}`">
      <ul type="disc" style="padding-left:25px" v-if="subRoute.meta.menu">
        <li>{{ subRoute.meta.title }}</li>
      </ul>
    </el-menu-item>
  </el-sub-menu>
</template>

<script setup>

defineProps({
  route: {
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