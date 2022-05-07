<script setup lang="ts">
import { PlusIcon } from "@heroicons/vue/solid";
</script>

<template>
  <form @submit.prevent>
    <label class="label" for="todo">New Todo</label>
    <div class="flex gap-x-4">
      <input class="input w-full" id="todo" />
      <button class="btn" type="submit">
        <PlusIcon class="w-8 h-8" />
      </button>
    </div>
  </form>
</template>
