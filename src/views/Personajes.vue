<template>
    <main v-if="!loading">
        <ul class="text-center" v-for="(personaje, index) in personajes" :key="index">
            <li class="font-bold">{{ personaje.name }}</li>
            <li>Gender: {{ personaje.gender }}</li>
            <li><a href="personaje.url" >Link</a></li><br><br>
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
    name: 'Personajes',
    data() {
        return {
            loading: true,
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
}
</script>
