<script setup lang="ts">
import { computed } from "@vue/reactivity";
import { useTodosStore } from "@/store/todos";

const { todos } = useTodosStore();

const msg = computed(() => {
  return todos.length ? `Pending todos: ${todos.length}` : "No pending todos!";
});
</script>

<template>
  <p class="text-brand">{{ msg }}</p>
</template>
