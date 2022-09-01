<script setup lang="ts">
// 采用ts专有声明，有默认值
interface Props {
  dot?: boolean;
  count?: number;
}
const props = withDefaults(defineProps<Props>(), {
  dot:false,
});

// defineProps<{
//   // 采用ts专有声明，无默认值
//   msg: string;
//   num?: number;
// }>();

// defineProps({
//   // 非ts专有声明
//   msg: String,
//   num: {
//     type: Number,
//     default: "",
//   },
// });
</script>

<template>
  <span v-if="dot">
    <van-badge  :dot="dot"><slot></slot></van-badge>
  </span>
  <span v-else>
    <template v-if="count != 0">
      <van-badge :content="count"><slot></slot></van-badge>
    </template>
  </span>
</template>
<style scoped lang="scss">
.home {
}
</style>
