<template>
    <div class="ship-wrapper">
      <sl-button style="margin-right: 20px; margin-top: 6px;" @click="viewPilots" :disabled="spaceship.pilots.length === 0">Show crew</sl-button>
      <div class="flex-col">
        <h3 style="font-weight: 600;">Name: {{ spaceship.name }}</h3>
        <p>Model: {{ spaceship.model }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import '@shoelace-style/shoelace/dist/components/button/button.js';

  export default {
    props: {
      spaceship: Object, 
    },
    methods: {
      async viewPilots() {
        this.selectedPilots = [];  
  
        const pilotPromises = this.spaceship.pilots.map(async (pilotUrl) => {
          try {
            const response = await axios.get(pilotUrl);
            this.selectedPilots.push(response.data);
          } catch (error) {
            console.error('Error fetching pilot data: ', error);
          }
        });
  
        try {
          await Promise.all(pilotPromises);
          this.$emit('show-modal', this.selectedPilots);
        } catch (error) {
          console.error('Error fetching pilot data: ', error);
        }
      },
    },
  };
  </script>
  <style scoped>
.ship-wrapper{
    display: flex;
    flex-direction: row;
    margin: 10px 0px 10px 0px;
}
.flex-col{
    display: flex;
    flex-direction: column;
    line-height: 25px;
}

</style>
  