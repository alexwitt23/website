<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/about">About</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/photos">Photos</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/experience">Experience</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/leadership">Leadership</router-link>
        </li>
      </ul>
    </div>
    <div class="row">
      <div class="col">
        <a href="https://www.linkedin.com/in/alexwitt23/">
          <font-awesome-icon class="icon" :icon="['fab', 'linkedin']" />
        </a>
      </div>
      <div class="col me-1">
        <a href="https://github.com/alexwitt23">
          <font-awesome-icon class="icon" :icon="['fab', 'github']" />
        </a>
      </div>
    </div>
  </div>
</nav>
</template>

<script>
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export default {}
</script>

<style>

.icon {
  font-size:30px;
  color:white;
}
</style>