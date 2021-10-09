<template>
  <section class="startmenu">
    <div class="leftsection">
      <img
        src="../assets/appicons/hamburgericon.png"
        alt="Hamburger icon"
        class="hamburgericon"
      />
      <div class="bottomicons">
        <div class="bottomicondiv">
          <img
            src="@/assets/appicons/photos.png"
            alt="Photos Icon"
            class="startmenuicon"
          />
        </div>
        <div class="bottomicondiv">
          <img
            src="@/assets/appicons/document.png"
            alt="Document Icon"
            class="startmenuicon"
          />
        </div>
        <div class="bottomicondiv">
          <img
            src="@/assets/appicons/settingsicon.png"
            alt="Settings Icon"
            class="startmenuicon"
          />
        </div>
        <div class="bottomicondiv" @click="lockPage">
          <img
            src="@/assets/appicons/shutdownicon.png"
            alt="Shutdown Icon"
            class="startmenuicon"
          />
        </div>
      </div>
    </div>
    <div class="allapps">
      <h6 class="recentlyadded">Recently Added</h6>
      <div class="appdiv">
        <img
          src="@/assets/appicons/robloxlogo.png"
          alt="Roblox logo"
          class="applogo"
        />
        <h6
          style="
            font-weight: 100;
            font-family: 'Segoe Ui Light';
            font-size: 13px;
            margin: 10px 0px;
          "
        >
          Roblox Player
        </h6>
      </div>
      <h6
        style="
          margin-top: 7px;
          font-weight: 100;
          font-family: 'Segoe UI Light';
          font-size: 13px;
          margin-bottom: 9px;
        "
      >
        C
      </h6>
      <div class="appdiv">
        <img
          src="@/assets/appicons/calculator.png"
          alt="Calculator logo"
          class="applogo"
        />
        <h6
          style="
            font-weight: 100;
            font-family: 'Segoe Ui Light';
            font-size: 13px;
            margin: 10px 0px;
          "
        >
          Calculator
        </h6>
      </div>
    </div>
    <div class="rightsection">
      <h6 class="recentlyadded">Productivity</h6>
      <div class="tilediv">
        <div class="tile">
          <img
            src="../assets/appicons/office-logo.png"
            alt="Office icon"
            class="tileimage"
          />
          <h4 class="tiledesc">Office</h4>
        </div>
        <div class="tile">
          <img
            src="../assets/appicons/edge.png"
            alt="Edge icon"
            class="tileimage"
          />
          <h4 class="tiledesc">Edge</h4>
        </div>
        <div class="tile">
          <img
            src="../assets/appicons/Todo.png"
            alt="Todo icon"
            class="tileimage"
          />
          <h4 class="tiledesc">Todo</h4>
        </div>
      </div>
      <h6 class="recentlyadded" style="margin-bottom: 15px">Explore</h6>
      <div class="tile">
        <img
          src="../assets/appicons/microsoftstore.png"
          alt="Todo icon"
          class="tileimage"
        />
        <h4 class="tiledesc">Store</h4>
      </div>
    </div>
  </section>
</template>

<style scoped src="../styles/homescreen.css"></style>
<style scoped src="../styles/startmenu.css"></style>

<script>
export default {
  methods: {
    lockPage(){
      this.$router.push("/")
    }
  }
}
</script>