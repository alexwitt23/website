<template>
  <navbar></navbar>
  <div class="container-fluid">
    <h1 class="text-center mb-4 mt-4">About Me</h1>
    <div class="container">
      <div class="row justify-content-md-center">
        <div class="col-md-5 gy-5">
          <p class="text-start lh-base">
              I am currently a senior at the University of Texas at Austin studying
              Computational Engineering. I enjoy deep learning projects, pour over coffee,
              reading, and running. I will be staying at UT in 2021 to begin a Master's in
              Computer Science.
          </p>
          <p class="text-start lh-base">
              Computational Engineering is a combination of physics, math, engineering and
              numerical analysis. The applications are ubiquitous and often take form as
              computational fluid dynamics or finite element method. My education has focused
              on coupling physics with an understanding of the tradeoffs that come with using
              different numerical methods to solve physical systems.
          </p>
          <p class="text-start lh-base">
              While in school, I've also worked as a machine learning engineer at TerraClear,
              an agricultural tech startup based in Bellevue, WA and Grangeville, ID.
              Placing emphasis on robust software and rapid model experimentation,
              I helped implement, train, and deploy state of the art AI models. I also
              integrated these models into a PyTorch-based inferencing application which
              currently produces the aerial maps at TerraClear.
          </p>
          <p class="text-start lh-base">
              Outside of class, I am a member of The Tau Beta Pi engineering honor society,
              where I served as historian for 2 years. I also lead the Image Recognition team
              within the software division at UAV Austin.
          </p>
          <div class="d-flex justify-content-center">
              <button type="button" class="btn btn-dark">Resume Download</button>
          </div>
        </div>
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
