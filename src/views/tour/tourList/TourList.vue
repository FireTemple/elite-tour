<template>
  <div class="tour-list">
    <nar-bar/>
    <big-screen/>
    <position/>
    <map/>
    <tour-list-main/>
    <my-footer/>
  </div>
</template>

<script>
  import MyFooter from "../../../components/common/footer/MyFooter";
  import NarBar from "../../../components/common/nav/NarBar";
  import BigScreen from "../../../components/common/bigScreen/BigScreen";
  import Position from "../../../components/common/position/Position";
  import Map from "../../../components/common/map/Map";
  import TourListMain from "./TourListMain";

  export default {
    name: "TourDetail",
    components: {
      NarBar,
      MyFooter,
      BigScreen,
      Position,
      Map,
      TourListMain
    }
  }
</script>

<style scoped>

</style>
