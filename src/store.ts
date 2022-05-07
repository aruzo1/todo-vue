import { reactive } from "vue";

export const store = reactive({
  todos: [
    { id: 1, body: "Buy Milk" },
    { id: 2, body: "Buy Chesse" },
  ],
  add(todo: { id: number; body: string }) {
    this.todos.unshift(todo);
  },
  remove(id: number) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  },
});
