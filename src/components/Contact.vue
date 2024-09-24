<template>
    <div class="container mt-5">
      <h1>Contact Us</h1>
      <form @submit.prevent="handleSubmit">
        <div v-if="showSuccessMessage" class="alert alert-success mt-3">
        Your wash has been scheduled!!!
      </div>
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" class="form-control" id="name" v-model="formData.name" required>
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" class="form-control" id="email" v-model="formData.email" required>
        </div>
        <div class="form-group">
          <label for="message">Message:</label>
          <textarea class="form-control" id="message" v-model="formData.message" rows="3" required></textarea>
        </div>
        <div class="form-group">
          <label for="services">Services:</label>
          <select class="form-control" id="services" v-model="formData.selectedServices" multiple required>
            <option value="Exterior Cleaning">Exterior Cleaning</option>
            <option value="Interior Cleaning">Interior Cleaning</option>
            <option value="Waxing and Polishing">Waxing and Polishing</option>
            <option value="Wheel Cleaning and Tire Dressing">Wheel Cleaning and Tire Dressing</option>
          </select>
        </div>
        <div class="form-group">
          <label for="timeOfService">Time of Service:</label>
          <input type="datetime-local" class="form-control" id="timeOfService" v-model="formData.timeOfService" required>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
     
    </div>
  </template>
  
  <script>
  export default {
    name: 'Contact',
    data() {
      return {
        formData: {
          name: '',
          email: '',
          message: '',
          selectedServices: [],
          timeOfService: '',
        },
        showSuccessMessage: false,
      };
    },
    methods: {
      handleSubmit() {
        // Perform form validation (e.g., using a library like vee-validate)
        // ...
  
        // If validation passes, send the form data to your server
        // ...
  
        // Show success message
        this.showSuccessMessage = true;
      },
    },
  };
  </script>