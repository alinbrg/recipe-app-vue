<template>
  <div class="bg-gray-100 h-full">
    <Header />
    <main>
      <router-view />
    </main>
    <footer class="bg-white p-2 text-center">2023</footer>
  </div>
</template>

<script setup>
import Header from "../components/Header.vue";
</script>
