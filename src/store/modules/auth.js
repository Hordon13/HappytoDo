import ApiService from "@/services/api.service";
import router from "@/router/index";

const state = {
  userList: [],
  loggedUser: null,
  isLoggedIn: false,
  regError: false,
  logError: false
};

const getters = {
  getUser: state => state.loggedUser,
  getIsLoggedIn: state => state.isLoggedIn,
  getRegError: state => state.regError,
  getLogError: state => state.logError
};

const actions = {
  async fetchUsers({commit}) {
    const response = await ApiService.get("http://5d9b28bc686ed000144d1d38.mockapi.io/api/authentication");
    commit("setUsers", response);
  },
  async postUser({commit}, newUser) {
    state.regError = false;
    for (let i = 0; i < state.userList.length; i++) {
      if (state.userList[i].email === newUser.email) {
        state.regError = true;
      }
    }
    if (!state.regError) {
      const response = await ApiService.post("http://5d9b28bc686ed000144d1d38.mockapi.io/api/authentication", newUser);
      commit("registerUser", response);
    }
  },
  authUser({commit}, existingUser) {
    commit("loginUser", existingUser);
  },
  exitUser({commit}) {
    commit("logoutUser");
  }
};

const mutations = {
  setUsers: (state, users) => (state.userList = users),
  registerUser: (state, newUser) => {
    state.userList.push(newUser);
  },
  loginUser: (state, user) => {
    state.isLoggedIn = false;
    for (let i = 0; i < state.userList.length; i++) {
      if (state.userList[i].email === user.email && state.userList[i].password === user.password) {
        state.loggedUser = Object.assign({}, state.userList[i]);
        state.isLoggedIn = true;
        router.push('/');
      }
    }
    if (state.isLoggedIn === false) {
      state.logError = true;
    }
  },
  logoutUser: (state) => {
    state.loggedUser = null;
    state.isLoggedIn = false;
    state.regError = false;
    state.logError = false;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}