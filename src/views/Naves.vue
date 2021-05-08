<template>
    <main v-if="!loading">
        <ul class="text-center" v-for="(ship, index) in ships" :key="index">
            <li class="font-bold">Name: {{ ship.name }}</li>
            <li>Manufacturer: {{ ship.manufacturer }}</li>
            <li>Passengers: {{ ship.passengers }}</li><br><br>
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
    name: 'Naves',
    data() {
        return {
            loading: true,
            results: [],
            ships: [],
            loadingImage: require('../assets/ship.gif')
        }
    },
    methods: {
        async fetchNaves() {
            const res = await fetch('https://swapi.dev/api/starships/')
            return await res.json();
        }
    },
    async created() {
        const data = await this.fetchNaves();
        this.ships = data.results;
        // this.title = data.results[0].name
        this.loading = false
        console.log(data)
    },
}
</script>
