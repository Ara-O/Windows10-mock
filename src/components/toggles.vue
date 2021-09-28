<template>
  <div class="toggle">
    <img
      :src="image"
      alt="Bluetooth Icon"
      class="toggleimage"
      :style="{ width: iconwidth, marginTop: defaults }"
    />
    <h3 style="color: white" class="togglename">{{ name }}</h3>
  </div>
</template>
<script>
export default {
  props: ["name", "image", "iconwidth", "defaults"],
};
</script>

<style scoped>
.toggleimage {
  width: 18px;
  margin-left: -3px;
}

.togglename {
  font-size: 13px;
  font-family: "Segoe Ui Light";
  font-weight: 100;
  margin-top: 15px;
  position: absolute;
  bottom: 4px;
}
</style>
