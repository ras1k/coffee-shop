<script setup>
import profileImg from "@/assets/img/avatar.webp";

const team = ref([
  {
    id: 1,
    name: "Ishmam Azim",
    position: "Founder & CEO",
    bio: "With a lifelong passion for coffee and a vision for creating unique coffee experiences, Mr. Azim leads our team with enthusiasm and dedication.",
    image: profileImg,
  },
  {
    id: 2,
    name: "Ibnul Hossain",
    position: "CTO",
    bio: "As our head roaster, Mr. Sumon combines artistry and expertise to craft exceptional coffee blends that captivate the senses.",
    image: profileImg,
  },
  {
    id: 3,
    name: "Arif Akib",
    position: "COO",
    bio: "As our chief operating officer, Mr. Arif combines artistry and expertise to craft exceptional coffee blends that captivate the senses.",
    image: profileImg,
  },
]);
</script>
<template>
  <div class="mx-auto">
    <div
      class="h-[50svh] bg-[url('/assets/img/home/hero/coffee2.jpg')] bg-cover"
    >
      <div
        class="w-full h-full bg-[#00000067] flex justify-center items-center text-white text-6xl font-semibold"
      >
        <BaseHeaderTitle />
      </div>
    </div>
    <div class="container py-6">
      <div class="text-center">
        <p class="text-2xl font-semibold text-gray-700 mb-8">
          Discover the story behind our passion for coffee.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-semibold mb-4">Our Story</h2>
        <p class="text-lg text-gray-700 text-justify">
          At Coffee Exploration LLC, our journey began with a simple love for coffee and a burning desire to share that passion with the world. What started as a humble cafe nestled in a quiet corner of the city has blossomed into a vibrant community hub for coffee aficionados and curious newcomers alike. <br>

          We traverse the globe in search of the finest beans, scouring remote farms and bustling markets to unearth hidden gems that promise to deliver a truly exceptional cup of coffee. Each bean tells a story of its origin, its journey from farm to cup, and the hands that have nurtured it along the way. <br>
          
          Our dedication to quality is unwavering. With meticulous attention to detail, we craft each batch of beans through an artisanal roasting process that unlocks their full potential, revealing layers of nuanced flavors and intoxicating aromas. <br>
          
          Step into our cozy cafe, where the air is filled with the rich scent of freshly ground coffee and the sound of laughter and conversation dances through the room. Here, amidst the warmth of our welcoming space, you'll find more than just a place to enjoy a cup of coffee—you'll discover a community united by a shared passion for exploration and discovery. <br>
          
          But our journey doesn't end there. We invite you to join us on a sensory adventure with every sip, as you explore the intricate flavor profiles and unique characteristics of our carefully curated brews. Whether you're a seasoned coffee connoisseur seeking a new discovery or a curious newcomer eager to embark on your first tasting journey, there's a place for you at our table. <br>
          
          From educational workshops and guided tastings to immersive coffee experiences that transport you to distant lands, there's always something new to explore and learn. So come, indulge your senses and awaken your spirit of adventure with us at Coffee Exploration LLC. Your next great coffee discovery awaits. <br>
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-semibold mb-4">Our Mission</h2>
        <p class="text-lg text-gray-700">
          Our mission at Coffee Exploration LLC is simple yet profound: to
          elevate the coffee experience and foster meaningful connections
          through our passion for quality, innovation, and community.
        </p>
        <p class="text-lg text-gray-700">
          We believe that coffee has the power to bring people together,
          transcend boundaries, and spark moments of joy and inspiration. That's
          why we're committed to not only serving exceptional coffee but also
          creating welcoming spaces where people can gather, connect, and create
          lasting memories.
        </p>
        <p class="text-lg text-gray-700">
          As we continue to grow and evolve, our dedication to excellence
          remains unwavering. We're on a mission to redefine what it means to be
          a coffee company—one cup, one conversation, and one community at a
          time.
        </p>
      </div>

      <div>
        <h2 class="text-2xl font-semibold mb-4">Meet Our Team</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="member in team"
            :key="member.id"
            class="bg-white shadow-md rounded-lg p-6"
          >
            <img
              :src="member.image"
              :alt="member.name"
              class="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h3 class="text-xl font-semibold text-gray-800">
              {{ member.name }}
            </h3>
            <p class="text-gray-600">{{ member.position }}</p>
            <p class="text-gray-700 mt-4">{{ member.bio }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
