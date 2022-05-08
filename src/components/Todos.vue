<script setup lang="ts">
import { useTodosStore } from "@/store/todos";
import Todo from "./Todo.vue";

const { todos } = useTodosStore();
</script>

<template>
  <ul class="flex flex-col gap-y-2">
    <Todo v-for="todo in todos" :key="todo.id" v-bind="todo" />
  </ul>
</template>
