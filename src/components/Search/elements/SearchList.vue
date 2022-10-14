<template>
  <ul class="space-y-4">
    <li
      v-if="!searchStore.allResult.length"
      class="p-5 bg-zinc-700 space-y-2 text-xl"
    >
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
import SearchListItem from "./SearchListItem.vue";
import { useSearchStore } from "@/stores/search";

const searchStore = useSearchStore();
</script>