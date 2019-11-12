<template>
  <div class="landing-page-container">
    <div class="content-wrapper">
      <div class="logo-wrapper">
        <img id="logo" src="../../assets/happytodo.png" alt="logo" width="300">
      </div>
      <div id="text-field">
        <p>Hi Guys! I am proudly present this little To-Do webapp I have made especially for you.
          I like to learn things via making so I made this app to cover as much of the technologies that I saw in the
          last frontend-test as
          possible.<br/><br/> Have a look around! 🙂</p>
      </div>
      <router-link to="/login" tag="button">Get Started</router-link>
      <img id="showcase" src="../../assets/showcase.png" alt="app in computer screens">
    </div>
  </div>
</template>

<script>
export default {
  name: "LandingPage"
}
</script>

<style scoped>
.landing-page-container {
  display: flex;
  height: 100vh;
  background-color: #63c8f1;
  background-image: url("../../assets/background.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.content-wrapper {
  display: flex;
  flex-direction: column;
  position: relative;
  width: 90%;
  height: 90%;
  margin: auto auto;
  padding-right: 15px;
}

.logo-wrapper {
  background: rgba(0, 0, 0, 0.1);
  padding: 15px 0 10px 20px;
  border-radius: 5px;
}

#text-field {
  color: white;
  width: 55%;
  height: 60%;
  margin-top: 60px;
  padding-left: 15px;
  font-size: 24px;
  font-weight: bold;
  line-height: 2;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.05);
}

button {
  appearance: none;
  background: #eb2d53;
  border: #eb2d53 1px solid;
  border-radius: 5px;
  color: white;
  width: 300px;
  margin-left: 15px;
  padding: 15px 45px;
  font-size: 24px;
  font-weight: 900;
  text-transform: uppercase;
  user-select: none;
  cursor: pointer;
}

button:focus {
  outline: none;
}

button:active {
  transform: scale(0.95);
}

#showcase {
  position: absolute;
  bottom: 0;
  right: 0;
  height: 80%;
}
</style>