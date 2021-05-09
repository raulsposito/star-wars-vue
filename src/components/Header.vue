<template>
  <header class="text-center bg-black text-white p-4 mb-10">
    <img :src="img" class="w-36 m-auto" />
    <p>API by <a class="text-gray-300" href="https://swapi.dev/" target="_blank">SWAPI</a></p>
 
    <a class="hover:text-yellow-300 align"><router-link to="/">Home</router-link></a> |
    <a class="hover:text-yellow-300 align"><router-link to="/naves">Naves</router-link></a> |
    <a class="hover:text-yellow-300 align"><router-link to="/personajes">Personajes</router-link></a> |
    <a class="hover:text-yellow-300 align"><router-link to="/planetas">Planetas</router-link></a> |
    <a class="hover:text-yellow-300 align"><router-link to="/about">About</router-link></a>

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
