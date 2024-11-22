<template>
  <div
    class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64"
  >
    <div
      class="absolute w-full h-5 flex text-black justify-center bottom-0 bg-black opacity-40"
    ></div>
    <div class="absolute w-full flex text-white justify-center bottom-0">En savoir plus</div>
    <img
      v-on:click="displayPlace(destination.id)"
      :src="destination.imageSrc"
      :alt="destination.imageAlt"
      class="size-full object-cover object-center cursor-pointer"
    />
  </div>
  <h3 class="mt-6 text-sm text-gray-500">
    <a>
      {{ destination.name }}
    </a>
  </h3>
  <p class="text-base font-semibold text-gray-900">{{ destination.description }}</p>
</template>

<script setup lang="ts">
const { destination, displayPlace } = defineProps(['destination', 'displayPlace'])
</script>
