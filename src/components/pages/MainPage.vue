<template>
  <div class="main-page-container">
    <the-header/>
    <todo-list :todos="todos" @delete:todo="deleteTodo"/>
    <todo-editor @add:todo="addTodo"/>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader";
import TodoList from "@/components/TodoList";
import TodoEditor from "@/components/TodoEditor";

export default {
  name: "MainPage",
  components: {
    TheHeader,
    TodoList,
    TodoEditor
  }, data() {
    return {
      todos: []
    }
  },
  methods: {
    addTodo(todo) {
      const id = this.todos.length + 1; //is it generated auto?
      const createdAt = new Date();
      const isCompleted = false;
      const newTodo = {...todo, id, createdAt, isCompleted};

      fetch('http://5d9b28bc686ed000144d1d38.mockapi.io/api/todos', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTodo)
      })
        .then(res => res.json())
        .then(data => this.todos = [...this.todos, data])
        // eslint-disable-next-line no-console
        .catch(err => console.log(err));

    },
    deleteTodo(id) {
      fetch(`http://5d9b28bc686ed000144d1d38.mockapi.io/api/todos/${id}`, {
        method: 'delete',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(() => this.todos = this.todos.filter(todo => todo.id !== id))
        // eslint-disable-next-line no-console
        .catch(err => console.log(err));
    }
  },
  created() {
    fetch('http://5d9b28bc686ed000144d1d38.mockapi.io/api/todos')
      .then(res => res.json()
        .then(data => this.todos = data))
      // eslint-disable-next-line no-console
      .catch(err => console.log(err));
  }
}
</script>

<style scoped>
.main-page-container {
  min-height: 100vh;
  background: #212121;
  color: white;
}

.todo-editor-container {
  margin-top: 50px;
}
</style>