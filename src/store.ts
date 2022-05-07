import { reactive } from "vue";

interface Todo {
  id: number;
  body: string;
}

interface Store {
  todos: Todo[];
  add(todo: Todo): void;
  remove(id: number): void;
}

export const store = reactive<Store>({
  todos: [],
  add(todo: { id: number; body: string }) {
    this.todos.unshift(todo);
  },
  remove(id: number) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  },
});
