import ApiService from "@/services/api.service";

const state = {
  todos: [],
  todoUnderEdit: null,
  originalTodo: null
};

const getters = {
  allTodos: state => state.todos,
  isEditing: state => state.todoUnderEdit !== null,
  underEdit: state => state.todoUnderEdit,
  original: state => state.originalTodo
};

const actions = {
  async fetchData({commit}) {
    const response = await ApiService.get("http://5d9b28bc686ed000144d1d38.mockapi.io/api/todos");
    commit("setTodos", response);
  },
  async addTodo({commit}, newTodo) {
    const response = await ApiService.post("http://5d9b28bc686ed000144d1d38.mockapi.io/api/todos", newTodo);
    commit("addTodo", response);
  },
  async deleteTodo({commit}, id) {
    await ApiService.delete(`http://5d9b28bc686ed000144d1d38.mockapi.io/api/todos/${id}`);
    commit("deleteTodo", id);
  },
  async update({commit}, updatedTodo) {
    const response = await ApiService.put(`http://5d9b28bc686ed000144d1d38.mockapi.io/api/todos/${updatedTodo.id}`, updatedTodo);
    commit("update", response);
  },
  async editMode({commit}, todo) {
    if (state.todoUnderEdit !== null) {
      const response = await ApiService.put(`http://5d9b28bc686ed000144d1d38.mockapi.io/api/todos/${state.todoUnderEdit.id}`, state.todoUnderEdit);
      commit("updateTodo", response);
    }
    commit("editMode", todo)
  },
  cancel({commit}) {
    commit("cancel");
  }
};

const mutations = {
  setTodos: (state, todos) => (state.todos = todos),
  addTodo: (state, newTodo) => state.todos.push(newTodo),
  deleteTodo: (state, id) => (state.todos = state.todos.filter(todo => todo.id !== id)),
  update: (state, updatedTodo) => {
    state.todos.map(todo => todo.id === state.todoUnderEdit.id ? updatedTodo : todo);
    state.todoUnderEdit = null;
  },
  editMode: (state, todo) => {
    state.todoUnderEdit = todo;
    state.originalTodo = Object.assign({}, todo);
  },
  cancel: (state) => {
    state.todoUnderEdit.title = state.originalTodo.title;
    state.todoUnderEdit.dueAt = state.originalTodo.dueAt;
    state.originalTodo = null;
    state.todoUnderEdit = null;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}