<template>
  <div class="main-page-container">
    <the-header/>
    <todo-list :todos="todos"/>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader";
import TodoList from "@/components/TodoList";

export default {
  name: "MainPage",
  components: {
    TheHeader,
    TodoList
  }, data() {
    return {
      todos: []
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
</style>