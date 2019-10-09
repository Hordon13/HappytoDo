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
        </tr>
        </thead>
        <tbody>
          <tr v-for="todo in todos" :key="todo.id">
            <td> {{ todo.isCompleted}}</td>
            <td> {{ todo.title }}</td>
            <td> {{ new Date(todo.createdAt).toLocaleDateString("hu-HU") }}</td>
            <td> {{ new Date(todo.dueAt).toLocaleDateString("hu-HU") }}</td>
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
    todos: Array
  },
  method: {
    formatDate: (date) => {
      return date;
    }
  }
}
</script>

<style scoped>

</style>