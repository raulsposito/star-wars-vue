<template>
  <div class="about">
    <img :src="r2d2" class="m-auto align-center"><br><br>
    <h1 class="text-center font-bold">Beep Beep Be Deep Boop! - R2D2</h1><br><br>
    <p class="text-center">This is an open source / educational project</p>
    <p class="text-center">Made with <strong>Vue JS</strong> & <strong>Tailwind</strong></p>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      img: require('../assets/logo.png'),
      r2d2: require('../assets/r2d2.gif')
    }
  },
}

</script>