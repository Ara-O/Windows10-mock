<template>
  <main>
    <div class="homescreenicon">
      <img
        src="@/assets/appicons/trashicon.png"
        alt="Trashicon"
        title="Contains files and folders that you have deleted"
      />
      <h5>Recycle Bin</h5>
    </div>
    <taskbar></taskbar>
  </main>
</template>

<style scoped src="@/styles/homescreen.css"></style>

<script>
import taskbar from "../components/footer";
import interact from "interactjs";
export default {
  components: {
    taskbar,
  },

  data() {
    return {};
  },

  mounted() {
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
        if (clicked.classList.contains("icon")) {
          clicked.closest(".icon").style.background = "#80808063";
        }
      });

    document.querySelectorAll(".icon").forEach((element) => {
      element.addEventListener("mouseleave", function () {
        element.closest(".icon").style.background = "transparent";
      });
    });

    document
      .querySelector(".utilityicondiv")
      .addEventListener("mouseover", function (e) {
        if (e.target.classList.contains("utilityicon")) {
          e.target.style.background = "rgb(128 128 128 / 24%)";
        }
      });

    document.querySelectorAll(".utilityicon").forEach((element) => {
      element.addEventListener("mouseleave", function () {
        element.style.background = "transparent";
      });
    });
  },
};
</script>
