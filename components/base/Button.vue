<script setup lang="ts">
defineProps({
  buttonText: String,
  link: String,
  extraClass: String,
  bgColor: String,
});
</script>
<template>
  <div>
    <button
      :class="`bg-gradient-to-r whitespace-nowrap px-10 py-1.5 rounded-full ${
        bgColor
          ? `text-black`
          : 'from-pink-500 to-yellow-500 hover:from-green-400 hover:to-blue-500'
      }`"
      :style="{
        backgroundColor: bgColor ? bgColor : '',
      }"
    >
      {{ buttonText }}
    </button>
  </div>
</template>

<style scoped></style>
