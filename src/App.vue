<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import Loading from "./components/common/Loading";

export default {
  name: 'App',
  components: {
    Loading
  }
}
</script>

<style>

</style>
