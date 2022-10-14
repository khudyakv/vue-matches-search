<template >
  <div class="mb-10">
    <input
      class="
        bg-zinc-700
        px-5
        py-3
        w-full
        outline-none
        hover:bg-zinc-600
        transition-colors
      "
      placeholder="Что ищем?"
      type="text"
      @input="changeRequest($event)"
    />
  </div>
</template>

<script setup>
import { useSearchStore } from "@/stores/search";

const searchStore = useSearchStore();

const { changeRequest } = searchStore;
</script>