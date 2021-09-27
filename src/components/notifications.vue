<template>
  <div class="notificationmenu">
    <h5 class="managenotifs">Manage Notifications</h5>
    <div class="notification">
      <img
        src="../assets/appicons/Alert.png"
        alt="Alert Icon"
        class="alerticon"
      />
      <h5 class="notif--message">
        Your file history was disconnected for too long. Reconnect in order to
        keep packing up your files or else data might be lost.
      </h5>
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
  top: 39px;
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
  background: #1d1d1d;
  align-items: center;
  justify-content: center;
  margin: 140px 17px;
  height: 159px;
}

.notification:hover {
  background: #3f3d3da8;
}

.alerticon {
  width: 136px;
  filter: hue-rotate(317deg);
}

.notif--message {
  color: white;
  font-family: "Segoe UI Light";
  line-height: 21px;
  width: 202px;
  font-weight: 100;
}
</style>
