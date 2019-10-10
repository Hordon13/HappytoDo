<template>
  <div class="main-page-container">
    <the-header/>
    <todo-list :todos="todos"/>
    <todo-editor @add:todo="addTodo" />
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
      const id = this.todos.length + 1;
      const createdAt = new Date();
      const isCompleted = false;
      const newTodo = {...todo, id, createdAt, isCompleted};

      // to see my content opposed to the generated one from MockAPI
      this.todos = [...this.todos, newTodo];

      /*
      // otherwise I would send my data like this
      // but this generates a random entry
      fetch('http://5d9b28bc686ed000144d1d38.mockapi.io/api/todos', {
        method: 'post',
        body: JSON.stringify(newTodo)
      })
        .then(res => res.json())
        .then(data => this.todos = [...this.todos, data])
        // eslint-disable-next-line no-console
        .catch(err => console.log(err));
      */
    },
    completeTodo() {

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