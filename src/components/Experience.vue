<template>
  <navbar></navbar>
  <div class="container-fluid">
    <h1 class="text-center mt-4 mb-4">Experience</h1>
    <div class="container">
      <p class="text-center">Here is a collection of the jobs and other experiences I've had.</p>
      <div class="row gy-5 justify-content-md-center">
        <div class="col-md-8">

          <div class="d-flex justify-content-center">
            <div class=" shadow card border-secondary mb-3" style="width: 30rem;">
              <div class="card-body">
                <h5 class="card-title">TerraClear</h5>
                <h5 class="card-subtitle">Machine Learning Engineer</h5>
                <p class="card-text">
                  <ul>
                    <li>Transitioned production inferencing platform from Darknet (C/C++) to PyTorch
                      (Python). Combined distributed data parallel and half precision to maximize GPU
                      usage and easily scale with any number of GPUs, allowing accurate mapping of tens
                      of thousands of acres within a handful of months:
                      https://www.terraclear.com/products/rock-mapping-service. </li>
                    <li>
                      Parallel experimentation with combinations of SOTA object detection model
                      architectures. Consistently applying combinations of training regimes to deliver
                      accurate and robust models.
                    </li>
                    <li>
                      Conducted applied research to develop machine learning approach to leverage
                      cross-image, duplicated detections in aerial imagery as matched points for a
                      homography generation. Used triplet loss to train light CNN to learn pose
                      invariant features, resulting in > 95% accuracy.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>

          <h4> TerraClear (05.2019 - 08.2021)</h4>
          <p>Machine Learning Engineer</p>
          
          <h4> Human Centered Robotics Lab (05.2019 - current)</h4>
          <p>Student Researcher</p>


          <h3 class="mt-4 mb-4">School Positions</h3>
          <h3>Texas Convergent (Technical Program Manager)</h3>
          <p>For the Spring 2021 semester, I am working as a Technical Program Manager.</p>

          <h3 class="mt-4 mb-4">2021</h3>
          <h3>Student Researcher</h3>
          <p></p>
        

          <h3>Texas Convergent (Lead Engineer)</h3>
          <p>For the Fall 2021 semester, I was the lead engineer in <a href="https://www.txconvergent.org/">Texas Convergent</a>'s
          Incubator program. With the program manager, I helped design a path towards our final deliverable.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import NavBar from '../layouts/NavBar'

export default {
  components: {
    'navbar': NavBar
  },
}
</script> 
