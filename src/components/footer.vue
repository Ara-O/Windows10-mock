<template>
  <section class="startmenu">
    <div>
      <img
        src="../assets/appicons/hamburgericon.png"
        alt="Hamburger icon"
        class="hamburgericon"
      />
      <div class="bottomicons">
        <img
          src="@/assets/appicons/settingsicon.png"
          alt="Settings Icon"
          class="startmenuicon"
        />
        <img
          src="@/assets/appicons/shutdownicon.png"
          alt="Shutdown Icon"
          class="startmenuicon"
        />
      </div>
    </div>
    <div></div>
    <div></div>
  </section>
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
        <h5 class="mini-date">2:11 PM</h5>
        <h5 class="mini-date">9/12/2021</h5>
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
<style scoped>
.startmenu {
  height: 630px;
  width: 640px;
  position: relative;
  left: 0px;
  bottom: -630px;
  transition: bottom 200ms linear, background 4s linear;
  display: grid;
  grid-template-columns: 45px 1fr 1fr;
  background: transparent;
  filter: brightness(0);
}

.position {
  bottom: 45px;
  background: linear-gradient(rgb(53 53 53 / 94%), #272728);
  filter: brightness(1);
}

.hamburgericon {
  left: 15px;
  top: 15px;
  width: 19px;
  position: absolute;
}
</style>

<script>
export default {
  data() {
    return { windowsicon: require("../assets/appicons/windowsicon.png") };
  },

  mounted() {
    document
      .querySelector(".windowsicondiv")
      .addEventListener("click", function () {
        console.log("potata");
        document.querySelector(".startmenu").classList.toggle("position");
        // document.querySelector(".startmenu").style.bottom = "20px";
      });
  },
};
</script>
