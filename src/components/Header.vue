<template>
  <header class="bg-white shadow h-16 fixed w-full top-0">
    <div
      class="flex justify-between items-center max-w-[1200px] mx-auto h-full"
    >
      <router-link
        :to="{ name: 'home' }"
        class="inline-flex h-full items-center px-5 text-purple-700 font-bold"
      >
        Home
      </router-link>
      <nav class="h-full flex items-center">
        <ul class="h-full flex items-center">
          <li
            class="flex h-full items-center px-2 transition-colors hover:bg-purple-200"
          >
            <router-link
              :to="{ name: 'byName' }"
              class="flex items-center h-full"
            >
              Search Meals
            </router-link>
          </li>
          <li
            class="flex items-center px-2 h-full transition-colors hover:bg-purple-200"
          >
            <router-link
              :to="{ name: 'byLetter' }"
              class="flex items-center h-full"
            >
              Meals By Letter</router-link
            >
          </li>
          <li
            class="flex items-center px-2 h-full transition-colors hover:bg-purple-200"
          >
            <router-link
              :to="{ name: 'ingredients' }"
              class="flex items-center h-full"
            >
              Ingredients</router-link
            >
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
