<template>
  <li class="space-y-2 bg-zinc-700 p-5">
    <span class="block text-xl">{{ item.title }}</span>
    <span class="block">{{ item.address }}</span>
  </li>
</template>
<script setup>
defineProps({
  item: {
    defaul: null,
    type: Object,
  },
});
</script>
