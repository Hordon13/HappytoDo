<template>
  <div class="todo-list-container">
    <div class="todo-table" id="todo-list">
      <table>
        <colgroup>
          <col id="col1">
          <col id="col2">
          <col id="col3">
          <col id="col4">
          <col id="col5">
        </colgroup>
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
          <td :class="{'dueToday': isDueToday(todo.dueAt) && !todo.isCompleted}"> {{ todo.dueAt }}</td>
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
      this.$emit('done:todo', todo);
    },
    deleteTodo(id) {
      this.$emit('delete:todo', id);
    },
    editTodo(todo) {
      this.$emit('edit:todo', todo);
    },
    isDueToday(date) {
      return new Date(date) <= new Date();
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
  display: block;
  width: 60%;
  height: 400px;
  margin: 50px auto;
  padding: 0 40px 5px;
  background: #fafafa;
  border-radius: 10px;
  box-shadow: 4px 5px 15px -4px rgba(0, 0, 0, 0.3);
}

.todo-table {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  overflow: auto;
  scroll-behavior: smooth;
  scrollbar-width: none;
}

::-webkit-scrollbar {
  display: none;
}

table {
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
  text-align: center;
  position: relative;
}

#col1 {
  width: 10%;
}

#col2 {
  width: 40%;
}

#col3, #col4 {
  width: 17.5%;
}

#col5 {
  width: 15%;
}

tr {
  height: 45px;
}

th {
  position: sticky;
  background: #50c1f2;
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

.dueToday {
  color: #eb2d53;
  font-weight: bold;
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