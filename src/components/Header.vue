<template>
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
          <router-link
            :to="{ name: 'byName' }"
            class="flex items-center h-full"
          >
            Search Meals
          </router-link>
        </li>
        <li
          class="flex items-center px-2 h-full transition-colors hover:bg-purple-100"
        >
          <router-link
            :to="{ name: 'byLetter' }"
            class="flex items-center h-full"
          >
            Meals By Letter</router-link
          >
        </li>
        <li
          class="flex items-center px-2 h-full transition-colors hover:bg-purple-100"
        >
          <router-link
            :to="{ name: 'byIngredient' }"
            class="flex items-center h-full"
          >
            Meals By Ingredients</router-link
          >
        </li>
      </ul>
    </nav>
  </header>
</template>
