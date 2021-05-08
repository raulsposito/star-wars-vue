<template>
  <img :src='image' class="m-auto align-center">
</template>

<script>


export default {
  name: "Home",
  data() {
    return {
      image: require('../assets/darth.gif')
    }
  }
};
</script>
