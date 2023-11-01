<template>
    <div>
      <!-- <h2>Welcome to the Spaceship Information App</h2> -->
      <p style="color:gray; margin-bottom: 30px;"><i>Explore the list of spaceships from the Star Wars universe.</i></p>
  
      <SpaceshipList @show-modal="showModal" />
  
      <Modal 
      :visible="modalVisible" 
      :pilots="selectedPilots" 
      @close="closeModal"/>

    </div>
  </template>
  
  <script>
  import SpaceshipList from '../components/SpaceshipList.vue';
  import Modal from '../components/Modal.vue';
  
  export default {
    data() {
      return {
        modalVisible: false,
        selectedPilots: [],
      };
    },
    components: {
      SpaceshipList,
      Modal,
    },
    methods: {
      showModal(selectedPilots) {
        this.modalVisible = true;
        this.selectedPilots = selectedPilots;
      },
      closeModal() {
        this.modalVisible = false;
      },
    },
  };
  </script>
  