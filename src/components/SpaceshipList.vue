<template>
  <div>
      <div class="ship-list">
        <spaceship v-for="ship in spaceships" :key="ship.url" :spaceship="ship" @show-modal="showModal"></spaceship>
      </div>
      
    <pagination  
    :nextPageUrl="nextPageUrl" 
    :prevPageUrl="prevPageUrl" 
    @fetch-data="fetchData"/>

  </div>
</template>

<script>
import axios from 'axios';
import Pagination from './Pagination.vue';
import Spaceship from './cards/Spaceship.vue'; 

export default {
  data() {
    return {
      spaceships: [],
      nextPageUrl: null,
      prevPageUrl: null,
      modalVisible: false,
      selectedShip: null,
      selectedPilots: [],
      
    };
  },
  methods: {
    async fetchData(url) {
      try {
        const response = await axios.get(url);
        this.spaceships = response.data.results;
        this.nextPageUrl = response.data.next;
        this.prevPageUrl = response.data.previous;

        
        
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    },
    showModal(selectedPilots) {
      this.$emit('show-modal', selectedPilots); 
    },
  },
  components: {
    Pagination,
    Spaceship, 
  },
  created() {
    this.fetchData('https://swapi.dev/api/starships?page=1');
  },
};
</script>

<style scoped>
.ship-list{
  display: flex;
  flex-direction: column;
}
</style>