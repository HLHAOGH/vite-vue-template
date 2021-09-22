<template>
  <div>Hello {{ state.name }}</div>
</template>

<script>
/*
  2.0 周期名称    3.0 周期名称    说明
  beforeCreate    setup    组件创建之前
  created    setup    组件创建完成
  beforeMount    onBeforeMount    组件挂载之前
  mounted    onMounted    组件挂载完成
  beforeUpdate    onBeforeUpdate    数据更新，虚拟 DOM 打补丁之前
  updated    onUpdated    数据更新，虚拟 DOM 渲染完成
  beforeDestroy    onBeforeUnmount    组件销毁之前
  destroyed    onUnmounted    组件销毁后

*/
import {
  ref,
  toRef,
  toRefs,
  reactive,
  defineEmits,
  defineExpose,
  defineProps,
  useAttrs,
  useSlots
} from 'vue'
// import导入css，在setup中作为变量使用
// toRef 将某个对象转换为ref对象；toRefs 将对象的所有属性都转为ref对象
/*
  defineEmits // 定义触发父组件事件
  defineExpose // 为父组件暴露子组件数据
  defineProps // 定义子组件属性
  useAttrs // 使用父组件未在defineProps中定义的属性
  useSlots // 使用父组件插槽数据 useSlots().default (默认|插槽名称)
*/

// 在创建组件实例时调用,return返回变量，其他生命周期函数在setup()函数里面声明
// setup(props, ctx) {
//   const state = reactive({
//     name: 'li',
//     value: 4
//   })
//   return {
//     state
//   }
// }
</script>