<template>
  <header class="text-center bg-gray-900 text-white p-4 mb-10">
    <div class="text-3xl font-bold mb-3">Star Wars Vue</div>
    <p>API by <a class="text-gray-300" href="https://swapi.dev/" target="_blank">SWAPI</a></p>
    <router-link to="/">Home</router-link> |
    <router-link to="/naves">Naves</router-link> |
    <router-link to="/personajes">Personajes</router-link> |
    <router-link to="/planetas">Planetas</router-link>

  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>
