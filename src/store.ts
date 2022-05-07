import { reactive, readonly } from "vue";

export const store = readonly(
  reactive({
    todos: [
      { id: 1, body: "Buy Milk" },
      { id: 2, body: "Buy Chesse" },
    ],
  })
);
