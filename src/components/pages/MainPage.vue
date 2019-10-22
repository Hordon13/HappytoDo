<template>
  <div class="main-page-container">
    <div class="main-content-wrapper">
      <the-header/>
      <todo-list ref="todoList" :todos="todos" @delete:todo="deleteTodo" @edit:todo="editMode" @done:todo="updateTodo"/>
      <todo-editor :to-edit="todoUnderEdit" @add:todo="addTodo" @update:todo="updateTodo" @cancel:edit="cancelEdit"/>
    </div>
    <div id="smiley-animation"></div>
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
      todoUnderEdit: null,
      originalTodo: null
    }
  },
  methods: {
    async addTodo(newTodo) {
      if (newTodo.dueAt === '')
        newTodo.dueAt = "Someday";
      const data = await ApiService.post("http://5d9b28bc686ed000144d1d38.mockapi.io/api/todos", newTodo);
      this.todos = [...this.todos, data];
      this.$refs.todoList.scrollToBottom();
    },
    async deleteTodo(id) {
      await ApiService.delete(`http://5d9b28bc686ed000144d1d38.mockapi.io/api/todos/${id}`);
      this.todos = this.todos.filter(todo => todo.id !== id);
    },
    async editMode(todo) {
      if (this.todoUnderEdit !== null) {
        await ApiService.put(`http://5d9b28bc686ed000144d1d38.mockapi.io/api/todos/${this.todoUnderEdit.id}`, this.todoUnderEdit);
        this.todoUnderEdit = todo;
        this.originalTodo = Object.assign({}, todo);
      } else {
        this.todoUnderEdit = todo;
        this.originalTodo = Object.assign({}, todo);
      }
    },
    async updateTodo(updatedTodo) {
      await ApiService.put(`http://5d9b28bc686ed000144d1d38.mockapi.io/api/todos/${updatedTodo.id}`, updatedTodo);
      this.todos = this.todos.map(todo => todo.id === this.todoUnderEdit.id ? updatedTodo : todo);
      this.todoUnderEdit = null;
    },
    cancelEdit(canceledTodo) {
      Object.assign(canceledTodo, this.originalTodo);
      this.todoUnderEdit = null;
    },
  },
  async created() {
    this.todos = await ApiService.get("http://5d9b28bc686ed000144d1d38.mockapi.io/api/todos");
  }
}
</script>

<style scoped>
.main-page-container {
  min-height: 100vh;
  background-color: #63c8f1;
  background-image: url("../../assets/bg.png");
  color: black;
}

#smiley-animation {
  background-image: url("../../assets/smiley_v1.png");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100px;
  height: 100px;
  position: absolute;
  right: 80px;
  bottom: 50px;
  border-radius: 50%;
  animation: float 3s ease infinite;
}

#smiley-animation:hover {
  background-image: url("../../assets/smiley_v2.png");
}

@keyframes float {
  0% {
    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.6);
    transform: translateY(0px);
  }
  50% {
    box-shadow: 0 25px 15px 0 rgba(0, 0, 0, 0.2);
    transform: translateY(-60px);
  }
  90% {
    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.6);
    transform: translateY(0px);
  }
  100% {
    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.6);
    transform: translateY(0px);
  }
}
</style>