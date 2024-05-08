<template>
  <div>
    Cancel
  </div>
</template>

<script lang="ts" setup>
const route = useRouter();
onMounted(() => {
  route.push('/checkout')
})
</script>

<style>

</style>