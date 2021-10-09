<template>
  <div class="notificationmenu">
    <h5 class="managenotifs">Manage Notifications</h5>
    <div class="notification">
      <img
        src="../assets/appicons/Alert.png"
        alt="Alert Icon"
        class="alerticon"
      />
      <div>
        <h4 class="reconnectdrive">Reconnect your drive</h4>
        <h5 class="notif--message">
          Your file history was disconnected for too long. Reconnect it and tap
          or click to keep saving copies of your files.
        </h5>
        <h6 class="time">9:02 PM</h6>
      </div>
    </div>
    <div class="bottomtoggles">
      <div class="bottomtogglessection">
        <h5 class="managenotifs2">Expand</h5>
        <h5 class="managenotifs3">Clear all notifications</h5>
      </div>
      <div class="toggles">
        <toggle
          name="Bluetooth"
          :image="require('../assets/appicons/bluetoothicon.png')"
          iconwidth="18px"
        ></toggle>
        <toggle
          name="Night Light"
          :image="require('../assets/appicons/brightnessicon.png')"
          iconwidth="24px"
          defaults="-2px"
        ></toggle>
        <toggle
          name="Location"
          :image="require('../assets/appicons/location.png')"
          iconwidth="18px"
          defaults="1px"
        ></toggle>
        <toggle
          name="Focus Assist"
          :image="require('../assets/appicons/focusassist.png')"
          iconwidth="18px"
          defaults="1px"
        ></toggle>
      </div>
    </div>
  </div>
</template>

<style scoped>
.notificationmenu {
  height: 100vh;
  width: 391px;
  position: absolute;
  bottom: 44px;
  background: #222222;
  right: -391px;
  transition: all 260ms cubic-bezier(0.41, 0.04, 0, 0.88);
}

.notificationposition {
  /* transform: translate(391px); */
  right: 0px;
}

.managenotifs {
  position: absolute;
  font-size: 12px;
  top: 41px;
  right: 27px;
  font-weight: 100;
  font-family: sans-serif;
  color: #8ddaff;
  cursor: default;
}

.managenotifs:hover {
  color: white;
}

.notification {
  display: flex;
  margin-top: 140px;
  background: #2a2a2a;
  align-items: flex-start;
  justify-content: center;
  margin: 92px 14px;
}

.notification:hover {
  background: linear-gradient(130deg, #363535a8, #2a2a2a);
}

.alerticon {
  width: 128px;
  filter: hue-rotate(343deg);
  margin-left: -24px;
}

.notif--message {
  color: white;
  font-family: "Segoe UI Light";
  line-height: 21px;
  width: 202px;
  font-weight: 100;
  font-size: 14px;
  margin: -18px 0px -1px;
}

.reconnectdrive {
  color: white;
  font-family: "Segoe UI Light";
  font-weight: 100;
  text-shadow: 0 0 0px white;
}

.bottomtoggles {
  position: absolute;
  bottom: 0px;
  width: 100%;
}

.bottomtogglessection {
  display: flex;
  justify-content: space-between;
}

.managenotifs2 {
  font-family: "Segoe Ui Light";
  font-weight: 100;
  color: white;
  font-size: 12px;
  color: #8ddaff;
  padding-left: 15px;
}

.managenotifs3 {
  font-size: 12px;
  color: #8ddaff;
  right: 0px;
  font-family: "Segoe UI Light";
  font-weight: 100;
  padding-right: 15px;
}

.managenotifs2:hover,
.managenotifs3:hover {
  color: white;
  cursor: default;
}
.time {
  color: white;
  font-size: 11px;
  font-family: "Segoe Ui Light";
  font-weight: 100;
  margin: 11px 0px 22px;
}

.toggles {
  display: flex;
  justify-content: center;
  column-gap: 7px;
  position: relative;
}

.toggle {
  background: #484848;
  height: 71px;
  width: 88px;
  margin-bottom: 10px;
  box-sizing: border-box;
  padding: 7px;
}

.toggle:hover {
  background: linear-gradient(325deg, #484848, #565656);
}
</style>

<script>
import toggle from "../components/toggles.vue";
export default {
  components: {
    toggle,
  },
};
</script>
