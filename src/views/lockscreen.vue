<template>
  <main>
    <div class="bg-image"></div>

    <section class="time">
      <h3>10:32</h3>
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
      <div class="password-section">
        <input type="password" class="input-password" />
        <span class="continue"
          ><img
            src="../assets/continueicon.png"
            alt="Continue icon"
            class="continueicon"
        /></span>
      </div>
      <h5 class="hint">Psst...The password is potato</h5>
    </section>
  </main>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  created() {
    window.addEventListener("load", function () {
      document.querySelector(".bg-image").style.filter = "blur(0px)";
      document.querySelector(".bg-image").style.transform = "scale(1)";
    });
  },

  mounted() {
    const time = document.querySelector(".time");
    const icons = document.querySelector(".icons");
    const passwordsection = document.querySelector(".password--section");
    function showPasswordSection() {
      time.style.bottom = "48vh";
      icons.style.bottom = "48vh";
      setTimeout(function () {
        time.style.opacity = "0";
        icons.style.opacity = "0";
        passwordsection.style.opacity = "1";
        passwordsection.style.transform = "scale(1)";
        document.querySelector(".bg-image").style.filter = "blur(4px)";
      }, 250);
      document.querySelector(".bg-image").style.transform = "scale(1.1)";
      passwordsection.style.display = "flex";
    }

    document
      .querySelector("main")
      .addEventListener("click", showPasswordSection);
  },
};
</script>

<style scoped src="../styles/lockscreen.css"></style>
