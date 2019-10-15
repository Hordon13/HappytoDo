<template>
  <div class="main-page-container">
    <the-header/>
    <div class="main-content-wrapper">
      <todo-list :todos="todos" @delete:todo="deleteTodo" @edit:todo="editMode"/>
      <todo-editor :to-edit="toEdit" @add:todo="addTodo" @update:todo="updateTodo" @cancel:edit="cancelEdit"/>
    </div>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader";
import TodoList from "@/components/TodoList";
import TodoEditor from "@/components/TodoEditor";
import ApiService from "@/services/api.service";

export default {
  name: "MainPage",
  components: {
    TheHeader,
    TodoList,
    TodoEditor
  }, data() {
    return {
      todos: [],
      toEdit: null,
      cachedTodo: null
    }
  },
  methods: {
    addTodo(newTodo) {
      ApiService.post("http://5d9b28bc686ed000144d1d38.mockapi.io/api/todos", newTodo)
        .then(data => this.todos = [...this.todos, data])
    },
    deleteTodo(id) {
      ApiService.delete(`http://5d9b28bc686ed000144d1d38.mockapi.io/api/todos/${id}`)
        .then(() => this.todos = this.todos.filter(todo => todo.id !== id))
    },
    editMode(todo) {
      this.toEdit = todo;
      this.cachedTodo = Object.assign({}, todo);
    },
    updateTodo(updatedTodo) {
      ApiService.put(`http://5d9b28bc686ed000144d1d38.mockapi.io/api/todos/${updatedTodo.id}`, updatedTodo)
        .then(() => this.todos = this.todos.map(todo => todo.id === this.toEdit.id ? updatedTodo : todo))
        .then(this.toEdit = null)
    },
    cancelEdit(canceledTodo) {
      Object.assign(canceledTodo, this.cachedTodo);
      this.toEdit = null;
    },
  },
  created() {
    ApiService.get("http://5d9b28bc686ed000144d1d38.mockapi.io/api/todos")
      .then(data => this.todos = data);
  }
}
</script>

<style scoped>

.main-page-container {
  min-height: 100vh;
  background: #ebebeb;
  color: #000000;
}

.main-content-wrapper {
  width: 80%;
  margin: 0 auto;
  background: #ffffff;
  border-radius: 10px;
  padding: 30px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
</style>