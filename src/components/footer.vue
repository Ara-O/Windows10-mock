<template>
  <startmenu></startmenu>
  <footer>
    <div class="windowsicondiv">
      <img :src="windowsicon" alt="Windows Icon" class="windowsicon" />
    </div>
    <img
      src="@/assets/appicons/searchicon.png"
      alt="Search icon"
      class="search"
    />
    <input type="text" class="searchinput" placeholder="Type here to search" />
    <!-- APP ICON SECTION -->
    <div class="appsicon">
      <div class="icon">
        <img
          src="../assets/appicons/cortanaicon.png"
          alt="Cortana logo"
          class="cortana taskbaricon"
        />
      </div>
      <div class="icon">
        <img
          src="../assets/appicons/taskbar.png"
          alt="Taskbar"
          class="taskbaricon"
          title="Task view"
        />
      </div>
      <div class="icon">
        <img
          src="../assets/appicons/fileexplorer.png"
          alt="File Explorer"
          class="taskbaricon"
          style="width: 26px"
          title="File Explorer"
        />
      </div>
      <div class="icon">
        <img
          src="../assets/appicons/chromeicon.png"
          alt="Chrome icon"
          class="taskbaricon"
          style="width: 25px"
          title="Chrome"
        />
      </div>
      <div class="icon">
        <img
          src="../assets/appicons/outlookicon.png"
          alt="Outlook icon"
          class="taskbaricon"
          style="width: 25px"
          title="Mail"
        />
      </div>
      <div class="icon">
        <img
          src="../assets/appicons/visualstudioicon.png"
          alt="Visual studio code icon"
          class="taskbaricon"
          style="width: 25px"
          title="Visual Studio Code"
        />
      </div>
    </div>

    <div
      class="utilityicondiv"
      style="display: flex; align-items: center; margin-left: 30px"
    >
      <div class="utilityicon">
        <img
          src="@/assets/appicons/upicon.png"
          alt="Up icon"
          class="taskbaricon2"
          style="width: 15px"
          title="Show hidden icons"
        />
      </div>
      <div class="utilityicon">
        <img
          src="@/assets/appicons/onedrive.png"
          alt="Onedrive icon"
          class="taskbaricon2"
          style="width: 20px"
          title="Onedrive"
        />
      </div>
      <div class="utilityicon">
        <img
          src="@/assets/appicons/wifi.png"
          alt="Wifi icon"
          class="taskbaricon2"
          style="width: 23px; transform: rotate(315deg); padding-top: 9px"
          title="udmsecure"
        />
      </div>
      <div class="utilityicon">
        <img
          src="@/assets/appicons/speakericon.png"
          alt="Speaker icon"
          class="taskbaricon2"
          style="width: 18px"
          title="Headphones ( Bluetooth ): 455"
        />
      </div>
      <div
        style="
          display: flex;
          flex-direction: column;
          width: 66px;
          padding: 0px 5px;
        "
        class="utilityicon"
      >
        <h5 class="mini-date">{{ time }}</h5>
        <h5 class="mini-date">{{ date }}</h5>
      </div>
      <div class="utilityicon">
        <img
          src="@/assets/appicons/notifications.png"
          alt="Notification icon"
          class="taskbaricon2"
          style="width: 39px"
          onmouseover="this.style.background='rgb(128 128 128 / 20%)'"
          onmouseleave="this.style.background='transparent'"
        />
      </div>
    </div>
    <div class="removeall"></div>
  </footer>
</template>

<style scoped src="../styles/homescreen.css"></style>
<style scoped src="../styles/startmenu.css"></style>

<script>
import startmenu from "../components/startmenu.vue";
export default {
  components: {
    startmenu,
  },

  data() {
    return {
      time: "",
      date: "",
      windowsicon: require("../assets/appicons/windowsicon.png"),
    };
  },

  mounted() {
    let that = this;
    setInterval(function () {
      var date = new Date();
      var hours = date.getHours();
      var minutes = date.getMinutes();
      var newformat = hours >= 12 ? "PM" : "AM";
      hours = hours % 12;
      hours = hours ? hours : 12;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      that.time = hours + ":" + minutes + " " + newformat;
      that.date =
        new Date().getMonth() +
        1 +
        "/" +
        date.getDate() +
        "/" +
        date.getFullYear();
    }, 8000);

    document
      .querySelector(".windowsicondiv")
      .addEventListener("click", function () {
        console.log("potata");
        document.querySelector(".startmenu").classList.toggle("position");
        // document.querySelector(".windowsicondiv").style.background =
        //   "rgb(74 74 74)";
        // document.querySelector(".startmenu").style.bottom = "20px";
      });
  },
};
</script>
