<template>
<navbar></navbar>
<div class="container-fluid">
  <div class="container">
    <h1 class="text-center mt-4 mb-4">Photos</h1>
    <p class="text-center">
      These are some photos I've collected over the years. I'm no professional, but sometimes
      moments have to be captured.
    </p>
    <div class="row justify-content-center">
      <div class="col-10">
        <v-lazy-image v-for="image in images" v-bind:key="image" :src="image.url" class="img-fluid mb-4"/>
      </div>
    </div>
  </div>
</div>
</template>

<script>

import NavBar from '../layouts/NavBar'
import VLazyImage from "v-lazy-image";


export default {
  components: {
    'navbar': NavBar,
    VLazyImage,
  },
  data() {
    return { 
      images: [
        {"url": "https://cdn.jsdelivr.net/gh/alexwitt23/website-assets@main/photos/114262869-f8f00600-99a7-11eb-85e4-9c271704c1b7.jpg"},
        {"url": "https://cdn.jsdelivr.net/gh/alexwitt23/website-assets@main/photos/114262872-f8f00600-99a7-11eb-9454-08f6c2b1c46a.jpg"},
        {"url": "https://cdn.jsdelivr.net/gh/alexwitt23/website-assets@main/photos/114262873-f9889c80-99a7-11eb-8a92-21347aa157c5.png"},
        {"url": "https://cdn.jsdelivr.net/gh/alexwitt23/website-assets@main/photos/114262845-da8a0a80-99a7-11eb-90c6-b00dcff0fb8d.jpg"},
        {"url": "https://cdn.jsdelivr.net/gh/alexwitt23/website-assets@main/photos/114262874-f9889c80-99a7-11eb-881d-4c1a162f51a7.jpg"},
        {"url": "https://cdn.jsdelivr.net/gh/alexwitt23/website-assets@main/photos/114262875-f9889c80-99a7-11eb-92d5-563e2303f7a6.jpg"},
        {"url": "https://cdn.jsdelivr.net/gh/alexwitt23/website-assets@main/photos/114262876-fa213300-99a7-11eb-866d-dc26fee29364.jpg"},
        {"url": "https://cdn.jsdelivr.net/gh/alexwitt23/website-assets@main/photos/114262878-fa213300-99a7-11eb-95d7-27c89722f448.jpg"},
        {"url": "https://cdn.jsdelivr.net/gh/alexwitt23/website-assets@main/photos/114262879-fa213300-99a7-11eb-8241-74b418e3a0c4.jpg"},
        {"url": "https://cdn.jsdelivr.net/gh/alexwitt23/website-assets@main/photos/114262880-fab9c980-99a7-11eb-9e92-61bea77d247a.jpg"},
        {"url": "https://cdn.jsdelivr.net/gh/alexwitt23/website-assets@main/photos/114262881-fab9c980-99a7-11eb-9f99-b2d0a93c5ea2.jpg"},
        {"url": "https://cdn.jsdelivr.net/gh/alexwitt23/website-assets@main/photos/114262881-fab9c980-99a7-11eb-9f99-b2d0a93c5ea3.jpg"}
      ]
    }
  },
}
</script> 

<style>

</style>