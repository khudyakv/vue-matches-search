<template>
  <div class="mb-10">
    <input
      class="w-full bg-zinc-700 px-5 py-3 outline-none transition-colors hover:bg-zinc-600"
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
