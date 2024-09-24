<script setup>


</script>



<template>
  <div >
    <nav class="navbar navbar-expand-lg bg-body-primary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Stan's Carwash</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <router-link to="/" class="nav-link active" aria-current="page">Home</router-link>
        </li>
        <li class="nav-item">
         <router-link to="/services" class="nav-link active" aria-current="page">Services</router-link>
        </li>
        <li class="nav-item">
         <router-link to="/contact" class="nav-link active" aria-current="page">Contact</router-link>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
  </div>

  <RouterView />
  
  
  
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap');

*{
  font-family: 'Rubik', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 
 
}
.container{
  max-width: 1100px;
  margin: 0 auto;
}

</style>
