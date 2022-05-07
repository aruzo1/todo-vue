<script setup lang="ts">
import { ref } from "vue";
import { PlusIcon } from "@heroicons/vue/solid";
import { store } from "@/store";

const body = ref("");

function submit() {
  store.add({ id: Math.random(), body: body.value });
  body.value = "";
}
</script>

<template>
  <form @submit.prevent="submit">
    <label class="label" for="todo">New Todo</label>
    <div class="flex gap-x-4">
      <input class="input w-full" id="todo" v-model="body" />
      <button class="btn" type="submit">
        <PlusIcon class="w-8 h-8" />
      </button>
    </div>
  </form>
</template>
