<template>
  <div class="login-page-container">
    <the-header router-text="back" router-link="/"/>
    <div class="main-login-wrapper" :class="{'right-panel-active' : isSignUp}">
      <div class="form-container sign-up-container">
        <form @submit.prevent="register">
          <div class="text-wrapper">
            <h3>Create Account</h3>
            <span>you won't forget anything ever again</span>
          </div>
          <div class="input-wrapper">
            <input v-model="newUser.username" type="text" placeholder="Nickname" maxlength="12" required/>
            <input v-model="newUser.email" type="email" placeholder="Email" required/>
            <input v-model="newUser.password" type="password" placeholder="Password" minlength="8" required/>
          </div>
          <span v-if="getRegError" class="form-error">This email is already in use</span>
          <button type="submit">Sign Up</button>
        </form>
      </div>

      <div class="form-container sign-in-container">
        <form @submit.prevent="login">
          <div class="text-wrapper">
            <h3>Sign in</h3>
            <span>your todos are waiting for you</span>
          </div>
          <div class="input-wrapper">
            <input v-model="existingUser.email" type="email" placeholder="Email" required/>
            <input v-model="existingUser.password" type="password" placeholder="Password" required/>
          </div>
          <span v-if="getLogError" class="form-error">Incorrect email or password</span>
          <button type="submit">Sign In</button>
        </form>
      </div>

      <div class="overlay-container">
        <div class="overlay">
          <div class="overlay-panel overlay-left">
            <h3>Do you have an account already?</h3>
            <p>That's awesome! Let's login in, then...</p>
            <button class="ghost" @click="isSignUp = false">Sign In</button>
          </div>
          <div class="overlay-panel overlay-right">
            <h3>Don't have an account yet?</h3>
            <p>No worries, you can create one within a minute.</p>
            <button class="ghost" @click="isSignUp = true">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
    <span class="warning">❗️This is an unsecured form. Do NOT use real information!</span>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader";
import {mapGetters, mapActions} from 'vuex';
import router from "@/router/index";

export default {
  name: "LoginPage",
  components: {
    TheHeader
  },
  data() {
    return {
      isSignUp: false,
      newUser: {
        username: '',
        email: '',
        password: ''
      },
      existingUser: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions(['fetchUsers', 'postUser', 'authUser', 'postTodo']),
    login() {
      this.authUser(this.existingUser);
      if (!this.getLogError) {
        this.existingUser.email = '';
        this.existingUser.password = '';
        router.push('/todos');
      }
    },
    async register() {
      await this.postUser(this.newUser);
      if (!this.getRegError) {
        this.existingUser.email = this.newUser.email;
        this.existingUser.password = this.newUser.password;
        this.login();

        const welcome = {
          title: 'This is your first Todo! 😎️',
          dueAt: 'Someday',
          isCompleted: false,
          createdAt: new Date(),
        };

        await this.postTodo(welcome);
        welcome.title = 'You can add more with the form below 👇';
        await this.postTodo(welcome);
        welcome.title = 'Be always Happy to Do! 🥳🤩';
        await this.postTodo(welcome);

        this.newUser.username = '';
        this.newUser.email = '';
        this.newUser.password = '';

        await router.push('/todos')
      }
    }
  },
  computed: mapGetters(['getRegError', 'getLogError']),
  async created() {
    await this.fetchUsers();
  }
}
</script>

<style scoped>
.login-page-container {
  min-height: 100vh;
  background-color: #ebebeb;
  background-size: cover;
  color: black;
}

h3 {
  font-size: 32px;
  font-weight: bold;
}

p {
  font-size: 16px;
  margin: 20px 0 30px;
}

span {
  font-size: 14px;
}

button {
  appearance: none;
  border: 1px solid #63c8f1;
  border-radius: 5px;
  background: #63c8f1;
  color: white;
  font-size: 16px;
  font-weight: bold;
  padding: 12px 45px;
  text-transform: uppercase;
  margin-top: 30px;
}

button:hover {
  background: #50c1f2;
}

button:active {
  transform: scale(0.95);
}

button:focus {
  outline: none;
}

button.ghost {
  background-color: transparent;
  border-color: white;
  margin-top: 5px;
}

form {
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  text-align: center;
}

input {
  background-color: #ebebeb;
  border: none;
  border-radius: 5px;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
  font-size: 18px;
}

input:focus {
  outline: none;
}

.main-login-wrapper {
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
  0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 768px;
  max-width: 100%;
  min-height: 480px;
  margin: 100px auto;
}

.form-container {
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
}

.form-error {
  color: #eb2d53;
  font-weight: bold;
  margin-top: 5px;
}

.sign-in-container {
  left: 0;
  width: 50%;
  z-index: 2;
}

.main-login-wrapper.right-panel-active .sign-in-container {
  transform: translateX(100%);
}

.sign-up-container {
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
}

.main-login-wrapper.right-panel-active .sign-up-container {
  transform: translateX(100%);
  opacity: 1;
  z-index: 5;
  animation: show 0.6s;
}

@keyframes show {
  0%, 49.99% {
    opacity: 0;
    z-index: 1;
  }

  50%, 100% {
    opacity: 1;
    z-index: 5;
  }
}

.text-wrapper {
  margin-bottom: 30px;
}

.overlay-container {
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
}

.main-login-wrapper.right-panel-active .overlay-container {
  transform: translateX(-100%);
}

.overlay {
  background: #FF416C;
  background: -webkit-linear-gradient(to right, #50c1f2, #74cef3);
  background: linear-gradient(to right, #50c1f2, #74cef3);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  color: #FFFFFF;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
}

.main-login-wrapper.right-panel-active .overlay {
  transform: translateX(50%);
}

.overlay-panel {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  text-align: center;
  top: 0;
  height: 100%;
  width: 50%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
}

.overlay-left {
  transform: translateX(-20%);
}

.main-login-wrapper.right-panel-active .overlay-left {
  transform: translateX(0);
}

.overlay-right {
  right: 0;
  transform: translateX(0);
}

.main-login-wrapper.right-panel-active .overlay-right {
  transform: translateX(20%);
}

.warning {
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
}

</style>