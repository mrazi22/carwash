<template>
    <div class="container mt-5">
      <h1>Welcome to Stans Carwash</h1>
      <p>Experience the ultimate car care experience.</p>
      <div class="row">
        <div class="col-md-6">
          <img src="../../public/carwash.jpg" alt="Carwash Image" class="img-fluid rounded">
        </div>
        <div class="col-md-6">
          <h2>Our Services</h2>
          <ul>
            <li>Exterior washing and detailing</li>
            <li>Interior cleaning and vacuuming</li>
            <li>Waxing and polishing</li>
            <li>Wheel cleaning and tire dressing</li>
          </ul>
          <router-link to="/services" class="btn btn-primary">Book a Wash</router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Home',
  };
  </script>
  
  <style>
  /* Optional custom styles */
  </style>