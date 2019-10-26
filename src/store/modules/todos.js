import ApiService from "@/services/api.service";

const state = {
  todoList: [],
  todoUnderEdit: null,
  todoBeforeEdit: null
};

const getters = {
  getTodoList: state => state.todoList,
  getTodoUnderEdit: state => state.todoUnderEdit,
  isEditing: state => state.todoUnderEdit !== null
};

const actions = {
  async fetchTodoList({commit}) {
    const response = await ApiService.get("http://5d9b28bc686ed000144d1d38.mockapi.io/api/todos");
    commit("setTodoList", response);
  },
  async postTodo({commit}, newTodo) {
    const response = await ApiService.post("http://5d9b28bc686ed000144d1d38.mockapi.io/api/todos", newTodo);
    commit("addTodo", response);
  },
  async deleteTodo({commit}, id) {
    await ApiService.delete(`http://5d9b28bc686ed000144d1d38.mockapi.io/api/todos/${id}`);
    commit("removeTodo", id);
  },
  async putTodo({commit}, updatedTodo) {
    const response = await ApiService.put(`http://5d9b28bc686ed000144d1d38.mockapi.io/api/todos/${updatedTodo.id}`, updatedTodo);
    commit("updateTodo", response);
  },
  async beginEdit({commit}, todo) {
    if (state.todoUnderEdit !== null) {
      const response = await ApiService.put(`http://5d9b28bc686ed000144d1d38.mockapi.io/api/todos/${state.todoUnderEdit.id}`, state.todoUnderEdit);
      commit("updateTodo", response);
    }
    commit("startEdit", todo)
  },
  cancelEdit({commit}) {
    commit("stopEdit");
  }
};

const mutations = {
  setTodoList: (state, todos) => (state.todoList = todos),
  addTodo: (state, newTodo) => {
    state.todoList.push(newTodo);
  },
  removeTodo: (state, id) => (state.todoList = state.todoList.filter(todo => todo.id !== id)),
  updateTodo: (state, updatedTodo) => {
    state.todoList.map(todo => todo.id === state.todoUnderEdit.id ? updatedTodo : todo);
    state.todoUnderEdit = null;
  },
  startEdit: (state, todo) => {
    state.todoUnderEdit = todo;
    state.todoBeforeEdit = Object.assign({}, todo);
  },
  stopEdit: (state) => {
    state.todoUnderEdit.title = state.todoBeforeEdit.title;
    state.todoUnderEdit.dueAt = state.todoBeforeEdit.dueAt;
    state.todoBeforeEdit = null;
    state.todoUnderEdit = null;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}