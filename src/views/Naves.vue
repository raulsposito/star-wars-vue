<template>
    <main v-if="!loading">

        <div class="search-wrapper p-4 mb-10 text-center">
            <input type="text" v-model="search" placeholder="Search by name..."/>
        </div>
        
        <div class="wrapper">
            <div class="text-center" v-for="(ship, index) in filteredList" :key="index">
            <!-- <a v-bind:href="ship.link" target="_blank"> -->
                <p class="font-bold">Name: {{ ship.name }}</p>
                <p>By: {{ ship.manufacturer }}</p><br>
            
            </div>
        </div>
    
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
            search: '',
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
    computed: {
        filteredList() {
            return this.ships.filter(ship => {
                return ship.name.toLowerCase().includes(this.search.toLowerCase())
            })
        }
    }
}
</script>
