import { reactive } from "vue";
import { defineStore } from "pinia";

interface Todo {
  id: number;
  body: string;
}

export const useTodosStore = defineStore("todos", () => {
  const todos = reactive<Todo[]>([]);

  function create(todo: Todo) {
    todos.unshift(todo);
  }
  function del(id: number) {
    const i = todos.findIndex((todo) => todo.id === id);
    todos.splice(i, 1);
  }

  return { todos, create, del };
});
