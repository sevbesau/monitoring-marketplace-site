<template>
  <div class="flex-col">
    <p class="text-3xl text-bold mt-10 mb-1">Featured</p>
    <div class="flex flex-col opacity-80">
      <router-link to="">Featured widgets</router-link>
      <router-link to="">Top widgets</router-link>
      <router-link to="">New widgets</router-link>
    </div>
    <p class="text-3xl text-bold mt-6 mb-1">All categories</p>
    <div class="flex flex-col opacity-80">
      <router-link to="">Social</router-link>
      <router-link to="">Scraping</router-link>
      <router-link to="">Analytics</router-link>
      <router-link to="">CRM</router-link>
      <router-link to="">Payment</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidenav',
}
</script>

<style scoped>

</style>
