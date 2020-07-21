<template>
  <div class="tours">
    <nar-bar/>
    <carousel/>
    <TopTours/>
    <popular/>
    <video-ad/>
    <good-reasons/>
    <my-footer/>
  </div>
</template>

<script>
  import NarBar from "../../components/common/nav/NarBar";
  import Carousel from "../../components/common/carousel/Carousel";
  import TopTours from "./tours/TopTours";
  import Popular from "./tours/Popular";
  import VideoAd from "./tours/VideoAd";
  import GoodReasons from "./tours/GoodReasons";
  import MyFooter from "../../components/common/footer/MyFooter";
  export default {

    name: "Tours",
    components: {
      NarBar,
      Carousel,
      TopTours,
      Popular,
      VideoAd,
      GoodReasons,
      MyFooter
    }
  }
</script>

<style scoped>


</style>
