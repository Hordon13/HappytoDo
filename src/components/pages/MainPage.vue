<template>
  <div class="main-page-container">
    <the-header/>
    <todo-list/>
    <todo-editor/>
    <div id="smiley-animation"></div>
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
  }
}
</script>

<style scoped>
.main-page-container {
  min-height: 100vh;
  background-color: #63c8f1;
  background-image: url("../../assets/bg.png");
  background-size: cover;
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