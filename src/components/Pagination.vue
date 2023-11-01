<template>
    <div style="color: aqua; font-size: 40px; display: flex; align-items: center; justify-content: center;">
      
      <sl-button-group label="Alignment">
        <sl-button size="small" pill @click="prevPage" :disabled="!prevPageUrl">Previous page</sl-button>
        <sl-button size="small" pill @click="nextPage" :disabled="!nextPageUrl">Next page</sl-button>
      </sl-button-group>
      
    </div>
  </template>
  
  <script>
  import '@shoelace-style/shoelace/dist/components/button/button.js';
  import '@shoelace-style/shoelace/dist/components/button-group/button-group.js';
  
  export default {
    props: {
      nextPageUrl: String,
      prevPageUrl: String,
    },
    
    methods: {
      prevPage() {
        if (this.prevPageUrl) {
          this.fetchData(this.prevPageUrl);
        }
      },
      nextPage() {
        if (this.nextPageUrl) {
          this.fetchData(this.nextPageUrl);
          
        }
      },
      fetchData(url) {
        this.$emit('fetch-data', url);
      },
    },
  };
  </script>
  