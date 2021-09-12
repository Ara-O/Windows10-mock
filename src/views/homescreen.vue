<template>
  <main>
    <footer>
      <div class="windowsicondiv">
        <img :src="windowsicon" alt="Windows Icon" class="windowsicon" />
      </div>
      <img
        src="@/assets/appicons/searchicon.png"
        alt="Search icon"
        class="search"
      />
      <input
        type="text"
        class="searchinput"
        placeholder="Type here to search"
      />
      <div class="appsicon">
        <img
          src="../assets/appicons/cortanaicon.png"
          alt="Cortana logo"
          class="cortana taskbaricon"
        />
        <img
          src="../assets/appicons/taskbar.png"
          alt="Taskbar"
          class="taskbaricon"
        />
        <img
          src="../assets/appicons/fileexplorer.png"
          alt="File Explorer"
          class="taskbaricon"
          style="width: 26px"
        />
        <img
          src="../assets/appicons/chromeicon.png"
          alt="Chrome icon"
          class="taskbaricon"
          style="width: 25px"
        />
        <img
          src="../assets/appicons/outlookicon.png"
          alt="Outlook icon"
          class="taskbaricon"
          style="width: 25px"
        />
        <img
          src="../assets/appicons/visualstudioicon.png"
          alt="Visual studio code icon"
          class="taskbaricon"
          style="width: 25px"
        />
      </div>
    </footer>
  </main>
</template>

<style scoped>
main {
  background: url(../assets/homescreenbg.jpg);
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-size: 100%;
  margin: 0px;
  filter: brightness(0);
  transition: filter 500ms ease-in-out;
}

footer {
  display: grid;
  grid-template-columns: 48px 344px 1fr;
  background: rgb(138 138 138 / 24%);
  position: absolute;
  bottom: 1px;
  height: 45px;
  width: 99vw;
  overflow: hidden;
}

img.windowsicon {
  width: 22px;
}

.windowsicondiv {
  display: flex;
  justify-content: center;
  align-items: center;
}

.searchinput {
  background: #383838;
  font-family: "Segoe UI Light";
  border-radius: 0px;
  font-weight: 200;
  font-size: 15.5px;
  padding-left: 39px;
  color: white;
  border: solid 0.5px rgb(102, 102, 102);
}

.searchinput:focus {
  outline: none;
}

.searchinput::placeholder {
  color: white;
}

.searchinput:hover {
  border: solid 3px rgb(107, 107, 107);
  background: #4b4b4b;
}

.taskbaricon {
  width: 17px;
}

.cortana {
  filter: blur(0.3px);
  margin-left: 16px;
}

.appsicon {
  display: flex;
  align-items: center;
  column-gap: 31px;
}

.windowsicondiv:hover {
  background: #323232b0;
}

img.search {
  width: 18px;
  position: absolute;
  left: 61px;
  transform: rotate(90deg);
  top: 16px;
}
</style>

<script>
export default {
  data() {
    return {
      windowsicon: require("../assets/appicons/windowsicon.png"),
    };
  },

  mounted() {
    document
      .querySelector(".windowsicondiv")
      .addEventListener("mouseover", function () {
        document.querySelector(
          ".windowsicon"
        ).src = require("../assets/appicons/windowshovericon.png");
      });

    document
      .querySelector(".windowsicondiv")
      .addEventListener("mouseleave", function () {
        document.querySelector(
          ".windowsicon"
        ).src = require("../assets/appicons/windowsicon.png");
      });

    setTimeout(function () {
      document.querySelector("main").style.filter = "brightness(1)";
    }, 50);
  },
};
</script>
