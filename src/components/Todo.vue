<script setup lang="ts">
import { TrashIcon } from "@heroicons/vue/solid";

defineProps<{ id: number; body: string }>();
</script>

<template>
  <li class="flex justify-between items-center gap-x-4 rounded-lg bg-gray-200">
    <p class="ml-2 text-brand">{{ body }}</p>
    <button class="btn"><TrashIcon class="w-8 h-8" /></button>
  </li>
</template>
