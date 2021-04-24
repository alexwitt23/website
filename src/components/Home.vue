<template>
<navbar></navbar>
<div class="container-fluid">
  <div class="jumbotron jumbotron-image"
  style="background-image: url(https://user-images.githubusercontent.com/31543169/115947015-89d7de80-a48a-11eb-8a77-a593b01b4458.jpg);">
    <div class="container">
      <h1 class="text-center">Hi, I'm Alex</h1>
      <h2 class="text-center">A coder, engineer, and student at UT Austin</h2>
    </div>
  </div>
</div>
</template>

<script>

import NavBar from '../layouts/NavBar'

export default {
  components: {
    'navbar': NavBar
  }
}

</script>

<style>

.navbar {
  z-index: 1;
}

.jumbotron-image {
  background-position: center center;
  background-size: cover;
  height: 100vh;
  z-index: 2;
}

.jumbotron-image h1 {
  position: relative;
  top: 30vh;
  color:white;
}

.jumbotron-image h2 {
  position: relative;
  top: 35vh;
  color:white;
}

.container-fluid {
  padding: 0px;
}

</style>