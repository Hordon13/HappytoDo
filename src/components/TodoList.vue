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
          <tr v-for="todo in todos" :key="todo.id">
            <td><input type="checkbox" :checked="todo.isCompleted" @change="markComplete(todo)"></td>
            <td> {{ todo.title }}</td>
            <td> {{ todo.createdAt | formatDate }}</td>
            <td> {{ todo.dueAt | formatDate }}</td>
            <td>
              <button>Edit</button>
              <button @click="deleteTodo(todo.id)">Delete</button>
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
  data() {
    return {
      todoStatus: false
    }
  },
  props: {
    todos: Array
  },
  methods: {
    markComplete(todo) {
      todo.isCompleted = !todo.isCompleted;
    },
    deleteTodo(id) {
      this.$emit('delete:todo', id);
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

</style>