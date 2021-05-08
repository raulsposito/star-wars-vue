<template>
    <main v-if="!loading">
        <ul class="text-center" v-for="(planet, index) in planets" :key="index">
            <li class="font-bold">Name: {{ planet.name }}</li>
            <li>Climate: {{ planet.climate }}</li>
            <li>Gravity: {{ planet.gravity }}</li>
            <li>Population: {{ planet.population }}</li><br><br>
        </ul>
    
    </main>

    <main v-else class="flex flex-col align-center justify-center text-center"> 
        <div class="text-gray-500 text-3xl mt-10 mb-6">
            Loading...
        </div>
        <img :src="loadingImage" class="w-100 m-auto"/>
    </main>
</template>

<script>

export default {
    name: 'Planetas',
    data() {
        return {
            loading: true,
            planets: [],
            loadingImage: require('../assets/luke.gif')
        }
    },
    methods: {
        async fetchPlanets() {
            const res = await fetch('https://swapi.dev/api/planets/')
            return await res.json();
        }
    },
    async created() {
        const data = await this.fetchPlanets();
        this.planets = data.results;
        this.loading = false
        console.log(data)
    },
}
</script>
