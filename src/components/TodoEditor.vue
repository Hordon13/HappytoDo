<template>
  <div class="todo-editor-container">
    <form class="form-wrapper" v-if="toEdit === null" @submit.prevent="submitTodo">
      <h3>add a new todo</h3>
      <div class="input-wrapper">
        <input v-model="todoItem.title" type="text" placeholder="What to do?">
        <input v-model="todoItem.dueAt" type="date">
      </div>
      <div class="button-wrapper">
        <button class="submit" type="submit">add</button>
        <button class="cancel" type="reset">reset</button>
      </div>
    </form>

    <form class="form-wrapper" v-else @submit.prevent="updateTodo">
      <h3>edit this todo</h3>
      <div class="input-wrapper">
        <input v-model="toEdit.title" type="text" placeholder="edit the todo here">
        <input v-model="toEdit.dueAt" type="date">
      </div>
      <div class="button-wrapper">
        <button class="submit" type="submit">done</button>
        <button class="cancel" type="reset" @click.prevent="cancelEdit">cancel</button>
      </div>
    </form>
  </div>
</template>

<script>
// todo: change datepicker to a nicer one

export default {
  name: "TodoEditor",
  components: {},
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
  }
}
</script>

<style scoped>
.todo-editor-container {
  display: block;
  width: 60%;
  margin: 30px auto;
  padding: 20px 40px;
  background: #fafafa;
  border-radius: 10px;
  box-shadow: 4px 5px 15px -4px rgba(0, 0, 0, 0.3);
}

.form-wrapper {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
}

h3 {
  font-size: 24px;
}

.input-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 25px 0 35px;
  width: 100%;
  height: 40px;
}

.input-wrapper input {
  text-align: center;
  border-radius: 10px;
  border: 1px whitesmoke solid;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
}

.input-wrapper input:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}

.input-wrapper input[type="text"] {
  width: 75%;
  font-size: 20px;
}

.input-wrapper input[type="date"] {
  position: relative;
  width: 20%;
  font-size: 14px;
  font-family: Montserrat, sans-serif;
  background-size: 18px 18px;
  padding: 0 10px;
}

.input-wrapper input[type="date"]:after {
  font-family: "Font Awesome 5 Free", sans-serif;
  content: "\f274";
  font-size: 16px;
  font-weight: bold;
  color: #666666;
  padding: 0 5px;
}

.input-wrapper input[type="date"]:hover:after {
  color: #00a5c2;
}

::-webkit-inner-spin-button, ::-webkit-clear-button {
  display: none;
}

::-webkit-calendar-picker-indicator {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: auto;
  height: auto;
  color: transparent;
  background: transparent;
}

input:focus {
  outline: none;
}

::placeholder {
  color: #c3c3c3;
}

.button-wrapper {
  display: flex;
  flex-direction: row;
  width: 20%;
  justify-content: center;
}

.button-wrapper button {
  appearance: none;
  color: white;
  font-size: 18px;
  font-weight: bold;
  margin: 0 10px;
  padding: 8px 25px;
  border-radius: 20px;
  user-select: none;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15), inset 0 -15px 10px -12px rgba(0, 0, 0, 0.20);
}

.button-wrapper button:hover {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), inset 0 5px 10px rgba(0, 0, 0, 0.15);
}

.button-wrapper button:focus {
  outline: none;
}

.button-wrapper button:active {
  transform: scale(0.95);
}

.submit {
  background: #63c8f1;
}

.cancel {
  background: #eb2d53;
}

</style>