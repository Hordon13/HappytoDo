<template>
  <div class="todo-editor-container">
    <form class="form-wrapper" v-if="!isEditing" @submit.prevent="submitTodo">
      <h3>Add a New Todo</h3>
      <div class="input-wrapper" :class="{'hasErr': submitError && emptyTitleAdd}">
        <input v-model="todoItem.title" type="text" placeholder="What to do?">
        <div class="datePicker">
          <date-time-picker
                  v-model="todoItem.dueAt"
                  format="YYYY. MM. DD."
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
      <h3>Edit This Todo</h3>
      <div class="input-wrapper" :class="{'hasErr': editError && emptyTitleEdit}">
        <input v-model="getTodoUnderEdit.title" type="text" placeholder="Edit the todo here...">
        <div class="datePicker">
          <date-time-picker
                  v-model="getTodoUnderEdit.dueAt"
                  format="YYYY. MM. DD."
                  formatted="l"
                  color="#50c1f2"
                  only-date
                  auto-close
                  no-button
                  no-label
                  overlay
                  no-value-to-custom-elem
          >
            <button type="button">
              <i class="far fa-calendar-check"></i>
              {{ getTodoUnderEdit.dueAt === 'Someday' ? "Someday" : getTodoUnderEdit.dueAt}}
            </button>
          </date-time-picker>
        </div>
      </div>
      <div class="button-wrapper">
        <button class="submit" type="submit">save</button>
        <button class="cancel" type="reset" @click.prevent="cancelEdit">cancel</button>
      </div>
    </form>
  </div>
</template>

<script>
import DateTimePicker from 'vue-ctk-date-time-picker';
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css';
import {mapGetters, mapActions} from 'vuex';

export default {
  name: "TodoEditor",
  components: {DateTimePicker},
  data() {
    return {
      todoItem: {
        title: '',
        dueAt: ''
      },
      today: new Date().toISOString().substring(0, 10),
      submitError: false,
      editError: false
    }
  },
  methods: {
    ...mapActions(['postTodo', 'putTodo', 'cancelEdit']),
    async submitTodo() {
      if (this.todoItem.title !== '') {
        const createdAt = new Date();
        const isCompleted = false;
        if (this.todoItem.dueAt === '')
          this.todoItem.dueAt = "Someday";
        const newTodo = {...this.todoItem, createdAt, isCompleted};

        await this.postTodo(newTodo);
        this.$emit("scroll:todoList");

        this.submitError = false;
        this.todoItem.title = '';
        this.todoItem.dueAt = '';
      } else {
        this.submitError = true;
      }
    },
    async updateTodo() {
      if (this.getTodoUnderEdit.title !== '') {
        await this.putTodo(this.getTodoUnderEdit);
        this.editError = false;
      } else {
        this.editError = true;
      }
    }
  },
  computed: {
    ...mapGetters(['isEditing', 'getTodoUnderEdit']),
    emptyTitleAdd() {
      return this.todoItem.title === '';
    },
    emptyTitleEdit() {
      return this.getTodoUnderEdit.title === '';
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
  box-shadow: 4px 5px 15px -4px rgba(0, 0, 0, 0.5);
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

.hasErr input {
  box-shadow: 0 1px 3px rgba(235, 45, 83, 0.12), 0 1px 2px rgba(235, 45, 83, 0.24);
  border: crimson double 2px;
}

.hasErr input:hover {
  box-shadow: 0 14px 28px rgba(235, 45, 83, 0.25), 0 10px 10px rgba(235, 45, 83, 0.22);
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
  cursor: pointer;
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
  font-weight: 900;
  text-transform: uppercase;
  margin: 0 10px;
  padding: 8px 25px;
  border-radius: 5px;
  user-select: none;
  cursor: pointer;
}

.button-wrapper button:focus {
  outline: none;
}

.button-wrapper button:active {
  transform: scale(0.95);
}

.submit {
  border: #63c8f1 1px solid;
  background: #63c8f1;
}

.submit:hover {
  background: #50c1f2;
}

.cancel {
  border: #eb2d53 1px solid;
  background: #eb2d53;
}

.cancel:hover {
  background: #e12c50;
}
</style>