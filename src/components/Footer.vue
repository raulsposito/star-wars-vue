<template>
    <footer class="h-50 bg-black text-white mt-28 py-5">
        <p class="text-center md:align-top text-1xl font-bold mb-3">I find your lack of <img :src="img" class="w-10 m-auto"/> disturbing</p>
    </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      img: require('../assets/logo.png')
    }
  },
}
</script>