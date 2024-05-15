<template>
  <div class="mx-auto">
    <div
      class="h-[40svh] bg-[url('/assets/img/home/hero/coffee2.jpg')] bg-cover"
    >
      <div
        class="w-full h-full bg-[#00000067] flex justify-center items-center text-white text-6xl font-semibold"
      >
        <BaseHeaderTitle />
      </div>
    </div>
    <div class="container py-6 mb-20 flex flex-col justify-center">
      <p class="text-lg container">
        <span class="text-xl font-semibold"
          >Supply Chain Excellence: From Bean to Cup</span
        >
        <br />
        <br />

        At Coffee Exploration LLC, we take pride in our commitment to excellence
        throughout the entire coffee supply chain. Our dedication to quality
        sourcing, ethical practices, and sustainability ensures that every cup
        of coffee served at our partner cafes embodies the highest standards of
        taste, integrity, and social responsibility. <br />
        <br />

        <span class="text-xl font-semibold">Sourcing</span> <br />
        <br />

        We source our coffee beans directly from reputable growers and
        cooperatives around the world. By establishing long-term relationships
        with farmers, we can ensure fair compensation, sustainable farming
        practices, and the highest quality beans for our customers. <br />
        <br />
        <span class="text-xl font-semibold">Roasting</span> <br />
        <br />
        Our beans are carefully roasted in small batches by experienced artisans
        who understand the nuances of each origin and blend. This meticulous
        approach to roasting allows us to unlock the full potential of each
        bean, resulting in a rich and flavorful coffee experience. <br />
        <br />
        <span class="text-xl font-semibold">Packaging and Distribution </span
        ><br />
        <br />
        Once roasted to perfection, our coffee is packaged with care to preserve
        its freshness and flavor. We utilize sustainable packaging materials and
        eco-friendly practices to minimize our environmental impact. Our
        efficient distribution network ensures that our coffee reaches our
        partner cafes in a timely manner, maintaining the integrity of the
        product from bean to cup. <br />
        <br />
        <span class="text-xl font-semibold">Training and Support</span> <br />
        <br />
        We provide comprehensive training and support to our partner cafes to
        ensure that they can deliver a consistently exceptional coffee
        experience to their customers. From barista training to menu
        development, our team of experts is dedicated to empowering our partners
        with the knowledge and skills they need to succeed. <br />
        <br />
        <span class="text-xl font-semibold">Social Responsibility </span><br />
        <br />
        At Coffee Exploration LLC, we believe in giving back to the communities
        that grow and harvest our coffee. We support initiatives that promote
        education, healthcare, and environmental conservation in
        coffee-producing regions, ensuring a brighter future for generations to
        come. <br />
        <br />
        <span class="text-xl font-semibold">Transparency</span> <br />
        <br />
        We are committed to transparency throughout our supply chain, providing
        our customers and partners with visibility into our sourcing practices,
        roasting techniques, and sustainability efforts. We believe that
        transparency fosters trust and accountability, allowing us to build
        meaningful relationships with everyone involved in our coffee journey.
        <br />
        <br />
        <span class="text-center text-2xl">
          Join us in celebrating the artistry, culture, and sustainability of
          coffee by exploring our supply chain and experiencing the difference
          that quality sourcing and responsible practices can make in every cup.
        </span>
      </p>
      <div class="flex items-center justify-center py-8">
        <nuxt-link
          to="/register"
          class="px-10 py-2 rounded-full bg-[#6F4E37] hover:bg-black transition ease-out hover:scale-95 w-1/3 text-center font-semibold text-white"
        >
          Register Here
        </nuxt-link>
      </div>
      <div class="text-[#6F4E37] text-center font-semibold pb-6 text-3xl">
        Already a Member?
        <NuxtLink
          to="/login/vendor-login"
          class="text-blue-400 hover:underline underline-offset-2"
        >
          Login Here
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
/* Add your custom styles here */
</style>
