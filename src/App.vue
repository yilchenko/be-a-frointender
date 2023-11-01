<template>
  <div id="app">
    <header>
      <h1><sl-icon name="rocket-takeoff"></sl-icon> Spaceship Information</h1>
    </header>
    <div style="height: 0px; width:90vw; z-Index: 40; margin-left: -300px;">
      <div style="width:100vw; height:100vh; ">
        <spline-viewer url="https://prod.spline.design/uhVI1ZftRCRjgghh/scene.splinecode"></spline-viewer>
      </div>
    </div>
    
    
    <main style="z-Index: 70;">
      <router-view></router-view>
    </main>

  </div>
</template>

<script>
  
  
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 15px;
}
body {
  background-color: #fff; 
  color: black;
}

</style>
