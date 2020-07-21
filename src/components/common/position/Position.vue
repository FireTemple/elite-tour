<template>
  <div id="position">
    <div class="container">
      <ul>
        <li><a href="javascript:void(0);" @click="goHome">Home</a></li>
        <li v-for="item in routes"><a href="javascript:void(0);" @click="goDirection(item.direction)">Category</a></li>
        <li>Page active</li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Position",
      props:{
          routes:{
            type: Array,
            default(){
              return [
                {positionName:'Category',direction:'/tours'},
                {positionName:'test',direction:'/toursList'}
              ];
            }
          }
      },
      methods:{
          goHome(){
            this.$router.push('/tours');
            window.location.reload();
          },
          goDirection(destination){
              this.$router.push(destination);
            window.location.reload();
          }
      }
    }
</script>

<style scoped>

</style>
