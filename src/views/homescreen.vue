<template>
  <main>
    <div class="homescreenicon">
      <img src="@/assets/appicons/trashicon.png" alt="Trashicon" />
      <h5>Recycle Bin</h5>
    </div>
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
          />
        </div>
        <div class="icon">
          <img
            src="../assets/appicons/fileexplorer.png"
            alt="File Explorer"
            class="taskbaricon"
            style="width: 26px"
          />
        </div>
        <div class="icon">
          <img
            src="../assets/appicons/chromeicon.png"
            alt="Chrome icon"
            class="taskbaricon"
            style="width: 25px"
          />
        </div>
        <div class="icon">
          <img
            src="../assets/appicons/outlookicon.png"
            alt="Outlook icon"
            class="taskbaricon"
            style="width: 25px"
          />
        </div>
        <div class="icon">
          <img
            src="../assets/appicons/visualstudioicon.png"
            alt="Visual studio code icon"
            class="taskbaricon"
            style="width: 25px"
          />
        </div>
      </div>

      <div style="display: flex; align-items: center; margin-left: 30px">
        <div class="utilityicon">
          <img
            src="@/assets/appicons/upicon.png"
            alt="Up icon"
            class="taskbaricon2"
            style="width: 15px"
          />
        </div>
        <div class="utilityicon">
          <img
            src="@/assets/appicons/onedrive.png"
            alt="Onedrive icon"
            class="taskbaricon2"
            style="width: 20px"
          />
        </div>
        <div class="utilityicon">
          <img
            src="@/assets/appicons/wifi.png"
            alt="Wifi icon"
            class="taskbaricon2"
            style="width: 23px; transform: rotate(315deg); padding-top: 9px"
          />
        </div>
        <div class="utilityicon">
          <img
            src="@/assets/appicons/speakericon.png"
            alt="Speaker icon"
            class="taskbaricon2"
            style="width: 18px"
          />
        </div>
        <div style="display: flex; flex-direction: column">
          <h5 class="mini-date">2:11 PM</h5>
          <h5 class="mini-date">9/12/2021</h5>
        </div>
        <div class="utilityicon">
          <img
            src="@/assets/appicons/notifications.png"
            alt="Notification icon"
            class="taskbaricon2"
            style="width: 39px"
          />
        </div>
      </div>
      <div class="removeall"></div>
    </footer>
  </main>
</template>

<style scoped src="@/styles/homescreen.css"></style>

<script>
import interact from "interactjs";
export default {
  data() {
    return {
      windowsicon: require("../assets/appicons/windowsicon.png"),
    };
  },

  mounted() {
    // var element = document.querySelector(".homescreenicon");
    // var x = 0;
    // var y = 0;

    // interact(element)
    //   .draggable({
    //     modifiers: [
    //       interact.modifiers.snap({
    //         targets: [interact.snappers.grid({ x: 60, y: 60 })],
    //         range: Infinity,
    //         relativePoints: [{ x: 0, y: 0 }],
    //       }),
    //       interact.modifiers.restrict({
    //         restriction: element.parentNode,
    //         elementRect: { top: 0, left: 0, bottom: 1, right: 1 },
    //         endOnly: true,
    //       }),
    //     ],
    //     inertia: true,
    //   })
    //   .on("dragmove", function (event) {
    //     x += event.dx;
    //     y += event.dy;

    //     event.target.style.transform = "translate(" + x + "px, " + y + "px)";
    //   });
    const position = { x: 0, y: 0 };

    interact(".homescreenicon").draggable({
      listeners: {
        start(event) {
          console.log(event.type, event.target);
        },
        move(event) {
          position.x += event.dx;
          position.y += event.dy;

          event.target.style.transform = `translate(${position.x}px, ${position.y}px)`;
        },
      },
    });
    //---------------
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

    document
      .querySelector("footer")
      .addEventListener("mouseover", function (e) {
        const clicked = e.target;
        if (clicked.classList.contains("taskbaricon")) {
          clicked.closest(".icon").style.background = "#80808063";
        }
      });

    document.querySelectorAll(".taskbaricon").forEach((element) => {
      element.addEventListener("mouseleave", function () {
        element.closest(".icon").style.background = "transparent";
      });
    });
  },
};
</script>
