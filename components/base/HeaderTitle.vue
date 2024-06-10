<script setup>
const route = useRoute();
const loginCookie = useCookie("loginCookie");

const convertToTitleCase = (inputString) => {
  const words = inputString.split("-");

  // Capitalize the first letter of each word
  const capitalizedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );

  // Join the words back together
  const resultString = capitalizedWords.join(" ");

  return resultString;
};

onMounted(() => {
  console.log(route, "here the route");
});
</script>
<template>
  <h2
    class="text-xl md:text-2xl lg:text-3xl xl:text-5xl text-center font-bold text-white py-6"
  >
    <span
      v-if="route?.params?.slug || route?.name"
      class="relative min-w-[500px]"
    >
      {{
        convertToTitleCase(
          route?.params?.slug
            ? route?.params?.slug[0] === "allen"
              ? "Allen (Coming Soon)"
              : route?.params?.slug[0] === "hr-management"
              ? "HR Management"
              : route?.params?.slug[0]
            : route.name.includes("about")
            ? "About Us"
            : route.name.includes("sample")
            ? "Apply For a Free Sample"
            : route.name.includes("MenuPage")
            ? "Menu Page"
            : route.name.includes("open-location")
            ? "Open A Location"
            : route.name.includes("arabica")
            ? "CoffeeX Arabica"
            : route.name.includes("america")
            ? "CoffeeX America"
            : route.name.includes("asia")
            ? "CoffeeX Asia"
            : route.name.includes("europa")
            ? "CoffeeX Europa"
            : route.name.includes("africa")
            ? "CoffeeX Africa"
            : route.name.includes("dashboard")
            ? `Dashboard (${convertToTitleCase(loginCookie.loginRole)})`
            : route.name.includes("contact")
            ? "Contact Us"
            : route.name.includes("-slug")
            ? route.name.split("-slug")[0]
            : route.name
        )
      }}
    </span>
  </h2>
</template>

<style lang="scss" scoped>
h2 span::before,
h2 span::after {
  border-bottom: 3px solid #f19822;
  content: "";
  height: 8px;
  position: absolute;
  top: 12px;
  width: 80px;
}

h2 span::before {
  left: -85px;
}

h2 span::after {
  right: -85px;
}

@media (min-width: 1279px) {
  h2 span::before,
  h2 span::after {
    top: 26px;
  }
}
</style>
