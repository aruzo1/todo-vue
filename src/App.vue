<script setup lang="ts">
import TodoForm from "./components/TodoForm.vue";
import Todos from "./components/Todos.vue";
import TodosPending from "./components/TodosPending.vue";
</script>

<template>
  <main
    class="flex flex-col gap-y-4 w-[25rem] mt-16 mx-auto p-8 rounded-lg bg-white"
  >
    <h1 class="text-3xl font-bold text-brand">Todo App</h1>
    <TodoForm />
    <Todos />
    <TodosPending />
  </main>
</template>
