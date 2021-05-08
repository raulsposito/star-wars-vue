<template>
  <header class="text-center bg-black text-white p-4 mb-10">
    <img :src="img" class="w-40 m-auto" />
    <div class="text-1xl font-bold mb-3">I find your lack of Vue disturbing</div>
    <p>API by <a class="text-gray-300" href="https://swapi.dev/" target="_blank">SWAPI</a></p>
    <router-link to="/">Home</router-link> |
    <router-link to="/naves">Naves</router-link> |
    <router-link to="/personajes">Personajes</router-link> |
    <router-link to="/planetas">Planetas</router-link>

  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      img: require('../assets/star_wars_logo.png')
    }
  }
};
</script>
