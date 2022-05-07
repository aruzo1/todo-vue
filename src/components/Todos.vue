<script setup lang="ts">
import { store } from "@/store";
import Todo from "./Todo.vue";
</script>

<template>
  <ul class="flex flex-col gap-y-2">
    <Todo v-for="todo in store.todos" :key="todo.id" v-bind="todo" />
  </ul>
</template>
