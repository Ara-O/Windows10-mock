<template>
  <main>
    <div class="bg-image"></div>

    <section class="time">
      <h3>{{currentdate}}</h3>
      <h4>Monday, September 5</h4>
      <h5>Intro to Engineering</h5>
      <h5>Engineering 220</h5>
      <h5>11:20 - 11:35</h5>
    </section>
    <section class="icons">
      <img src="../assets/wifiicon.png" alt="Wifi Icon" />
      <img src="../assets/batteryicon.png" alt="Battery Icon" />
    </section>
    <section class="password--section">
      <img src="../assets/userimage.jpg" alt="User image" class="user-img" />
      <h3 class="user-name">Ara Oladipo</h3>
      <div class="password-section" v-if="notcontinuing">
        <img src="../assets/showPassword.png" alt="See password" class="seePassword" @click="showPassword">
        <input
          type="password"
          class="input-password"
          @keyup.enter="continueon"
          @input="seePasswordIcon"
        />
        <span class="continue" @click="continueon"
          ><img
            src="../assets/continueicon.png"
            alt="Continue icon"
            class="continueicon"
        /></span>
      </div>
      <div v-else>
        <div class="loadingsection">
          <img
            src="../assets/loadingicon.png"
            alt="Loading Icon"
            class="loading"
          />
          <span>Loading..</span>
        </div>
      </div>
      <h5 class="hint">Psst...The password is potato</h5>
    </section>
  </main>
</template>

<script>
// @ is an alias to /src
import {lockScreenDate} from '../modules/getTime';
export default {
  name: "Home",
  components: {},
  data() {
    return {
      notcontinuing: true,
      currentdate: "",
      passwordVisible: false,
    };

  },

  created() {
    window.addEventListener("load", function () {
      document.querySelector(".bg-image").style.filter = "blur(0px)";
      document.querySelector(".bg-image").style.transform = "scale(1)";
    });
  },

  mounted() {
    this.currentdate = lockScreenDate()

    const time = document.querySelector(".time");
    const icons = document.querySelector(".icons");
    const passwordsection = document.querySelector(".password--section");
    const password = document.querySelector(".input-password");

    function removePasswordSection() {
      if (password.value.trim() === "") {
        time.style.bottom = "53px";
        icons.style.bottom = "27px";
        passwordsection.style.opacity = "0";
        passwordsection.style.display = "none";
        passwordsection.style.transform = "scale(1)";
        setTimeout(function () {
          time.style.opacity = "1";
          icons.style.opacity = "1";
          document.querySelector(".bg-image").style.filter = "blur(0px)";
          document.querySelector(".bg-image").style.transform = "scale(1)";
        }, 250);
      }
    }

    function showPasswordSection() {
      time.style.bottom = "48vh";
      icons.style.bottom = "48vh";
      setTimeout(function () {
        time.style.opacity = "0";
        icons.style.opacity = "0";
        passwordsection.style.opacity = "1";
        passwordsection.style.transform = "scale(1)";
        document.querySelector(".bg-image").style.transform = "scale(1.2)";
      }, 250);
      document.querySelector(".password--section").style.backdropFilter =
        "blur(19px)";
      // document.querySelector(".bg-image").style.filter = "blur(4px)";
      passwordsection.style.display = "flex";
      password.focus();
      setTimeout(removePasswordSection, 15000);
    }

    document
      .querySelector("main")
      .addEventListener("click", showPasswordSection);
  },

  methods: {
    continueon() {
      if (document.querySelector(".input-password").value === "potato") {
        this.notcontinuing = false;
        document.querySelector(".hint").style.display = "none";
        let that = this;
        setTimeout(function () {
          that.$router.push("/homescreen");
        }, 1000);
      }
    },

    seePasswordIcon(){
      const seePasswordIcon =  document.querySelector(".seePassword");
      seePasswordIcon.style.display = "block"
    },

    showPassword(){
      const input = document.querySelector(".input-password");
      this.passwordVisible = !this.passwordVisible;
      if(this.passwordVisible){
        input.style.fontSize = "15px"
        input.type = "text";
        } else {
           input.style.fontSize = "23px"
        input.type = "password";
        }
    }
  },
};
</script>

<style scoped src="../styles/lockscreen.css"></style>
