<template>
    <main v-if="!loading">

        <div class="search-wrapper p-4 mb-10 text-center">
            <input type="text" v-model="search" placeholder="Search by name..."/>
        </div>

        <div class="wrapper">
            <ul class="text-center" v-for="(personaje, index) in filteredList" :key="index">
                <li class="font-bold">{{ personaje.name }}</li>
                <li>Gender: {{ personaje.gender }}</li>
                <li><a href="personaje.url" >Link</a></li><br><br>
            </ul>
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
    name: 'Personajes',
    data() {
        return {
            loading: true,
            search: '',
            personajes: [],
            loadingImage: require('../assets/luke.gif')
        }
    },
    methods: {
        async fetchPeople() {
            const res = await fetch('https://swapi.dev/api/people/')
            return await res.json();
        }
    },
    async created() {
        const data = await this.fetchPeople();
        this.personajes = data.results;
        this.loading = false
        console.log(data)
    },
    computed: {
        filteredList() {
            return this.personajes.filter(item => {
                return item.name.toLowerCase().includes(this.search.toLowerCase())
            })
        }
    }
}
</script>
