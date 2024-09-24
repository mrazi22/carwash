<template>
    <div class="container mt-5">
      <h1>Our Services</h1>
      <div class="row">
        <div class="col-md-6">
          <div class="card mb-3">
            <img src="../../public/exterior.jpg" alt="Exterior Cleaning" class="card-img-top " style="height: 400px;">
            <div class="card-body">
              <h5 class="card-title">Exterior Cleaning</h5>
              <p class="card-text">Our exterior cleaning service includes thorough washing, detailing, and waxing to restore your car's shine.</p>
              <p class="card-text">Price: KSh 2000</p>
              <button class="btn btn-primary" @click="handleBooking('Exterior Cleaning')">Book Now</button>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card mb-3">
            <img src="../../public/interior.jpg" alt="Interior Cleaning" class="card-img-top" style="height: 400px;" >
            <div class="card-body">
              <h5 class="card-title">Interior Cleaning</h5>
              <p class="card-text">Our interior cleaning service includes vacuuming, shampooing, and stain removal to keep your car fresh and clean.</p>
              <p class="card-text">Price: KSh 1500</p>
              <button class="btn btn-primary" @click="handleBooking('Interior Cleaning')">Book Now</button>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card mb-3">
            <img src="../../public//polish.jpg" alt="Waxing and Polishing" class="card-img-top" style="height: 400px;">
            <div class="card-body">
              <h5 class="card-title">Waxing and Polishing</h5>
              <p class="card-text">Our waxing and polishing service restores your car's paint to its original luster and provides protection against the elements.</p>
              <p class="card-text">Price: KSh 3000</p>
              <button class="btn btn-primary" @click="handleBooking('Waxing and Polishing')">Book Now</button>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card mb-3">
            <img src="../../public/tyre.jpg" alt="Wheel Cleaning and Tire Dressing" class="card-img-top" style="height: 400px;">
            <div class="card-body">
              <h5 class="card-title">Wheel Cleaning and Tire Dressing</h5>
              <p class="card-text">Our wheel cleaning and tire dressing service keeps your wheels and tires looking clean and polished.</p>
              <p class="card-text">Price: KSh 500</p>
              <button class="btn btn-primary" @click="handleBooking('Wheel Cleaning and Tire Dressing')">Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  export default {
    name: 'Services',
    setup() {
      const router = useRouter();
      const showBookingSuccessModal = ref(false);
  
      const handleBooking = (serviceName) => {
        // Handle booking logic (e.g., send data to server)
        console.log('Booking:', serviceName);
  
        // Show booking success modal and navigate to contact page
        showBookingSuccessModal.value = true;
        router.push('/contact');
      };
      
  
      return {
        showBookingSuccessModal,
        handleBooking,
      };
    },
  };
  </script>
  
  <style>
  /* Optional custom styles */
  </style>