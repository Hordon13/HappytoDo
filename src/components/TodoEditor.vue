<template>
  <div class="todo-editor-container">
    <form class="form-wrapper" v-if="toEdit === null" @submit.prevent="submitTodo">
      <h3>add a new todo</h3>
      <div class="input-wrapper">
        <input v-model="todoItem.title" type="text" placeholder="What to do?">
        <div class="datePicker">
          <date-time-picker
                  v-model="todoItem.dueAt"
                  format="YYYY. MM. DD"
                  formatted="l"
                  color="#50c1f2"
                  :min-date="today"
                  only-date
                  auto-close
                  no-button
                  no-label
                  overlay
                  no-value-to-custom-elem
          >
            <button type="button">
              <i class="far fa-calendar-check"></i>
              {{ todoItem.dueAt === '' ? "Due Date" : todoItem.dueAt}}
            </button>
          </date-time-picker>
        </div>
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
        <div class="datePicker">
          <date-time-picker
                  v-model="toEdit.dueAt"
                  format="YYYY. MM. DD"
                  formatted="l"
                  color="#50c1f2"
                  :min-date="today"
                  only-date
                  auto-close
                  no-button
                  no-label
                  overlay
                  no-value-to-custom-elem
          >
            <button type="button">
              <i class="far fa-calendar-check"></i>
              {{ toEdit.dueAt === 'Someday' ? "Someday" : toEdit.dueAt}}
            </button>
          </date-time-picker>
        </div>
      </div>
      <div class="button-wrapper">
        <button class="submit" type="submit">done</button>
        <button class="cancel" type="reset" @click.prevent="cancelEdit">cancel</button>
      </div>
    </form>
  </div>
</template>

<script>
import DateTimePicker from 'vue-ctk-date-time-picker';
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css';

export default {
  name: "TodoEditor",
  components: {DateTimePicker},
  data() {
    return {
      todoItem: {
        title: '',
        dueAt: ''
      },
      today: new Date().toISOString().substring(0, 10)
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
  margin: 0 auto;
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

.input-wrapper input:focus {
  outline: none;
}

.input-wrapper input[type="text"] {
  width: 75%;
  font-size: 20px;
}

.datePicker {
  width: 20%;
}

.datePicker button {
  font-family: Montserrat, sans-serif;
  font-size: 16px;
  font-weight: 500;
  width: 100%;
  height: 40px;
  border-radius: 10px;
  border: 1px whitesmoke solid;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
}

.datePicker button:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}

.datePicker button:focus {
  outline: none;
}

.datePicker button i {
  margin-right: 5px;
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