<template>
  <a
    :href="href"
    target="_blank"
    class="px-3 py-2 rounded inline-flex border-2 bg-red-500 hover:bg-red-600 border-transparent hover:text-white transition-all"
  >
    <slot>YouTube</slot>
  </a>
</template>

<script setup>
const props = defineProps({
  href: String,
});
</script>

<style></style>
