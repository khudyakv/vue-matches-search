<template>
  <ul class="space-y-4">
    <li v-if="noResults" class="space-y-2 bg-zinc-700 p-5 text-xl">
      Сорян, ничего не найдено.
    </li>
    <SearchListItem
      v-for="item in searchStore.allResult"
      :key="item.id"
      :item="item"
    />
  </ul>
</template>

<script setup>
import { useSearchStore } from "@/stores/search";
import { computed } from "vue";

const searchStore = useSearchStore();

const noResults = computed(() => {
  return !searchStore.allResult.length;
});
</script>
