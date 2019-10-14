<template>
  <div class="todo-editor-container">
    <form v-if="toEdit === null" @submit.prevent="submitTodo">
      <label for=""> add todo
        <input v-model="todoItem.title" type="text" placeholder="add a todo here">
      </label>
      <label for=""> set due date
        <input v-model="todoItem.dueAt" type="date">
      </label>
      <input type="submit">
      <input type="reset">
    </form>

    <form v-else @submit.prevent="updateTodo">
      <label for=""> edit todo
        <input v-model="toEdit.title" type="text" placeholder="edit the todo here">
      </label>
      <label for=""> edit due date
        <input v-model="todoItem.dueAt" type="date">
      </label>
      <input type="submit" value="edit">
      <input type="reset" value="cancel" @click.prevent="cancelEdit">
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
  props: {
    toEdit: Object
  },
  methods: {
    submitTodo() {
      const createdAt = new Date();
      const isCompleted = false;
      const newTodo = {...this.todoItem, createdAt, isCompleted};

      this.$emit('add:todo', newTodo);
      this.todoItem.title = '';
      this.todoItem.dueAt = '';
    },
    updateTodo() {
      this.$emit('update:todo', this.toEdit)
    },
    cancelEdit() {
      this.$emit('cancel:edit', this.toEdit)
    }
  },
  computed: {

  }
}
</script>

<style scoped>

</style>