<template>
  <div class="todo-list-container">
    <div class="todo-table">
      <table>
        <thead>
        <tr>
          <th>Done</th>
          <th>Title</th>
          <th>Created</th>
          <th>Due Date</th>
          <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="todo in todos" :key="todo.id" :class="{done: todo.isCompleted}">
          <td><input type="checkbox" title="mark as done" :checked="todo.isCompleted" @change="markComplete(todo)"></td>
          <td id="title"> {{ todo.title }}</td>
          <td> {{ todo.createdAt | formatDate }}</td>
          <td> {{ todo.dueAt | formatDate }}</td>
          <td>
            <button id="editBtn" title="edit this todo" @click="editTodo(todo)">
              <i class="fas fa-pen"></i>
            </button>
            <button id="delBtn" title="delete this todo" @click="deleteTodo(todo.id)">
              <i class="fas fa-trash"></i>
            </button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoList",
  props: {
    todos: Array,
  },
  methods: {
    markComplete(todo) {
      todo.isCompleted = !todo.isCompleted;
    },
    deleteTodo(id) {
      this.$emit('delete:todo', id);
    },
    editTodo(todo) {
      this.$emit('edit:todo', todo);
    }
  },
  filters: {
    formatDate(date) {
      return new Date(date).toLocaleDateString("hu-HU");
    }
  }
}
</script>

<style scoped>
.todo-list-container {
  height: 400px;
}

.todo-table {
  height: 100%;
  overflow: auto;
  scroll-behavior: smooth;
  scrollbar-width: none;
}

::-webkit-scrollbar {
  display: none;
}

table {
  border-radius: 20px;
  border-collapse: collapse;
  text-align: center;
  position: relative;
}

tr {
  height: 45px;
}

th {
  position: sticky;
  background: #63c8f1;
  color: white;
  font-size: 18px;
  z-index: 1;
  top: 0;
  padding: 0 20px;
}

tbody {
  z-index: 2;
}

td {
  border-bottom: #dedede dashed 1px;
}

input[type="checkbox"] {
  appearance: none;
  background: #fafafa;;
  border: 1px solid #cacece;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1), inset 0 -15px 10px -12px rgba(0, 0, 0, 0.05);
  padding: 8px;
  border-radius: 50%;
}

input[type="checkbox"]:hover {
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1), inset 0 1px 3px rgba(0, 0, 0, 0.1);
}

input[type="checkbox"]:checked {
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1), inset 0 -15px 10px -12px rgba(0, 0, 0, 0.15);
  background: #63c8f1;
}

input[type="checkbox"]:focus {
  outline: none;
}

.done {
  text-decoration: line-through;
  color: #aaaaaa;
}

button {
  appearance: none;
  border-radius: 25px;
  background: white;
  border: 1px solid #cacece;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0 -15px 10px -12px rgba(0, 0, 0, 0.05);
  padding: 5px 7px;
  margin-left: 10px;
  font-size: 13px;
}

button:focus {
  outline: none;
}

button:hover {
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1), inset 0 1px 3px rgba(0, 0, 0, 0.15);
}

button:active {
  transform: scale(0.93);
}

#editBtn {
  color: #00a5c2;
}

#delBtn {
  color: #eb2d53;
}

#title {
  font-weight: bold;
}
</style>