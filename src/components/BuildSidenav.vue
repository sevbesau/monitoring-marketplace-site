<template>
  <div class="flex-col">
    <p class="text-3xl text-bold mt-10 mb-1">Build</p>
    <div class="flex flex-col opacity-80">
      <router-link to="/build/widgets">Your widgets</router-link>
    </div>
    <p class="text-3xl text-bold mt-6 mb-1">Help</p>
    <div class="flex flex-col opacity-80">
      <router-link to="">API Documentation</router-link>
      <router-link to="">Knowledge base</router-link>
      <router-link to="">Contact us</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BuildSidenav',
}
</script>

<style scoped>

</style>
