<template>
  <div class="mx-auto">
    <div class="h-[40svh] bg-[url('/assets/img/home/hero/coffee2.jpg')] bg-cover">
      <div
        class="w-full h-full bg-[#00000067] flex justify-center items-center text-white text-6xl font-semibold"
      >
        <BaseHeaderTitle />
      </div>
    </div>
    <div class="container py-6 mb-20 flex flex-col sm:flex-row">
      <!-- Map Section -->
      <div class="flex-1 mb-8 sm:mr-4">
        <!-- Embedded map -->
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3354.448111382216!2d-96.71584278508313!3d32.996709480928374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c27e4c548e4c7%3A0x7279bfa64d8c87e7!2s3555%20Murphy%20Rd%20%23102%2C%20Richardson%2C%20TX%2075082%2C%20USA!5e0!3m2!1sen!2suk!4v1648688392493!5m2!1sen!2suk"
          width="100%"
          height="440"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          class="rounded-lg shadow-xl"
        ></iframe>
      </div>

      <!-- Contact Form -->
      <div class="flex-1">
        <div class="max-w-lg mx-auto">
          <form
            @submit.prevent="submitForm"
            class="bg-white shadow-xl rounded-lg px-8 pt-6 pb-8 mb-4"
          >
            <div class="mb-4">
              <label
                for="name"
                class="block text-gray-700 text-sm font-bold mb-2"
                >Your Name</label
              >
              <input
                v-model="formData.name"
                type="text"
                id="name"
                placeholder="Your Name"
                required
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div class="mb-4">
              <label
                for="email"
                class="block text-gray-700 text-sm font-bold mb-2"
                >Your Email</label
              >
              <input
                v-model="formData.email"
                type="email"
                id="email"
                placeholder="Your Email"
                required
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div class="mb-6">
              <label
                for="message"
                class="block text-gray-700 text-sm font-bold mb-2"
                >Message</label
              >
              <textarea
                v-model="formData.message"
                id="message"
                rows="5"
                placeholder="Your Message"
                required
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              ></textarea>
            </div>
            <button
              type="submit"
              class="px-5 py-1.5 btn flex items-center justify-center gap-2"
            >
              <template v-if="!isSubmitting">Send Message</template>
              <template v-else>
                <svg
                  class="animate-spin h-5 w-5 mr-3 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    class="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                  ></circle>
                  <path
                    class="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V2.83a1 1 0 011.7-.71l5 5a1 1 0 010 1.42l-5 5A1 1 0 0112 14V12H4zm2 0a6 6 0 016-6V4"
                  ></path>
                </svg>
                Sending...
              </template>
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Form data
const formData = ref({
  name: "",
  email: "",
  message: "",
});

// Flag to indicate form submission
const isSubmitting = ref(false);

// Function to submit the contact form
const submitForm = () => {
  isSubmitting.value = true;
  // Simulate form submission delay (replace with actual submission logic)
  setTimeout(() => {
    console.log("Form submitted:", formData.value);
    isSubmitting.value = false;
    // Show success alert
    alert("Your message has been sent successfully!");
    // Reset form fields after submission
    formData.value = { name: "", email: "", message: "" };
  }, 1500);
};
</script>

<style scoped>
/* Add your custom styles here */
</style>
