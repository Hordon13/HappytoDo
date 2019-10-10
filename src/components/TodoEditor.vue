<template>
  <div class="todo-editor-container">
    <form @submit.prevent="submitTodo">
      <label for=""> add todo
        <input v-model="todoItem.title" type="text" placeholder="add a todo here">
      </label>
      <label for=""> set due date
        <input v-model="todoItem.dueAt" type="date">
      </label>
      <input type="submit">
      <input type="reset">
    </form>
  </div>
</template>

<script>
export default {
  name: "TodoEditor",
  data() {
    return {
      todoItem: {
        title: '',
        dueAt: ''
      }
    }
  },
  methods: {
    submitTodo() {
      this.$emit('add:todo', this.todoItem);
    }
  }
}
</script>

<style scoped>

</style>