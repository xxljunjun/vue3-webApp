<script setup lang="ts">
import { ref } from "vue";

defineProps<{ msg: string }>();


// defineProps<{
//   // 采用ts专有声明，无默认值
//   msg: string;
//   num?: number;
// }>();


// 采用ts专有声明，有默认值
// interface Props {
//   msg?: string;
//   labels?: string[];
// }
// const props = withDefaults(defineProps<Props>(), {
//   msg: "hello",
//   labels: () => ["one", "two"],
// });


// defineProps({
//   // 非ts专有声明
//   msg: String,
//   num: {
//     type: Number,
//     default: "",
//   },
// });


const count = ref(0);
</script>

<template>
  <h1>{{ msg}}{{count}}</h1>
</template>

<style scoped lang="scss">
</style>
