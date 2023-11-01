<template>
  <div class="modal" v-if="visible">
    <div class="modal-content">
      <h2 style="margin-top: 30px;"><sl-icon name="stars"/> Ship's Crew List:</h2>
      <p style="margin-bottom: 30px; color:gray; "><i>These people are the brave crew members of the spaceship.</i></p>
      <div class="crew-content">
        <pilot v-for="pilot in pilots" :key="pilot.url" :pilot="pilot"></pilot>
      </div>

      <sl-button style="margin-bottom: 20px; " size="large" @click="closeModal">Close</sl-button>
    </div>
  </div>
</template>

<script>
import Pilot from './cards/Pilot.vue'; 
import '@shoelace-style/shoelace/dist/components/button/button.js';

export default {
  props: {
    visible: Boolean,
    pilots: Array, 
  },
  components: {
    Pilot, 
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>
  
  <style scoped>
  
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal-content {
    background-color: #fff;
    color: black;
    padding: 0 100px 0 100px;
    width: 40vw;
    height: auto;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    text-align: center;
  }
  .crew-content{
    text-align: left;
    margin-bottom: 50px;
  }
  </style>
  