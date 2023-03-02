<template>
  <div class="bg-gray-100 h-full">
    <header class="bg-white shadow h-16 flex justify-between items-center">
      <router-link
        :to="{ name: 'home' }"
        class="inline-flex h-full items-center px-5"
      >
        Home
      </router-link>
      <nav class="h-full flex items-center">
        <ul class="h-full flex items-center gap-2">
          <li
            class="flex h-full items-center px-2 transition-colors hover:bg-purple-100"
          >
            <router-link to="/" class="flex items-center h-full">
              Search Meals
            </router-link>
          </li>
          <li
            class="flex items-center px-2 h-full transition-colors hover:bg-purple-100"
          >
            <router-link to="/" class="flex items-center h-full">
              Meals By Letter</router-link
            >
          </li>
          <li
            class="flex items-center px-2 h-full transition-colors hover:bg-purple-100"
          >
            <router-link to="/" class="flex items-center h-full">
              Meals By Ingredients</router-link
            >
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <router-view />
    </main>
    <footer class="bg-white p-2 text-center">2023</footer>
  </div>
</template>

<script setup></script>

<style scoped></style>
