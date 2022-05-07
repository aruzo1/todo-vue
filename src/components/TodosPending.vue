<script setup lang="ts">
import { computed } from "@vue/reactivity";
import { store } from "@/store";

const msg = computed(() => {
  return store.todos.length
    ? `Pending todos: ${store.todos.length}`
    : "No pending todos!";
});
</script>

<template>
  <p class="text-brand">{{ msg }}</p>
</template>
