<template>
  <li class="p-5 bg-zinc-700 space-y-2">
    <span class="block text-xl">{{ item.title }}</span>
    <span class="block">{{ item.address }}</span>
  </li>
</template>
<script setup>
const props = defineProps({
  item: {
    default: {},
    type: Object,
  },
});
</script>