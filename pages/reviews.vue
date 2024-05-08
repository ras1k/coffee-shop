<template>
  <div class="mx-auto">
    <div class="h-[50svh] bg-[url('/assets/img/home/hero/coffee2.jpg')] bg-cover">
      <div
        class="w-full h-full bg-[#00000067] flex justify-center items-center text-white text-6xl font-semibold"
      >
        <BaseHeaderTitle />
      </div>
    </div>

    <div class="container py-6">
      <div class="mb-8">
        <h2 class="text-2xl font-semibold mb-4">Leave a Review</h2>
        <form
          @submit.prevent="submitReview"
          class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="name"
              >Your Name</label
            >
            <input
              v-model="newReview.name"
              type="text"
              id="name"
              placeholder="Your Name"
              required
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="rating"
              >Rating (1-5)</label
            >
            <input
              v-model="newReview.rating"
              type="number"
              min="1"
              max="5"
              id="rating"
              placeholder="Rating"
              required
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="comment"
              >Your Review</label
            >
            <textarea
              v-model="newReview.comment"
              rows="3"
              id="comment"
              placeholder="Your Review"
              required
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            ></textarea>
          </div>
          <button
            type="submit"
            class="mx-auto px-10 py-1.5 rounded-full bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-green-400 hover:to-blue-500 font-semibold text-white"
          >
            Submit Review
          </button>
        </form>
      </div>

      <div>
        <h2 class="text-2xl font-semibold mb-4">Recent Reviews</h2>
        <div v-if="reviews.length === 0" class="text-gray-500">
          No reviews yet.
        </div>
        <div v-else>
          <div
            v-for="review in reviews"
            :key="review.id"
            class="bg-white shadow-md rounded px-6 py-4 mb-4"
          >
            <div class="flex items-center mb-2">
              <span class="font-semibold">{{ review.name }}</span>
              <span class="ml-2 text-gray-500">- {{ review.rating }}/5</span>
            </div>
            <p class="text-gray-700">{{ review.comment }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const reviews = ref([
  {
    id: 1,
    name: "Abdur Rahman",
    rating: 5,
    comment: "Great coffee and excellent service!",
  },
  {
    id: 2,
    name: "Raheem Sterling",
    rating: 4,
    comment: "Nice atmosphere and friendly staff.",
  },
]);

const newReview = ref({
  name: "",
  rating: null,
  comment: "",
});

const submitReview = () => {
  const id = reviews.value.length + 1;
  reviews.value.push({ ...newReview.value, id });
  newReview.value = { name: "", rating: null, comment: "" };
};
</script>

<style scoped></style>
