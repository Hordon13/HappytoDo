<template>
  <div class="todo-list-container">
    <h3 v-for="todo in todos" :key="todo.id"> {{ todo.title }}</h3>
  </div>
</template>

<script>
export default {
  name: "TodoList",
  props: {
    todos: Array
  }
}
</script>

<style scoped>

</style>